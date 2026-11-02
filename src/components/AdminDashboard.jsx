import React, { useState, useEffect, useMemo } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { subscribeToUsers, fetchUsersOnce } from '../services/otpService';
import SuccessDashboard from './SuccessDashboard';
import {
  Users,
  ShieldCheck,
  Search,
  RotateCw,
  Clock,
  LogOut,
  Copy,
  Check,
  Activity,
  UserCheck,
  Calendar,
} from 'lucide-react';

export default function AdminDashboard({ user }) {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('lastLogin');
  const [copiedUid, setCopiedUid] = useState(null);
  const [activeTab, setActiveTab] = useState('monitoring'); // 'monitoring' | 'my-session'

  // Real-time Firestore subscription to users collection
  useEffect(() => {
    setLoading(true);
    const unsubscribe = subscribeToUsers(
      (data) => {
        setUsersList(data);
        setLoading(false);
        setError('');
      },
      (err) => {
        console.error('Admin subscription error:', err);
        setError('Failed to load user monitoring data. Check Firestore permissions.');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleManualRefresh = async () => {
    setRefreshing(true);
    try {
      const data = await fetchUsersOnce();
      setUsersList(data);
      setError('');
    } catch (err) {
      console.error('Refresh error:', err);
      setError('Error refreshing users list.');
    } finally {
      setRefreshing(false);
    }
  };

  const handleCopyUid = (uid) => {
    if (!uid) return;
    navigator.clipboard.writeText(uid);
    setCopiedUid(uid);
    setTimeout(() => setCopiedUid(null), 2000);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'Never / Pending';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    if (isNaN(date.getTime())) return 'Unknown';
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const getRelativeTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    if (isNaN(date.getTime())) return 'N/A';
    const diffMs = Date.now() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    if (diffSec < 60) return 'Just now';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  // Filter & Sort
  const filteredUsers = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    let result = usersList.filter((u) => {
      const email = (u.email || '').toLowerCase();
      const uid = (u.uid || u.id || '').toLowerCase();
      return email.includes(term) || uid.includes(term);
    });

    result.sort((a, b) => {
      if (sortBy === 'lastLogin') {
        const timeA = a.lastLoginAt?.toMillis ? a.lastLoginAt.toMillis() : 0;
        const timeB = b.lastLoginAt?.toMillis ? b.lastLoginAt.toMillis() : 0;
        return timeB - timeA;
      }
      if (sortBy === 'created') {
        const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
        const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
        return timeB - timeA;
      }
      if (sortBy === 'logins') {
        return (b.loginCount || 1) - (a.loginCount || 1);
      }
      if (sortBy === 'email') {
        return (a.email || '').localeCompare(b.email || '');
      }
      return 0;
    });

    return result;
  }, [usersList, searchTerm, sortBy]);

  // Statistics
  const totalUsers = usersList.length;
  const totalLogins = usersList.reduce((acc, curr) => acc + (curr.loginCount || 1), 0);
  const activeToday = usersList.filter((u) => {
    if (!u.lastLoginAt) return false;
    const time = u.lastLoginAt.toMillis ? u.lastLoginAt.toMillis() : 0;
    return Date.now() - time < 24 * 60 * 60 * 1000;
  }).length;

  return (
    <div className="admin-container" id="admin-dashboard-view">
      {/* Top Header & Branding */}
      <header className="admin-header">
        <div className="admin-branding">
          <div className="admin-title-row">
            <h1 className="brand-title">AuthVault</h1>
            <span className="admin-tag-badge">ADMIN CONSOLE</span>
          </div>
          <div className="admin-status-row">
            <span className="status-dot pulsing" />
            <span className="admin-status-text">Live User Monitoring • Realtime Stream Active</span>
          </div>
        </div>

        <div className="admin-header-actions">
          <div className="admin-view-toggle">
            <button
              type="button"
              className={`toggle-tab-btn ${activeTab === 'monitoring' ? 'active' : ''}`}
              onClick={() => setActiveTab('monitoring')}
            >
              <Users size={14} />
              <span>User Monitor ({totalUsers})</span>
            </button>
            <button
              type="button"
              className={`toggle-tab-btn ${activeTab === 'my-session' ? 'active' : ''}`}
              onClick={() => setActiveTab('my-session')}
            >
              <ShieldCheck size={14} />
              <span>My Session</span>
            </button>
          </div>

          <button
            type="button"
            className="btn-secondary btn-compact"
            onClick={handleLogout}
            title="Log out of admin session"
          >
            <LogOut size={13} />
            <span>Disconnect</span>
          </button>
        </div>
      </header>

      {/* Tab 2: Admin Personal Session View */}
      {activeTab === 'my-session' ? (
        <div className="admin-session-wrapper">
          <SuccessDashboard user={user} />
        </div>
      ) : (
        /* Tab 1: Live User Monitoring Dashboard */
        <div className="admin-content">
          {/* Key Metrics Grid */}
          <div className="admin-metrics-grid">
            <div className="metric-card">
              <div className="metric-icon-wrap">
                <Users size={18} />
              </div>
              <div className="metric-details">
                <span className="metric-label">Registered Users</span>
                <span className="metric-value">{loading ? '...' : totalUsers}</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrap">
                <Activity size={18} />
              </div>
              <div className="metric-details">
                <span className="metric-label">Total Authentications</span>
                <span className="metric-value">{loading ? '...' : totalLogins}</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrap">
                <Clock size={18} />
              </div>
              <div className="metric-details">
                <span className="metric-label">Active (Last 24h)</span>
                <span className="metric-value">{loading ? '...' : activeToday}</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrap">
                <ShieldCheck size={18} />
              </div>
              <div className="metric-details">
                <span className="metric-label">Security Protocol</span>
                <span className="metric-subtext">Time-Based OTP (2m TTL)</span>
              </div>
            </div>
          </div>

          {/* Controls Toolbar */}
          <div className="admin-toolbar">
            <div className="search-box-wrapper">
              <Search size={14} className="search-icon" />
              <input
                type="text"
                className="admin-search-input"
                placeholder="Filter by email or UID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setSearchTerm('')}
                >
                  ✕
                </button>
              )}
            </div>

            <div className="toolbar-controls-right">
              <div className="sort-wrapper">
                <label htmlFor="admin-sort-select" className="sort-label">Sort:</label>
                <select
                  id="admin-sort-select"
                  className="admin-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="lastLogin">Latest Login</option>
                  <option value="created">First Registered</option>
                  <option value="logins">Most Active (Logins)</option>
                  <option value="email">Email (A-Z)</option>
                </select>
              </div>

              <button
                type="button"
                className="btn-secondary btn-compact"
                onClick={handleManualRefresh}
                disabled={refreshing}
                title="Force refresh from Cloud Firestore"
              >
                <RotateCw size={13} className={refreshing ? 'spinner' : ''} />
                <span>{refreshing ? 'Syncing...' : 'Refresh'}</span>
              </button>
            </div>
          </div>

          {error && (
            <div className="alert-box alert-error" style={{ marginBottom: '20px' }}>
              <span>{error}</span>
            </div>
          )}

          {/* User Table */}
          <div className="admin-table-container">
            {loading ? (
              <div className="admin-loading-state">
                <div className="spinner spinner-light" style={{ width: '22px', height: '22px' }} />
                <span>Loading monitored accounts from Firestore...</span>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="admin-empty-state">
                <Users size={32} style={{ opacity: 0.4, marginBottom: '12px' }} />
                <p>No user records matched your criteria.</p>
                {searchTerm && (
                  <button
                    type="button"
                    className="btn-link"
                    style={{ marginTop: '8px' }}
                    onClick={() => setSearchTerm('')}
                  >
                    Clear search filter
                  </button>
                )}
              </div>
            ) : (
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>User / Identity</th>
                      <th>UID</th>
                      <th>Last Login</th>
                      <th>Created</th>
                      <th>Total Logins</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((u) => {
                      const isCurrentUserAdmin =
                        u.email?.toLowerCase() === 'adityaraaaj431@gmail.com';
                      const uid = u.uid || u.id;
                      const isCopied = copiedUid === uid;

                      return (
                        <tr key={uid} className={isCurrentUserAdmin ? 'admin-row' : ''}>
                          {/* User Identity */}
                          <td className="user-identity-cell">
                            <div className="user-avatar-badge">
                              <UserCheck size={14} />
                            </div>
                            <div className="user-text-info">
                              <span className="user-email-text">{u.email || 'Anonymous Operator'}</span>
                              {isCurrentUserAdmin && (
                                <span className="admin-badge-inline">Primary Admin</span>
                              )}
                            </div>
                          </td>

                          {/* UID */}
                          <td className="uid-cell">
                            <button
                              type="button"
                              className="uid-copy-btn"
                              onClick={() => handleCopyUid(uid)}
                              title="Click to copy UID"
                            >
                              <span className="monospace-text">{uid.slice(0, 10)}...</span>
                              {isCopied ? (
                                <Check size={12} className="text-success" />
                              ) : (
                                <Copy size={12} className="copy-icon" />
                              )}
                            </button>
                          </td>

                          {/* Last Login */}
                          <td className="timestamp-cell">
                            <div className="time-primary">{getRelativeTime(u.lastLoginAt)}</div>
                            <div className="time-secondary">{formatTimestamp(u.lastLoginAt)}</div>
                          </td>

                          {/* Created At */}
                          <td className="timestamp-cell">
                            <div className="time-secondary">{formatTimestamp(u.createdAt)}</div>
                          </td>

                          {/* Logins Count */}
                          <td className="logins-cell">
                            <span className="logins-count-badge">
                              {u.loginCount || 1} {u.loginCount === 1 ? 'login' : 'logins'}
                            </span>
                          </td>

                          {/* Status */}
                          <td className="status-cell">
                            <span className="active-status-pill">
                              <span className="status-dot" />
                              Verified
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="admin-footer-bar">
            <span>
              Surveillance scope: <strong style={{ color: 'var(--accent-gold)' }}>Cloud Firestore ({totalUsers} users)</strong>
            </span>
            <span>Zero-Knowledge One-Time Password Engine</span>
          </div>
        </div>
      )}
    </div>
  );
}
