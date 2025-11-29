import React, { useState, useEffect } from 'react';

const RandomIdeas = () => {
  const [ideas, setIdeas] = useState([]);

  const projectIdeas = [
    {
      title: "AI Study Assistant",
      description: "An intelligent app that creates personalized study schedules and tracks your learning progress using machine learning.",
      category: "AI/ML",
      difficulty: "Advanced"
    },
    {
      title: "Eco-Friendly Campus App",
      description: "A mobile app that helps students track their carbon footprint and suggests sustainable practices for campus life.",
      category: "Sustainability",
      difficulty: "Intermediate"
    },
    {
      title: "Virtual Study Groups",
      description: "A platform that connects students for virtual study sessions with shared whiteboards and real-time collaboration.",
      category: "Education",
      difficulty: "Intermediate"
    },
    {
      title: "Smart Attendance System",
      description: "A facial recognition system that automates attendance tracking for university classes.",
      category: "Computer Vision",
      difficulty: "Advanced"
    },
    {
      title: "Campus Food Sharing",
      description: "An app that reduces food waste by allowing students to share extra meals with others on campus.",
      category: "Social Good",
      difficulty: "Beginner"
    },
    {
      title: "AR Campus Navigation",
      description: "Augmented reality app that helps new students navigate the university campus with interactive directions.",
      category: "AR/VR",
      difficulty: "Advanced"
    }
  ];

  const generateIdeas = () => {
    const shuffled = [...projectIdeas].sort(() => 0.5 - Math.random());
    setIdeas(shuffled.slice(0, 3));
  };

  useEffect(() => {
    document.title = "Creative Ideas - Yellow.Test";
    generateIdeas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="random-ideas-page">
      <div className="page-header">
        <h1 className="page-title">💡 Creative Ideas</h1>
        <p className="page-subtitle">Get inspired with random project ideas for your next university project!</p>
      </div>

      <div className="ideas-container">
        <button className="generate-btn" onClick={generateIdeas}>
          🔄 Generate New Ideas
        </button>

        <div className="ideas-grid">
          {ideas.map((idea, index) => (
            <div key={index} className="idea-card">
              <div className="idea-header">
                <h3 className="idea-title">{idea.title}</h3>
                <span className={`difficulty-badge ${idea.difficulty.toLowerCase()}`}>
                  {idea.difficulty}
                </span>
              </div>
              <p className="idea-description">{idea.description}</p>
              <div className="idea-footer">
                <span className="idea-category">#{idea.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomIdeas;