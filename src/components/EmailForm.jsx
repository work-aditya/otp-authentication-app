import React, { useState } from 'react';
import { sendOtpToEmail } from '../services/otpService';
import { Mail, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function EmailForm({ onOtpSent, initialEmail = '' }) {
  const [email, setEmail] = useState(initialEmail);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (val) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      setError('Please enter your email address.');
      return;
    }

    if (!validateEmail(cleanEmail)) {
      setError('Please enter a valid email address format.');
      return;
    }

    setLoading(true);
    try {
      // Direct Real-Time Cloud Firestore OTP Generation & Expiry
      const result = await sendOtpToEmail(cleanEmail);

      if (result && result.success) {
        onOtpSent({
          email: cleanEmail,
          expiresInMs: result.expiresInMs || 120000,
        });
      } else {
        setError('Unable to send verification code. Please try again.');
      }
    } catch (err) {
      console.error('Error sending OTP:', err);
      setError(err.message || 'Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card" id="email-step-card">
      <div className="card-header">
        <div className="brand-icon-wrapper" aria-hidden="true">
          <ShieldCheck size={32} />
        </div>
        <h1 className="card-title">Sign In with OTP</h1>
        <p className="card-subtitle">
          Enter your email to receive a secure, time-based 6-digit verification code.
        </p>
      </div>

      {error && (
        <div className="alert-box alert-error" id="email-error-alert" role="alert">
          <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="email-input" className="form-label">
            Email Address
          </label>
          <div className="input-wrapper">
            <span className="input-icon">
              <Mail size={18} />
            </span>
            <input
              id="email-input"
              type="email"
              className="form-input"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              disabled={loading}
              autoFocus
              autoComplete="email"
              required
            />
          </div>
        </div>

        <button
          id="send-otp-btn"
          type="submit"
          className="btn-primary"
          disabled={loading || !email.trim()}
        >
          {loading ? (
            <>
              <span className="spinner" aria-hidden="true" />
              <span>Generating & Sending Code...</span>
            </>
          ) : (
            <>
              <span>Send Verification Code</span>
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
