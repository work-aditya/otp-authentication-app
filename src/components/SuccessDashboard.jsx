import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

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
    <div id="success-dashboard-view" className="session-container">
      {/* Top-left Application Branding & Tagline */}
      <div className="brand-header">
        <h1 className="brand-title">AuthVault</h1>
        <div className="session-badge">
          <span className="status-dot" />
          <span>Session Active</span>
        </div>
        <p className="brand-tagline">
          Vault clearance granted. Secure session established via time-based token.
        </p>
      </div>

      {/* Session Diagnostics / Key-Value Table */}
      <div className="session-props-table" id="user-profile-box">
        <div className="session-prop-row">
          <span className="prop-label">Identity</span>
          <span className="prop-value" id="profile-email">
            {user?.email || 'Authenticated Operator'}
          </span>
        </div>

        <div className="session-prop-row">
          <span className="prop-label">UID</span>
          <span
            className="prop-value"
            id="profile-uid"
            style={{ maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis' }}
            title={user?.uid}
          >
            {user?.uid}
          </span>
        </div>

        <div className="session-prop-row">
          <span className="prop-label">Clearance Type</span>
          <span className="prop-value" id="profile-auth-method">
            Time-Based OTP (Verified)
          </span>
        </div>

        <div className="session-prop-row">
          <span className="prop-label">Timestamp</span>
          <span className="prop-value">
            {creationTime}
          </span>
        </div>
      </div>

      {/* Compact Disconnect Button */}
      <button
        id="logout-btn"
        type="button"
        className="btn-secondary"
        onClick={handleLogout}
      >
        <span>Disconnect Session</span>
      </button>
    </div>
  );
}
