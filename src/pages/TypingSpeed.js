import React, { useState, useEffect, useRef, useCallback } from 'react';

const TypingSpeed = ({ currentUser, onUpdateScore }) => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [words, setWords] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const inputRef = useRef(null);

  const sampleText = "The quick brown fox jumps over the lazy dog. This sentence contains all letters of the English alphabet. Typing speed tests help improve your keyboard skills and efficiency.";

  useEffect(() => {
    document.title = "Typing Test - TestYourBrain";
    setText(sampleText);
  }, [sampleText]);

  const handleGameComplete = useCallback(() => {
    setGameCompleted(true);
    if (currentUser) {
      onUpdateScore(currentUser.id, 'typing', wpm);
    }
  }, [currentUser, onUpdateScore, wpm]);

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
  }, [isActive, timeLeft, handleGameComplete]);

  const startGame = () => {
    setTimeLeft(60);
    setIsActive(true);
    setUserInput('');
    setWords(0);
    setWpm(0);
    setGameCompleted(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    if (!isActive) return;
    
    const input = e.target.value;
    setUserInput(input);
    
    const wordCount = input.trim().split(/\s+/).filter(word => word.length > 0).length;
    setWords(wordCount);
    
    const timeElapsed = 60 - timeLeft;
    if (timeElapsed > 0) {
      setWpm(Math.round((wordCount / timeElapsed) * 60));
    }
  };

  const calculateAccuracy = () => {
    if (!userInput) return 100;
    const originalWords = text.split(' ');
    const typedWords = userInput.split(' ');
    let correctChars = 0;
    let totalChars = 0;

    typedWords.forEach((word, index) => {
      if (index < originalWords.length) {
        const originalWord = originalWords[index];
        totalChars += originalWord.length;
        for (let i = 0; i < Math.min(word.length, originalWord.length); i++) {
          if (word[i] === originalWord[i]) {
            correctChars++;
          }
        }
      }
    });

    return totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;
  };

  return (
    <div className="typing-speed-page">
      <div className="page-header">
        <h1 className="page-title">⌨️ Typing Speed Test</h1>
        <p className="page-subtitle">Test your typing speed and accuracy in 60 seconds!</p>
      </div>

      {!currentUser ? (
        <div className="login-required">
          <div className="form-container">
            <h3>⚠️ Login Required</h3>
            <p>Please create a profile first to save your typing speed scores!</p>
          </div>
        </div>
      ) : (
        <div className="typing-container">
          <div className="game-info">
            <div className="timer">Time: {timeLeft}s</div>
            <div className="stats">
              <span>WPM: {wpm}</span>
              <span>Words: {words}</span>
              <span>Accuracy: {calculateAccuracy()}%</span>
            </div>
          </div>

          {!isActive && !gameCompleted && (
            <div className="game-start">
              <button className="creative-btn" onClick={startGame}>
                Start Typing Test
              </button>
            </div>
          )}

          {isActive && (
            <div className="typing-area">
              <div className="text-display">
                {text.split('').map((char, index) => {
                  let color = 'black';
                  if (index < userInput.length) {
                    color = userInput[index] === char ? 'green' : 'red';
                  }
                  return (
                    <span key={index} style={{ color }}>
                      {char}
                    </span>
                  );
                })}
              </div>
              <textarea
                ref={inputRef}
                className="typing-input"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Start typing the text above..."
                disabled={!isActive}
              />
            </div>
          )}

          {gameCompleted && (
            <div className="result-container">
              <div className="score-display">
                <h3>Typing Test Complete! 🎯</h3>
                <div className="final-stats">
                  <div className="stat">Final WPM: <strong>{wpm}</strong></div>
                  <div className="stat">Words Typed: <strong>{words}</strong></div>
                  <div className="stat">Accuracy: <strong>{calculateAccuracy()}%</strong></div>
                </div>
                <p>Your typing speed has been saved to your profile!</p>
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

export default TypingSpeed;