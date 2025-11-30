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
                <span className="logo-text">TestYourBrain</span>
              </div>
              <p className="footer-description">
                A creative university project with interactive activities and challenges.
              </p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Developer</h4>
            <div className="developer-info">
              <p className="developer-name">👨‍💻 Ali Al Hadi Dandach</p>
              <p className="developer-role">Full Stack Developer</p>
            </div>
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
            <p>© 2024 TestYourBrain. All rights reserved. | Made with ❤️ by Ali Al Hadi Dandach</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;