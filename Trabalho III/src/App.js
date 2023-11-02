import React, { Component } from 'react';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida from './UsuarioSaida';
import './style.css';

class App extends Component {
  state = {
    nomeProps: 'Larissa Machado via props',
    nomeStates: '', 
  };

  atualizaNome = (event) => {
    this.setState({ nomeStates: event.target.value });
  };

  render() {
    return (
      <div className="caixa-nome">
        <UsuarioEntrada onChange={this.atualizaNome} />
        <UsuarioSaida
          nomeProps={this.state.nomeProps}
          nomeStates={this.state.nomeStates}
        />
      </div>
    );
  }
}

export default App;
