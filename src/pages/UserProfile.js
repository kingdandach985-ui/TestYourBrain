import React, { useEffect, useState } from 'react';
import ScoreTable from '../components/ScoreTable';

const UserProfile = ({ users, currentUser, onAddUser, onRemoveUser }) => {
  useEffect(() => {
    document.title = "Profile - UniProject";
  }, []);

  return (
    <div className="user-profile-page">
      <div className="page-header">
        <h1 className="page-title">👤 User Profile</h1>
        <p className="page-subtitle">Create your profile and track your scores across all activities</p>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <LocalUserForm onAddUser={onAddUser} />
        </div>

        <div className="profile-section">
          <ScoreTable users={users} onRemoveUser={onRemoveUser} />
        </div>

        {currentUser && (
          <div className="current-user-card">
            <h3>🎯 Currently Active</h3>
            <div className="user-card">
              <div className="user-avatar-large">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-details">
                <h4>{currentUser.name}</h4>
                <p>@{currentUser.username}</p>
                <div className="user-scores">
                  <span>Math: {currentUser.mathScore}</span>
                  <span>Memory: {currentUser.memoryScore}</span>
                  <span>Typing: {currentUser.typingScore} WPM</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const LocalUserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted'); // للتأكد
    if (formData.name.trim() && formData.username.trim()) {
      onAddUser(formData);
      setFormData({ name: '', username: '' });
    }
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Create Your Profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-input"
            placeholder="Choose a username"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="creative-btn"
          onClick={handleSubmit} // أضف onClick كمان
        >
          🎯 Create Profile
        </button>
      </form>
    </div>
  );
};
export default UserProfile;