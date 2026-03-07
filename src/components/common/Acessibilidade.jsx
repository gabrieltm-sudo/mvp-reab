import { AArrowDown, AArrowUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';

function Acessibilidade() {
  const [fontSize, setFontSize] = useState(16);

  const passo = 2;
  const tamMax = 28;
  const tamMin = 12;

  useEffect(() => {
    const fonteSalva = localStorage.getItem('fontSize');
    if (fonteSalva) {
      const tamanho = parseInt(fonteSalva, 10);
      setFontSize(tamanho);
      document.body.style.fontSize = `${tamanho}px`;
    }
  }, []);

  const aumentarFonte = () => {
    const novoTamanho = fontSize + passo;

    if (novoTamanho <= tamMax) {
      setFontSize(novoTamanho);
      document.body.style.fontSize = `${novoTamanho}px`;
      localStorage.setItem('fontSize', novoTamanho.toString());
    }
  };

  const diminuirFonte = () => {
    const novoTamanho = fontSize - passo;

    if (novoTamanho >= tamMin) {
      setFontSize(novoTamanho);
      document.body.style.fontSize = `${novoTamanho}px`;
      localStorage.setItem('fontSize', novoTamanho.toString());
    }
  };

  return (
    <div className="button-acess">
      
      <IconButton
        onClick={aumentarFonte}
        aria-label="Aumentar tamanho da fonte em 2 pontos"
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
        aria-label="Diminuir tamanho da fonte em 2 pontos"
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