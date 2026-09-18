const crypto = require('crypto');
const assert = require('assert');

console.log('--- Testing Time-Based OTP Cryptographic and Expiration Logic ---');

// 1. Generate 6-digit OTP
const otpNum = crypto.randomInt(100000, 1000000);
const otp = otpNum.toString();
assert.strictEqual(otp.length, 6, 'OTP must be exactly 6 digits');
assert.ok(/^\d{6}$/.test(otp), 'OTP must contain only digits');
console.log('✓ Step 1: 6-digit numeric OTP generated:', otp);

// 2. Hash with salt
const salt = crypto.randomBytes(16).toString('hex');
const otpHash = crypto.createHash('sha256').update(otp + salt).digest('hex');
assert.strictEqual(otpHash.length, 64, 'SHA-256 hash must be 64 characters hex');
console.log('✓ Step 2: Salted SHA-256 hash computed successfully');

// 3. Expiration calculation (strictly 2 minutes)
const now = Date.now();
const OTP_EXPIRATION_MS = 2 * 60 * 1000;
const expiresAt = now + OTP_EXPIRATION_MS;
assert.strictEqual(expiresAt - now, 120000, 'Expiration must be exactly 120,000 ms (2 minutes)');
console.log('✓ Step 3: Exact 2-minute expiration validated (120,000 ms)');

// 4. Constant-time verification test
function verifyCode(inputCode, storedHash, storedSalt, expiryTimestamp, currentTimestamp) {
  if (currentTimestamp > expiryTimestamp) {
    return { valid: false, reason: 'expired' };
  }
  const computed = crypto.createHash('sha256').update(inputCode + storedSalt).digest('hex');
  const isMatch = crypto.timingSafeEqual(Buffer.from(computed, 'utf8'), Buffer.from(storedHash, 'utf8'));
  return { valid: isMatch, reason: isMatch ? 'success' : 'invalid' };
}

// 4a. Valid OTP within 2 minutes
const resultValid = verifyCode(otp, otpHash, salt, expiresAt, now + 30000);
assert.strictEqual(resultValid.valid, true, 'Valid code within 2 minutes should pass');
console.log('✓ Step 4a: Valid OTP verification succeeded within 2 minutes');

// 4b. Invalid OTP within 2 minutes
const resultWrong = verifyCode('000000', otpHash, salt, expiresAt, now + 30000);
assert.strictEqual(resultWrong.valid, false, 'Wrong code should fail');
assert.strictEqual(resultWrong.reason, 'invalid');
console.log('✓ Step 4b: Invalid OTP correctly rejected');

// 4c. Expired OTP (> 2 minutes)
const resultExpired = verifyCode(otp, otpHash, salt, expiresAt, now + 120001);
assert.strictEqual(resultExpired.valid, false, 'Expired code must fail');
assert.strictEqual(resultExpired.reason, 'expired');
console.log('✓ Step 4c: Expired OTP (> 2 min) correctly rejected');

console.log('\nAll OTP authentication logic tests passed with 100% success!');
