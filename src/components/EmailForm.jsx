import React, { useState } from 'react';
import { sendOtpToEmail } from '../services/otpService';
import { AlertCircle } from 'lucide-react';

export default function EmailForm({ onOtpSent, initialEmail = '' }) {
  const [email, setEmail] = useState(initialEmail);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

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
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
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
    <div id="email-step-view" className="auth-form-container">
      {/* Top-left Application Branding & Tagline */}
      <div className="brand-header">
        <h1 className="brand-title">AuthVault</h1>
        <p className="brand-tagline">
          {isRegistering
            ? 'Initialize an encrypted vault with time-based verification.'
            : 'Zero-knowledge time-based verification. Direct to inbox.'}
        </p>
      </div>

      {error && (
        <div className="alert-box alert-error" id="email-error-alert" role="alert">
          <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="auth-form">
        <div className="form-group">
          <label htmlFor="email-input" className="form-label">
            Email
          </label>
          <input
            id="email-input"
            type="email"
            className="form-input"
            placeholder="operator@security.internal"
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

        {/* Compact Solid Gold Button */}
        <div>
          <button
            id="send-otp-btn"
            type="submit"
            className="btn-primary"
            disabled={loading || !email.trim()}
          >
            {loading ? (
              <>
                <span className="spinner" aria-hidden="true" />
                <span>Sending token...</span>
              </>
            ) : (
              <span>{isRegistering ? 'Create vault' : 'Sign in'}</span>
            )}
          </button>
        </div>

        {/* Simple Secondary Text Link Action */}
        <div className="secondary-action-wrapper">
          <button
            id="toggle-vault-mode-btn"
            type="button"
            className="btn-link"
            onClick={() => {
              setIsRegistering(!isRegistering);
              setError('');
            }}
            disabled={loading}
          >
            {isRegistering ? 'Sign in to existing vault' : 'Create vault'}
          </button>
        </div>
      </form>
    </div>
  );
}
