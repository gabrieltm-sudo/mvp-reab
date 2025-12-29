import { AArrowDown, AArrowUp } from 'lucide-react';
import React, { useState } from 'react';
import { IconButton } from '@mui/material';

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
      
      <IconButton
        onClick={aumentarFonte}
        aria-label="Aumentar tamanho da fonte"
        sx={{
          color: 'black',
          backgroundColor: 'white',
          marginRight: '15px',
          borderRadius: '15px',
          '&:hover': {
            backgroundColor: '#f0f0f0',
            border: '1px solid black',
          }
        }}
      >
        <AArrowUp />
      </IconButton>

      <IconButton
        onClick={diminuirFonte}
        aria-label="Diminuir tamanho da fonte"
        sx={{
          color: 'black',
          backgroundColor: 'white',
          marginRight: '15px',
          borderRadius: '15px',
          '&:hover': {
            backgroundColor: '#f0f0f0',
            border: '1px solid black',
          }
        }}
      >
        <AArrowDown/>
      </IconButton>
    </div>
  );
}

export default Acessibilidade;