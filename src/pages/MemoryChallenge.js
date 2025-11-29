import React, { useState, useEffect } from 'react';
import MemoryGame from '../components/MemoryGame';

const MemoryChallenge = ({ currentUser, onUpdateScore }) => {
  const [gameCompleted, setGameCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    document.title = "Memory Challenge - UniProject";
  }, []);

  const handleGameComplete = (score) => {
    setFinalScore(score);
    setGameCompleted(true);
    if (currentUser) {
      onUpdateScore(currentUser.id, 'memory', score);
    }
  };

  return (
    <div className="memory-challenge-page">
      <div className="page-header">
        <h1 className="page-title">🧠 Memory Challenge</h1>
        <p className="page-subtitle">Test your memory skills by matching pairs. Less moves = Higher score!</p>
      </div>

      {!currentUser ? (
        <div className="login-required">
          <div className="form-container">
            <h3>⚠️ Login Required</h3>
            <p>Please create a profile first to save your memory challenge scores!</p>
          </div>
        </div>
      ) : (
        <div className="game-container">
          <MemoryGame onGameComplete={handleGameComplete} />
          
          {gameCompleted && (
            <div className="result-container">
              <div className="score-display">
                <h3>Memory Challenge Completed! 🎉</h3>
                <div className="final-score">Score: {finalScore}</div>
                <p>Your score has been saved to your profile!</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MemoryChallenge;