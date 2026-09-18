const functions = require("firebase-functions");
const admin = require("firebase-admin");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

admin.initializeApp();
const db = admin.firestore();

// Rate limiting & cooldown constants
const OTP_EXPIRATION_MS = 2 * 60 * 1000; // Strictly 2 minutes
const RESEND_COOLDOWN_MS = 30 * 1000; // 30 seconds cooldown between resends
const MAX_ATTEMPTS = 5;

/**
 * Configure Nodemailer transport:
 * 1. Uses SMTP env vars if provided (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
 * 2. Falls back to an Ethereal test account in development for instantaneous preview links
 */
let cachedTransporter = null;
async function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    cachedTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    return cachedTransporter;
  }

  // Fallback to test account
  const testAccount = await nodemailer.createTestAccount();
  cachedTransporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
  console.log("Using Ethereal test email account:", testAccount.user);
  return cachedTransporter;
}

/**
 * Callable Function: sendOtp
 * Generates a 6-digit OTP, stores its SHA-256 salted hash with a 2-minute expiry,
 * and sends it via email.
 */
exports.sendOtp = functions.https.onCall(async (data, context) => {
  const email = (data.email || "").trim().toLowerCase();

  // Basic email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Please enter a valid email address."
    );
  }

  const docRef = db.collection("otps").doc(email);
  const existingDoc = await docRef.get();

  // Check resend cooldown
  if (existingDoc.exists) {
    const existingData = existingDoc.data();
    if (existingData.createdAt) {
      const timeSinceCreated = Date.now() - existingData.createdAt.toMillis();
      if (timeSinceCreated < RESEND_COOLDOWN_MS) {
        const waitSeconds = Math.ceil((RESEND_COOLDOWN_MS - timeSinceCreated) / 1000);
        throw new functions.https.HttpsError(
          "resource-exhausted",
          `Please wait ${waitSeconds} seconds before requesting a new code.`
        );
      }
    }
  }

  // Generate cryptographically secure 6-digit numeric OTP
  const otpNumber = crypto.randomInt(100000, 1000000);
  const otp = otpNumber.toString();

  // Generate unique salt and hash
  const salt = crypto.randomBytes(16).toString("hex");
  const otpHash = crypto.createHash("sha256").update(otp + salt).digest("hex");

  const now = Date.now();
  const expiresAt = admin.firestore.Timestamp.fromMillis(now + OTP_EXPIRATION_MS);

  // Store in Firestore. Overwrites previous OTP, invalidating prior codes
  await docRef.set({
    email,
    otpHash,
    salt,
    createdAt: admin.firestore.Timestamp.fromMillis(now),
    expiresAt,
    attempts: 0,
    maxAttempts: MAX_ATTEMPTS,
  });

  // Send email with stylish HTML template
  let previewUrl = null;
  try {
    const transporter = await getTransporter();
    const fromAddress = process.env.EMAIL_FROM || '"Secure OTP Authenticator" <auth@otp-authenticator.app>';

    const mailOptions = {
      from: fromAddress,
      to: email,
      subject: `Your Verification Code: ${otp}`,
      text: `Your one-time verification code is: ${otp}. It will expire in exactly 2 minutes. If you did not request this code, please ignore this email.`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; background: #0f172a; border-radius: 16px; color: #f8fafc; border: 1px solid #1e293b;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="display: inline-block; padding: 12px; background: rgba(99, 102, 241, 0.15); border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">
              <span style="font-size: 28px;">🔐</span>
            </div>
            <h1 style="color: #f8fafc; font-size: 24px; font-weight: 700; margin: 16px 0 6px 0;">Verification Code</h1>
            <p style="color: #94a3b8; font-size: 14px; margin: 0;">Use the 6-digit code below to complete your authentication</p>
          </div>

          <div style="background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 14px; padding: 24px; text-align: center; margin: 24px 0;">
            <span style="font-size: 38px; font-weight: 800; letter-spacing: 10px; color: #818cf8; font-family: monospace;">${otp}</span>
          </div>

          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: 10px; padding: 12px 16px; margin-bottom: 24px; text-align: center;">
            <p style="color: #fca5a5; font-size: 13px; font-weight: 600; margin: 0;">
              ⏳ This code expires strictly in 2 minutes.
            </p>
          </div>

          <p style="color: #64748b; font-size: 12px; text-align: center; margin: 0;">
            If you did not make this request, you can safely disregard this email.
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log(`[Ethereal Preview URL for ${email}]: ${previewUrl}`);
    }
  } catch (emailErr) {
    console.error("Error sending email:", emailErr);
    // Don't fail the operation completely in dev/demo if SMTP fails
  }

  return {
    success: true,
    message: "OTP sent successfully to your email.",
    expiresInMs: OTP_EXPIRATION_MS,
    previewUrl,
  };
});

