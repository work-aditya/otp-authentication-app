import React, { useState, useEffect, useRef } from 'react';
import { sendOtpToEmail, verifyOtpAndAuthenticate } from '../services/otpService';
import confetti from 'canvas-confetti';
import {
  Clock,
  RotateCw,
  ArrowLeft,
  KeyRound,
  AlertCircle,
  CheckCircle2,
  MailCheck,
  Inbox,
} from 'lucide-react';

export default function OtpVerification({
  email,
  expiresInMs = 120000,
  activationNeeded = false,
  onBack,
  onVerified,
}) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState('');
  const [infoMessage, setInfoMessage] = useState(
    activationNeeded
      ? "FormSubmit sent a confirmation email to your inbox. Please click 'Activate Form' in that email to receive all OTPs."
      : ''
  );
  const [shake, setShake] = useState(false);

  // 2-Minute Countdown state
  const totalSeconds = Math.floor(expiresInMs / 1000); // strictly 120 seconds
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

  // Format seconds as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // SVG Gauge calculations
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const progressPercent = secondsRemaining / totalSeconds;
  const strokeDashoffset = circumference - progressPercent * circumference;

  // Determine timer color theme
  const getTimerClass = () => {
    if (isExpired) return 'danger';
    if (secondsRemaining <= 20) return 'danger';
    if (secondsRemaining <= 45) return 'warning';
    return 'normal';
  };

  const getStrokeColor = () => {
    if (isExpired || secondsRemaining <= 20) return '#ef4444';
    if (secondsRemaining <= 45) return '#f59e0b';
    return '#6366f1';
  };

  // Trigger error shake
  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  // Handle single digit input
  const handleChange = (index, value) => {
    if (isExpired) return;

    // Allow only numeric digits
    const cleanVal = value.replace(/\D/g, '');
    if (!cleanVal && value !== '') return;

    const newOtp = [...otp];
    newOtp[index] = cleanVal ? cleanVal.slice(-1) : '';
    setOtp(newOtp);
    setError('');

    // Auto-advance to next input
    if (cleanVal && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto submit if all 6 digits entered
    const completeCode = newOtp.join('');
    if (completeCode.length === 6) {
      verifyCode(completeCode);
    }
  };

  // Handle Keydown (Backspace navigation)
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle Paste event
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

  // Verify OTP submission against Cloud Firestore & Firebase Auth
  const verifyCode = async (codeToVerify) => {
    const fullOtp = codeToVerify || otp.join('');
    if (fullOtp.length !== 6) {
      setError('Please enter all 6 digits.');
      triggerShake();
      return;
    }

    if (isExpired) {
      setError('This OTP has expired (2 minutes limit). Please click "Resend Code" to get a fresh one.');
      triggerShake();
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await verifyOtpAndAuthenticate(email, fullOtp);

      if (result && result.success) {
        try {
          confetti({
            particleCount: 85,
            spread: 75,
            origin: { y: 0.6 },
            colors: ['#6366f1', '#10b981', '#f59e0b', '#ec4899'],
          });
        } catch (e) {
          // ignore confetti errors
        }

        onVerified(result.user);
      }
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setError(err.message || 'Invalid verification code. Please check your email and try again.');
      triggerShake();
    } finally {
      setLoading(false);
    }
  };

  // Handle Resend OTP
  const handleResend = async () => {
    if (resending || resendCooldown > 0) return;

    setResending(true);
    setError('');

    try {
      const result = await sendOtpToEmail(email);

      if (result && result.success) {
        // Reset OTP input boxes
        setOtp(['', '', '', '', '', '']);
        // Reset 2-minute countdown
        setSecondsRemaining(Math.floor((result.expiresInMs || 120000) / 1000));
        setIsExpired(false);
        // Reset resend cooldown
        setResendCooldown(30);
        inputRefs.current[0]?.focus();

        if (result.activationNeeded) {
          setInfoMessage("FormSubmit sent an activation email. Please click 'Activate Form' in your inbox.");
        } else {
          setInfoMessage('A fresh verification code has been dispatched to your email.');
        }
      }
    } catch (err) {
      console.error('Resend error:', err);
      setError(err.message || 'Failed to resend code.');
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="auth-card" id="otp-step-card">
      <div className="card-header">
        <div className="brand-icon-wrapper" aria-hidden="true">
          <KeyRound size={32} />
        </div>
        <h1 className="card-title">Check Your Email</h1>
        <p className="card-subtitle">
          We sent a 6-digit verification code to <span className="highlight-email">{email}</span>
        </p>
      </div>

      {/* Email Inbox Delivery Notice */}
      <div
        className="alert-box alert-info"
        id="inbox-notice-banner"
        style={{
          background: 'rgba(99, 102, 241, 0.1)',
          borderColor: 'rgba(99, 102, 241, 0.25)',
          color: '#c7d2fe',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Inbox size={18} style={{ color: '#818cf8', flexShrink: 0 }} />
        <span style={{ fontSize: '13px' }}>
          Please open your <strong>Gmail inbox</strong> (or Spam folder) to view your 6-digit OTP code.
        </span>
      </div>

      {infoMessage && (
        <div
          className="alert-box alert-success"
          id="info-message-alert"
          style={{
            background: 'rgba(16, 185, 129, 0.12)',
            borderColor: 'rgba(16, 185, 129, 0.3)',
            color: '#6ee7b7',
            fontSize: '13px',
          }}
        >
          <MailCheck size={16} style={{ flexShrink: 0 }} />
          <span>{infoMessage}</span>
        </div>
      )}

      {/* 2-Minute Expiration Timer Banner */}
      <div className={`timer-banner ${getTimerClass()}`} id="timer-banner">
        <div className="timer-left">
          <div className="timer-gauge-wrapper">
            <svg width="40" height="40" className="timer-gauge-svg">
              <circle
                cx="20"
                cy="20"
                r={radius}
                fill="none"
                strokeWidth="3.5"
                className="gauge-bg"
              />
              <circle
                cx="20"
                cy="20"
                r={radius}
                fill="none"
                strokeWidth="3.5"
                stroke={getStrokeColor()}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="gauge-progress"
              />
            </svg>
            <Clock size={16} style={{ position: 'absolute', color: getStrokeColor() }} />
          </div>
          <div className="timer-info">
            <span className="timer-title">Time Remaining</span>
            <span className="timer-countdown" id="countdown-display">
              {formatTime(secondsRemaining)}
            </span>
          </div>
        </div>

        <div>
          {isExpired ? (
            <span className="timer-status-badge badge-expired" id="badge-expired">
              <AlertCircle size={13} />
              Expired
            </span>
          ) : (
            <span className="timer-status-badge badge-active" id="badge-active">
              <span className="status-dot" />
              Valid (2 min)
            </span>
          )}
        </div>
      </div>

      {error && (
        <div className="alert-box alert-error" id="otp-error-alert" role="alert">
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <span>{error}</span>
        </div>
      )}

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
            <span>Verifying with Firestore & Auth...</span>
          </>
        ) : (
          <>
            <CheckCircle2 size={18} />
            <span>Verify & Sign In</span>
          </>
        )}
      </button>

      {/* Resend & Back controls */}
      <div className="resend-row">
        <button
          id="back-to-email-btn"
          type="button"
          className="btn-back"
          onClick={onBack}
          disabled={loading}
        >
          <ArrowLeft size={16} />
          <span>Change Email</span>
        </button>

        <button
          id="resend-otp-btn"
          type="button"
          className="btn-text"
          onClick={handleResend}
          disabled={resending || (!isExpired && resendCooldown > 0)}
        >
          <RotateCw size={15} className={resending ? 'spinner' : ''} />
          <span>
            {resending
              ? 'Sending...'
              : resendCooldown > 0 && !isExpired
              ? `Resend in ${resendCooldown}s`
              : 'Resend OTP'}
          </span>
        </button>
      </div>
    </div>
  );
}
