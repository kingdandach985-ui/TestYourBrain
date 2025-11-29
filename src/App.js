import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserProfile from './pages/UserProfile';
import MathTest from './pages/MathTest';
import MemoryChallenge from './pages/MemoryChallenge';
import TypingSpeed from './pages/TypingSpeed';
import RandomIdeas from './pages/RandomIdeas';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    const newUser = {
      ...user,
      id: Date.now(),
      mathScore: 0,
      memoryScore: 0,
      typingScore: 0,
      joinDate: new Date().toLocaleDateString()
    };
    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
  };

  const updateScore = (userId, activity, newScore) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, [`${activity}Score`]: newScore } : user
    ));
  };

  const removeUser = (userId) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
    if (currentUser && currentUser.id === userId) {
      setCurrentUser(null);
    }
  };

  return (
    <div className="App">
      <div className="background-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <Navbar currentUser={currentUser} />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route 
            path="/profile" 
            element={
              <UserProfile 
                users={users}
                currentUser={currentUser}
                onAddUser={addUser}
                onRemoveUser={removeUser}
              />
            } 
          />
          <Route 
            path="/math-test" 
            element={
              <MathTest 
                currentUser={currentUser}
                onUpdateScore={updateScore}
              />
            } 
          />
          <Route 
            path="/memory-challenge" 
            element={
              <MemoryChallenge 
                currentUser={currentUser}
                onUpdateScore={updateScore}
              />
            } 
          />
          <Route 
            path="/typing-speed" 
            element={
              <TypingSpeed 
                currentUser={currentUser}
                onUpdateScore={updateScore}
              />
            } 
          />
          <Route 
            path="/random-ideas" 
            element={<RandomIdeas />} 
          />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;