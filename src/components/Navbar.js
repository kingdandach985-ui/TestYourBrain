import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ currentUser }) => {
  const location = useLocation();

  const navItems = [
    { path: '/profile', label: 'Profile', emoji: '👤' },
    { path: '/math-test', label: 'Math Test', emoji: '🧮' },
    { path: '/memory-challenge', label: 'Memory', emoji: '🧠' },
    { path: '/typing-speed', label: 'Typing', emoji: '⌨️' },
    { path: '/random-ideas', label: 'Ideas', emoji: '💡' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <div className="logo-container">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">TestYourBrain</span>
          </div>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-emoji">{item.emoji}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {currentUser && (
          <div className="user-info">
            <div className="user-avatar">
              {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <span className="username">@{currentUser.username}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;