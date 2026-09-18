import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import {
  CheckCircle2,
  LogOut,
  Mail,
  Fingerprint,
  Calendar,
  ShieldCheck,
} from 'lucide-react';

export default function SuccessDashboard({ user }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  const creationTime = user?.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleString()
    : new Date().toLocaleTimeString();

  return (
    <div className="auth-card dashboard-card" id="success-dashboard-card">
      <div className="success-badge-icon" aria-hidden="true">
        <CheckCircle2 size={40} />
      </div>

      <h1 className="card-title">Successfully Authenticated!</h1>
      <p className="card-subtitle">
        Your email has been verified and you are now signed in with Firebase Authentication.
      </p>

      {/* User Information Box */}
      <div className="user-profile-box" id="user-profile-box">
        <div className="profile-row">
          <span className="profile-label">
            <Mail size={16} />
            Email Address
          </span>
          <span className="profile-value" id="profile-email">
            {user?.email || 'Authenticated User'}
          </span>
        </div>

        <div className="profile-row">
          <span className="profile-label">
            <Fingerprint size={16} />
            User UID
          </span>
          <span
            className="profile-value"
            id="profile-uid"
            style={{ fontSize: '12px', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis' }}
            title={user?.uid}
          >
            {user?.uid}
          </span>
        </div>

        <div className="profile-row">
          <span className="profile-label">
            <ShieldCheck size={16} />
            Auth Method
          </span>
          <span className="status-pill" id="profile-auth-method">
            <span className="status-dot" />
            Time-Based OTP (Verified)
          </span>
        </div>

        <div className="profile-row">
          <span className="profile-label">
            <Calendar size={16} />
            Signed In At
          </span>
          <span className="profile-value" style={{ fontSize: '12.5px' }}>
            {creationTime}
          </span>
        </div>
      </div>

      <button
        id="logout-btn"
        type="button"
        className="btn-secondary"
        onClick={handleLogout}
      >
        <LogOut size={16} />
        <span>Log Out</span>
      </button>
    </div>
  );
}
