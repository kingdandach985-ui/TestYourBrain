import React, { useState, useEffect } from 'react';
import MathQuestion from '../components/MathQuestion';

const MathTest = ({ currentUser, onUpdateScore }) => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [isActive, setIsActive] = useState(false);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    document.title = "Math Test - UniProject";
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      handleGameComplete();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startGame = () => {
    setTimeLeft(120);
    setIsActive(true);
    setScore(0);
    setGameCompleted(false);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 10);
    } else {
      setTimeLeft(prev => Math.max(0, prev - 5));
    }
  };

  const handleGameComplete = () => {
    setGameCompleted(true);
    if (currentUser) {
      onUpdateScore(currentUser.id, 'math', score);
    }
  };

  return (
    <div className="math-test-page">
      <div className="page-header">
        <h1 className="page-title">🧮 Math Test</h1>
        <p className="page-subtitle">Solve math problems quickly! Correct answers +10, wrong answers -5 seconds</p>
      </div>

      {!currentUser ? (
        <div className="login-required">
          <div className="form-container">
            <h3>⚠️ Login Required</h3>
            <p>Please create a profile first to save your math scores!</p>
          </div>
        </div>
      ) : (
        <div className="math-container">
          {!isActive && !gameCompleted && (
            <div className="game-start">
              <button className="creative-btn" onClick={startGame}>
                Start Math Test
              </button>
            </div>
          )}

          {isActive && (
            <>
              <div className="game-stats">
                <div className={`timer ${timeLeft <= 30 ? 'warning' : ''}`}>
                  Time: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </div>
                <div className="score">Score: {score}</div>
              </div>
              
              <MathQuestion onAnswer={handleAnswer} timeLeft={timeLeft} />
            </>
          )}

          {gameCompleted && (
            <div className="result-container">
              <div className="score-display">
                <h3>Math Test Complete! 🎯</h3>
                <div className="final-score">Final Score: {score}</div>
                <p>Your score has been saved to your profile!</p>
                <button className="creative-btn" onClick={startGame}>
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MathTest;