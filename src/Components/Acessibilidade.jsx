import { AArrowDown, AArrowUp } from 'lucide-react';
import React, { useState } from 'react';

function Acessibilidade() {
  const [fontSize, setFontSize] = useState(16);

  const passo = 2;
  const tamMax = 28;
  const tamMin = 12;

  const aumentarFonte = () => {
    const novoTamanho = fontSize + passo;

    if (novoTamanho <= tamMax) {
      setFontSize(novoTamanho);
      
      document.body.style.fontSize = `${novoTamanho}px`;
    }
  };

  const diminuirFonte = () => {
    const novoTamanho = fontSize - passo;

    if (novoTamanho >= tamMin) {
      setFontSize(novoTamanho);
      document.body.style.fontSize = `${novoTamanho}px`;
    }
  };

  return (
    <div className="button-acess">
      
      <button
        id="aumentarfont"
        onClick={aumentarFonte}
      >
        <AArrowUp />
      </button>

      <button
        id="diminuirfont"
        onClick={diminuirFonte}
      >
        <AArrowDown/>
      </button>
    </div>
  );
}

export default Acessibilidade;