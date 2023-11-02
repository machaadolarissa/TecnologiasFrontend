import React, { Component } from 'react';
import './App.css';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida from './UsuarioSaida';

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
      <div className="App">
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