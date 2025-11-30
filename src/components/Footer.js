import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.05) 100%)',
      borderTop: '1px solid rgba(255, 215, 0, 0.2)',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem 1.5rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          marginBottom: '2rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2.5rem' }}>⚡</span>
              <span style={{
                fontSize: '2rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>TestYourBrain</span>
            </div>
            <p style={{ color: '#718096', lineHeight: '1.6' }}>
              A creative university project with interactive activities and challenges.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: '#2d3748', fontSize: '1.2rem', fontWeight: '700' }}>
              Developer
            </h4>
            <div>
              <p style={{ 
                padding: '0.75rem 0', 
                color: '#4a5568', 
                fontWeight: '500',
                borderBottom: '1px solid rgba(255, 215, 0, 0.1)'
              }}>
                👨‍💻 Ali Al Hadi Dandach
              </p>
              <p style={{ color: '#718096', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Full Stack Developer
              </p>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: '#2d3748', fontSize: '1.2rem', fontWeight: '700' }}>
              University
            </h4>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem',
              background: 'rgba(255, 215, 0, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '2rem' }}>🎓</span>
              <span style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>LIU University</span>
            </div>
            <div style={{ color: '#718096', fontSize: '0.9rem' }}>
              <p>Lebanese International University</p>
              <p>Computer Science Department</p>
            </div>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 215, 0, 0.2)'
        }}>
          <div style={{ color: '#718096', fontSize: '0.9rem', textAlign: 'center', flex: 1 }}>
            <p>© 2024 TestYourBrain. All rights reserved. | Made with ❤️ by Ali Al Hadi Dandach</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;