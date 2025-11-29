import React, { useState, useEffect } from 'react';

const MemoryGame = ({ onGameComplete }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const symbols = ['🍎', '🍌', '🍒', '🍇', '🍊', '🍋'];

  const initializeGame = () => {
    const gameCards = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({
        id: index,
        symbol,
        flipped: false
      }));
    
    setCards(gameCards);
    setFlipped([]);
    setSolved([]);
    setMoves(0);
    setGameStarted(true);
  };

  const handleCardClick = (id) => {
    if (flipped.length === 2 || flipped.includes(id) || solved.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find(card => card.id === firstId);
      const secondCard = cards.find(card => card.id === secondId);

      if (firstCard.symbol === secondCard.symbol) {
        setSolved([...solved, firstId, secondId]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      const score = Math.max(0, 1000 - (moves * 50));
      onGameComplete(score);
    }
  }, [solved, cards.length, moves, onGameComplete]);

  return (
    <div className="memory-game">
      {!gameStarted ? (
        <div className="game-start">
          <h3>🎮 Memory Challenge</h3>
          <p>Find all matching pairs in the least moves possible!</p>
          <button className="creative-btn" onClick={initializeGame}>
            Start Game
          </button>
        </div>
      ) : (
        <div className="game-board">
          <div className="game-info">
            <div className="moves">Moves: {moves}</div>
            <div className="pairs-found">Pairs: {solved.length / 2} / {symbols.length}</div>
          </div>
          
          <div className="cards-grid">
            {cards.map(card => (
              <div
                key={card.id}
                className={`memory-card ${
                  flipped.includes(card.id) || solved.includes(card.id) ? 'flipped' : ''
                }`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-front">?</div>
                <div className="card-back">{card.symbol}</div>
              </div>
            ))}
          </div>

          {solved.length === cards.length && (
            <div className="game-complete">
              <h3>🎉 Congratulations!</h3>
              <p>You completed the game in {moves} moves!</p>
              <button className="creative-btn" onClick={initializeGame}>
                Play Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MemoryGame;