import React from 'react';

const UsuarioEntrada = (props) => {
  return (
    <input
      type="text"
      placeholder="Digite um nome"
      onChange={props.onChange}
    />
  );
};

export default UsuarioEntrada;
