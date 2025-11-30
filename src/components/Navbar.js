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
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '1rem 2rem',
      zIndex: 1000,
      borderBottom: '1px solid rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.8rem' }}>⚡</span>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>TestYourBrain</span>
          </div>
        </Link>

        <ul style={{
          display: 'flex',
          gap: '1rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  textDecoration: 'none',
                  color: location.pathname === item.path ? 'white' : '#4a5568',
                  fontWeight: '600',
                  borderRadius: '50px',
                  background: location.pathname === item.path 
                    ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' 
                    : 'transparent',
                  transition: 'all 0.3s ease',
                  minHeight: '44px'
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{item.emoji}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {currentUser && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.5rem 1rem',
            background: 'rgba(255, 215, 0, 0.1)',
            borderRadius: '25px',
            border: '1px solid rgba(255, 215, 0, 0.2)'
          }}>
            <div style={{
              width: '35px',
              height: '35px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '1rem'
            }}>
              {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <span style={{ fontWeight: '600', color: '#2d3748' }}>
              @{currentUser.username}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;