import React, { useState, useEffect, useRef } from 'react';
import { sendOtpToEmail, verifyOtpAndAuthenticate } from '../services/otpService';
import { AlertCircle, RotateCw } from 'lucide-react';

export default function OtpVerification({
  email,
  expiresInMs = 120000,
  onBack,
  onVerified,
}) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [shake, setShake] = useState(false);

  // 2-Minute Countdown state (strictly 120s)
  const totalSeconds = Math.floor(expiresInMs / 1000);
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
  const [isExpired, setIsExpired] = useState(false);

  // Resend cooldown (30s)
  const [resendCooldown, setResendCooldown] = useState(30);

  const inputRefs = useRef([]);

  // Timer Countdown Effect
  useEffect(() => {
    if (secondsRemaining <= 0) {
      setIsExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          setIsExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsRemaining]);

  // Resend Cooldown Countdown
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const cooldownTimer = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(cooldownTimer);
  }, [resendCooldown]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 300);
  };

  const handleChange = (index, value) => {
    if (isExpired) return;

    const cleanVal = value.replace(/\D/g, '');
    if (!cleanVal && value !== '') return;

    const newOtp = [...otp];
    newOtp[index] = cleanVal ? cleanVal.slice(-1) : '';
    setOtp(newOtp);
    setError('');

    if (cleanVal && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    const completeCode = newOtp.join('');
    if (completeCode.length === 6) {
      verifyCode(completeCode);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    if (isExpired) return;
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim().replace(/\D/g, '');

    if (pastedData.length >= 6) {
      const codeDigits = pastedData.slice(0, 6).split('');
      setOtp(codeDigits);
      inputRefs.current[5]?.focus();
      verifyCode(codeDigits.join(''));
    } else if (pastedData.length > 0) {
      const newOtp = [...otp];
      pastedData.split('').forEach((char, i) => {
        if (i < 6) newOtp[i] = char;
      });
      setOtp(newOtp);
      const nextIndex = Math.min(pastedData.length, 5);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const verifyCode = async (codeToVerify) => {
    const fullOtp = codeToVerify || otp.join('');
    if (fullOtp.length !== 6) {
      setError('Please enter all 6 digits.');
      triggerShake();
      return;
    }

    if (isExpired) {
      setError('Security token expired (2 min limit). Please request a fresh token.');
      triggerShake();
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await verifyOtpAndAuthenticate(email, fullOtp);

      if (result && result.success) {
        onVerified(result.user);
      }
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setError(err.message || 'Invalid verification token. Please try again.');
      triggerShake();
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (resending || resendCooldown > 0) return;

    setResending(true);
    setError('');

    try {
      const result = await sendOtpToEmail(email);

      if (result && result.success) {
        setOtp(['', '', '', '', '', '']);
        setSecondsRemaining(Math.floor((result.expiresInMs || 120000) / 1000));
        setIsExpired(false);
        setResendCooldown(30);
        inputRefs.current[0]?.focus();
        setInfoMessage('New security token dispatched to your email.');
      }
    } catch (err) {
      console.error('Resend error:', err);
      setError(err.message || 'Failed to dispatch new token.');
    } finally {
      setResending(false);
    }
  };

  return (
    <div id="otp-step-view" className="auth-form-container">
      {/* Top-left Application Branding & Tagline */}
      <div className="brand-header">
        <h1 className="brand-title">AuthVault</h1>
        <p className="brand-tagline">
          Enter the 6-digit security token dispatched to <span className="highlight-text">{email}</span>
        </p>
      </div>

      {infoMessage && (
        <div className="alert-box alert-success" id="info-message-alert">
          <span>{infoMessage}</span>
        </div>
      )}

      {error && (
        <div className="alert-box alert-error" id="otp-error-alert" role="alert">
          <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>{error}</span>
        </div>
      )}

      {/* Utilitarian Timer Bar */}
      <div className="timer-bar" id="timer-banner">
        <div className="timer-left">
          <span>Token validity:</span>
          <span className="timer-countdown" id="countdown-display">
            {formatTime(secondsRemaining)}
          </span>
        </div>
        <div>
          {isExpired ? (
            <span className="timer-badge expired" id="badge-expired">
              <span className="status-dot" />
              Expired
            </span>
          ) : (
            <span className="timer-badge active" id="badge-active">
              <span className="status-dot" />
              Active
            </span>
          )}
        </div>
      </div>

      {/* 6-Digit OTP Inputs */}
      <div className={`otp-container ${shake ? 'shake' : ''}`} onPaste={handlePaste}>
        {otp.map((digit, idx) => (
          <input
            key={idx}
            ref={(el) => (inputRefs.current[idx] = el)}
            id={`otp-digit-${idx}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className={`otp-box ${digit ? 'filled' : ''} ${error ? 'error' : ''}`}
            value={digit}
            onChange={(e) => handleChange(idx, e.target.value)}
            onKeyDown={(e) => handleKeyDown(idx, e)}
            disabled={loading || isExpired}
            autoFocus={idx === 0}
            aria-label={`Digit ${idx + 1}`}
          />
        ))}
      </div>

      {/* Compact Gold Verification Button */}
      <div>
        <button
          id="verify-otp-btn"
          type="button"
          className="btn-primary"
          onClick={() => verifyCode()}
          disabled={loading || isExpired || otp.join('').length !== 6}
        >
          {loading ? (
            <>
              <span className="spinner" aria-hidden="true" />
              <span>Verifying token...</span>
            </>
          ) : (
            <span>Verify & Enter</span>
          )}
        </button>
      </div>

      {/* Secondary Actions: Change Email & Resend Token */}
      <div className="otp-actions-row">
        <button
          id="back-to-email-btn"
          type="button"
          className="btn-link"
          onClick={onBack}
          disabled={loading}
        >
          Change email
        </button>

        <button
          id="resend-otp-btn"
          type="button"
          className="btn-link"
          onClick={handleResend}
          disabled={resending || (!isExpired && resendCooldown > 0)}
        >
          {resending && <RotateCw size={13} className="spinner" />}
          <span>
            {resending
              ? 'Dispatching...'
              : resendCooldown > 0 && !isExpired
              ? `Resend token (${resendCooldown}s)`
              : 'Resend token'}
          </span>
        </button>
      </div>
    </div>
  );
}
