import React, { useState, useEffect } from 'react';

const MathQuestion = ({ onAnswer, timeLeft }) => {
  const [question, setQuestion] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const generateQuestion = () => {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let num1, num2, answer;
    
    switch(operation) {
      case '+':
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        answer = num1 - num2;
        break;
      case '*':
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        answer = num1 * num2;
        break;
      case '/':
        num2 = Math.floor(Math.random() * 10) + 1;
        answer = Math.floor(Math.random() * 10) + 1;
        num1 = num2 * answer;
        break;
      default:
        num1 = 0;
        num2 = 0;
        answer = 0;
    }

    // Generate options
    const options = [answer];
    while (options.length < 4) {
      const randomOption = answer + Math.floor(Math.random() * 20) - 10;
      if (randomOption !== answer && !options.includes(randomOption) && randomOption > 0) {
        options.push(randomOption);
      }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    setQuestion({
      text: `${num1} ${operation} ${num2} = ?`,
      answer: answer,
      options: options
    });
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    const isCorrect = option === question.answer;
    onAnswer(isCorrect);
    
    // Reset after short delay
    setTimeout(() => {
      setSelectedAnswer(null);
      generateQuestion();
    }, 1000);
  };

  if (!question.text) return <div>Loading question...</div>;

  return (
    <div className="math-question">
      <div className="question-container">
        <div className="question">{question.text}</div>
        <div className="options-grid">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${
                selectedAnswer === option 
                  ? option === question.answer ? 'correct' : 'incorrect'
                  : ''
              }`}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MathQuestion;