import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/mm logo.png';
import './styles/dashboard.css';
import EmployeeOverview from './EmployeeOverview';
import EmployeeAttendance from './EmployeeAttendance';
import EmployeeLeave from './EmployeeLeave';
import EmployeeTasks from './EmployeeTasks';
import EmployeeSettings from './EmployeeSettings';

function EmployeeDashboard() {
  const navigate = useNavigate();

  // Navigation states
  const [activeTab, setActiveTab] = useState('overview');
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  // ----------------------------------------------------
  // Inline SVG Icons
  // ----------------------------------------------------
  const IconDashboard = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"></rect><rect x="14" y="3" width="7" height="5" rx="1"></rect><rect x="14" y="12" width="7" height="9" rx="1"></rect><rect x="3" y="16" width="7" height="5" rx="1"></rect></svg>
  );
  const IconCalendar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
  );
  const IconClock = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
  );
  const IconTasks = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
  );
  const IconSettings = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
  );
  const IconSearch = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  );
  const IconLogout = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
  );
  const IconBell = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
  );
  const IconMail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  );
  const IconMenu = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
  );

  return (
    <div className="dashboard-wrapper">
      
      {/* Mobile Sidebar backdrop */}
      {mobileSidebarOpen && (
        <div className="sidebar-backdrop" onClick={() => setMobileSidebarOpen(false)}></div>
      )}

      {/* Sidebar Navigation */}
      <aside className={`dashboard-sidebar ${mobileSidebarOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-logo-section">
          <img src={logo} alt="Meta Minds Logo" />
        </div>

        <ul className="sidebar-nav-links">

          <li className="sidebar-link-item">
            <div className="sidebar-icon-group">
              <button className="nav-icon-btn" title="Messages">
                <IconMail />
              </button>
              <button className="nav-icon-btn" title="Notifications">
                <IconBell />
              </button>
            </div>
          </li>
          <li className="sidebar-link-item">
            <button 
              className={`sidebar-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => { setActiveTab('overview'); setMobileSidebarOpen(false); }}
            >
              <IconDashboard /> Overview
            </button>
          </li>
          <li className="sidebar-link-item">
            <button 
              className={`sidebar-btn ${activeTab === 'attendance' ? 'active' : ''}`}
              onClick={() => { setActiveTab('attendance'); setMobileSidebarOpen(false); }}
            >
              <IconClock /> My Attendance
            </button>
          </li>
          <li className="sidebar-link-item">
            <button 
              className={`sidebar-btn ${activeTab === 'leave' ? 'active' : ''}`}
              onClick={() => { setActiveTab('leave'); setMobileSidebarOpen(false); }}
            >
              <IconCalendar /> Apply Leave
            </button>
          </li>
          <li className="sidebar-link-item">
            <button 
              className={`sidebar-btn ${activeTab === 'tasks' ? 'active' : ''}`}
              onClick={() => { setActiveTab('tasks'); setMobileSidebarOpen(false); }}
            >
              <IconTasks /> My Tasks
            </button>
          </li>
          <li className="sidebar-link-item">
            <button 
              className={`sidebar-btn ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => { setActiveTab('settings'); setMobileSidebarOpen(false); }}
            >
              <IconSettings /> Settings
            </button>
          </li>
        </ul>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <IconLogout /> Logout
          </button>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="dashboard-main">
        
        {/* Top Navbar */}
        <header className="dashboard-navbar">
          <div className="navbar-left">
            <button className="hamburger-menu" onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}>
              <IconMenu />
            </button>
            <h1 className="navbar-title">Employee Portal</h1>
          </div>

          <div className="navbar-right">
            <div className="navbar-search">
              <IconSearch />
              <input type="text" placeholder="Search..." />
            </div>



            {/* Profile Dropdown */}
            <div className="navbar-profile-trigger" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
              <div className="profile-avatar">AJ</div>
              <div className="profile-details-text">
                <div className="profile-name">Alice Johnson</div>
                <div className="profile-role-badge">Frontend Engineer</div>
              </div>

              {profileMenuOpen && (
                <div className="profile-dropdown-menu">
                  <div className="dropdown-header">Logged in as alice.j@metaminds.com</div>
                  <hr style={{ borderColor: 'var(--db-border)', margin: '4px 0' }} />
                  <button className="dropdown-item-btn" style={{ color: '#ef4444' }} onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content-scrollable employee-content">
          {activeTab === 'overview' && <EmployeeOverview />}
          {activeTab === 'attendance' && <EmployeeAttendance />}
          {activeTab === 'leave' && <EmployeeLeave />}
          {activeTab === 'tasks' && <EmployeeTasks />}
          {activeTab === 'settings' && <EmployeeSettings />}
        </div>
      </main>

    </div>
  );
}

export default EmployeeDashboard;