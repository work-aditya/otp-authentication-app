import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import EmailForm from './components/EmailForm';
import OtpVerification from './components/OtpVerification';
import SuccessDashboard from './components/SuccessDashboard';

export default function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Authentication Flow State: 'email' | 'otp'
  const [step, setStep] = useState('email');
  const [emailData, setEmailData] = useState({
    email: '',
    expiresInMs: 120000,
  });

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleOtpSent = (data) => {
    setEmailData(data);
    setStep('otp');
  };

  const handleBackToEmail = () => {
    setStep('email');
  };

  const handleVerified = (authenticatedUser) => {
    if (authenticatedUser) {
      setUser(authenticatedUser);
    }
  };

  return (
    <main className="app-container">
      <div className="auth-wrapper">
        {authLoading ? (
          <div style={{ padding: '40px 0' }}>
            <div className="spinner spinner-light" style={{ width: '20px', height: '20px', marginBottom: '12px' }} />
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Initializing authentication system...</p>
          </div>
        ) : user ? (
          <SuccessDashboard user={user} />
        ) : step === 'email' ? (
          <EmailForm
            onOtpSent={handleOtpSent}
            initialEmail={emailData.email}
          />
        ) : (
          <OtpVerification
            email={emailData.email}
            expiresInMs={emailData.expiresInMs}
            onBack={handleBackToEmail}
            onVerified={handleVerified}
          />
        )}
      </div>
    </main>
  );
}
