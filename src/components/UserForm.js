import React, { useState } from 'react';

const UserForm = ({ onAddUser }) => {
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
        
        <button type="submit" className="creative-btn">
          🎯 Create Profile
        </button>
      </form>
    </div>
  );
};

export default UserForm;