import React, { useState } from 'react';
import CountCharacters from './CountCharacters';
import './style.css';

function VerifyLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return (
      <div>
        <h1>Bem-vindo ao contador de caracteres!</h1>
        <p>O usuário está logado.</p>
        <img src={require('./ok.png')} alt="autorizado" className="img-size" />
        <CountCharacters />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Usuário não está logado!</h1>
        <img src={require('./block.png')} alt="bloqueado" className="img-size" />
        <p>Por favor, faça o login para acessar o contador de caracteres.</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
}

export default VerifyLogin;
