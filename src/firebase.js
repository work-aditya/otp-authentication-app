import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getAnalytics, isSupported } from "firebase/analytics";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCq6qS6nyYuWH-yLoFOjnrdiSZAyH3ei0U",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "time-based---otp-authenticator.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "time-based---otp-authenticator",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "time-based---otp-authenticator.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "177998085204",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:177998085204:web:a112e912c3b3ca018581c1",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-2K9VC5SCXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

// Initialize Analytics conditionally (only in browser environments where supported)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch((err) => {
    console.debug("Analytics not supported in this environment:", err);
  });
}

// Connect to local emulators if explicitly requested via VITE_USE_EMULATORS
if (import.meta.env.VITE_USE_EMULATORS === "true") {
  try {
    connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: true });
    connectFirestoreEmulator(db, "localhost", 8080);
    connectFunctionsEmulator(functions, "localhost", 5001);
    console.log("[Firebase] Connected to local emulator suite");
  } catch (err) {
    console.warn("[Firebase] Emulators already connected or unavailable:", err.message);
  }
}

export { app, auth, db, functions, analytics };
