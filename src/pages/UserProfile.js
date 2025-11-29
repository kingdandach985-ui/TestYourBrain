import React, { useEffect } from 'react';
import UserForm from '../components/UserForm';
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
          <UserForm onAddUser={onAddUser} />
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

export default UserProfile;