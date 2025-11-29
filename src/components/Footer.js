import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo-section">
              <div className="footer-logo">
                <span className="logo-icon">⚡</span>
                <span className="logo-text">Yellow.Test</span>
              </div>
              <p className="footer-description">
                A creative university project with interactive activities and challenges.
              </p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Developers</h4>
            <ul className="developer-list">
              <li className="developer-item">👨‍💻 Ali Al Hadi Dandach</li>
              <li className="developer-item">👨‍💻 Asaad Farhat</li>
              <li className="developer-item">👨‍💻 Mohamad Chahoud</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>University</h4>
            <div className="university-info">
              <div className="liu-logo">
                <div className="liu-icon">🎓</div>
                <span className="liu-text">LIU University</span>
              </div>
              <div className="university-details">
                <p>Lebanese International University</p>
                <p>Computer Science Department</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© 2024 TestYourBrain. All rights reserved. | Made by Hadi for LIU University</p>
          </div>
          <div className="footer-decoration">
            <div className="decoration-dot"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-dot"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;