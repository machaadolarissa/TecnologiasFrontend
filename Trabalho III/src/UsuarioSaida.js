import React from 'react';
import './style.css';

const UsuarioSaida = (props) => {
  return (
    <div>
      <div className="caixa">
        <p>Login: {props.nomeProps}</p>
        <p>Nome via props</p>
      </div>
      <div className="caixa">
        <p>Login: {props.nomeStates}</p>
        <p>Nome via states e eventos</p>
      </div>
    </div>
  );
};

export default UsuarioSaida;
