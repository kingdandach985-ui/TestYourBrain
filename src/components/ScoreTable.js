import React from 'react';

const ScoreTable = ({ users, onRemoveUser }) => {
  if (users.length === 0) {
    return (
      <div className="table-container">
        <h3 className="table-title">Users Table</h3>
        <p className="no-data">No users yet. Create a profile to get started!</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <h3 className="table-title">🏆 Users & Scores</h3>
      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Join Date</th>
              <th>Math Score</th>
              <th>Memory Score</th>
              <th>Typing WPM</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="user-row">
                <td className="user-name">{user.name}</td>
                <td className="user-username">@{user.username}</td>
                <td className="user-date">{user.joinDate}</td>
                <td className="math-score">{user.mathScore}</td>
                <td className="memory-score">{user.memoryScore}</td>
                <td className="typing-score">{user.typingScore}</td>
                <td>
                  <button 
                    className="delete-btn"
                    onClick={() => onRemoveUser(user.id)}
                  >
                    🗑️ Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreTable;