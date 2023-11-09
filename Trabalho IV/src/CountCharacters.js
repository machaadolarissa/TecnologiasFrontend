import React, { useState } from 'react';

function CountCharacters() {
  const [text, setTexto] = useState('');

  const handleChange = (e) => {
    const newText = e.target.value;
    setTexto(newText);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu texto"
        value={text}
        onChange={handleChange}
      />
      <p>Total de caracteres: {text.length}</p>
    </div>
  );
}

export default CountCharacters;