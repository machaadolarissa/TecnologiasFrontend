import React, { useState } from 'react';
import './App.css';
import CountCharacters from './CountCharacters';
import VerifyLogin from './VerifyLogin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <CountCharacters />
      ) : (
        <VerifyLogin onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;