/**
 * Callable Function: verifyOtp
 * Verifies the 6-digit code against Firestore hash, checks the 2-minute deadline,
 * creates/updates user in Firebase Auth, and returns a Custom Auth Token.
 */
exports.verifyOtp = functions.https.onCall(async (data, context) => {
  const email = (data.email || "").trim().toLowerCase();
  const otp = (data.otp || "").toString().trim();

  if (!email) {
    throw new functions.https.HttpsError("invalid-argument", "Email is required.");
  }

  if (!otp || !/^\d{6}$/.test(otp)) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Please provide a valid 6-digit OTP code."
    );
  }

  const docRef = db.collection("otps").doc(email);
  const doc = await docRef.get();

  if (!doc.exists) {
    throw new functions.https.HttpsError(
      "not-found",
      "No active OTP found for this email. Please request a new code."
    );
  }

  const otpData = doc.data();

  // Check 2-minute expiration
  const now = Date.now();
  if (now > otpData.expiresAt.toMillis()) {
    // Delete expired record
    await docRef.delete();
    throw new functions.https.HttpsError(
      "deadline-exceeded",
      "This verification code has expired (2 minutes limit). Please request a new OTP."
    );
  }

  // Check maximum failed attempts
  if (otpData.attempts >= otpData.maxAttempts) {
    await docRef.delete();
    throw new functions.https.HttpsError(
      "resource-exhausted",
      "Too many incorrect attempts. For security reasons, this OTP is now invalidated. Please request a new code."
    );
  }

  // Cryptographic constant-time verification
  const computedHash = crypto
    .createHash("sha256")
    .update(otp + otpData.salt)
    .digest("hex");

  let isMatch = false;
  try {
    isMatch = crypto.timingSafeEqual(
      Buffer.from(computedHash, "utf8"),
      Buffer.from(otpData.otpHash, "utf8")
    );
  } catch (err) {
    isMatch = false;
  }

  if (!isMatch) {
    const nextAttempts = (otpData.attempts || 0) + 1;
    const remaining = otpData.maxAttempts - nextAttempts;
    if (nextAttempts >= otpData.maxAttempts) {
      await docRef.delete();
      throw new functions.https.HttpsError(
        "resource-exhausted",
        "Invalid code. Maximum attempts reached. Please request a new OTP."
      );
    } else {
      await docRef.update({
        attempts: admin.firestore.FieldValue.increment(1),
      });
      throw new functions.https.HttpsError(
        "invalid-argument",
        `Incorrect code. ${remaining} attempt(s) remaining.`
      );
    }
  }

  // Valid OTP! Delete immediately to ensure single-use
  await docRef.delete();

  // Create or fetch Firebase Auth user
  let userRecord;
  try {
    userRecord = await admin.auth().getUserByEmail(email);
  } catch (err) {
    if (err.code === "auth/user-not-found") {
      userRecord = await admin.auth().createUser({
        email,
        emailVerified: true,
      });
    } else {
      console.error("Error fetching user by email:", err);
      throw new functions.https.HttpsError("internal", "Authentication error.");
    }
  }

  if (!userRecord.emailVerified) {
    await admin.auth().updateUser(userRecord.uid, { emailVerified: true });
  }

  // Update Firestore user document
  await db.collection("users").doc(userRecord.uid).set(
    {
      email: userRecord.email,
      lastLoginAt: admin.firestore.FieldValue.serverTimestamp(),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  // Generate Custom Token
  const customToken = await admin.auth().createCustomToken(userRecord.uid, {
    email: userRecord.email,
  });

  return {
    success: true,
    customToken,
    user: {
      uid: userRecord.uid,
      email: userRecord.email,
    },
  };
});
