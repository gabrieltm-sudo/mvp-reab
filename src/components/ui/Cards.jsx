// src/Cards.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const Cards = () => {
  return (
    <section className="cards">
      <div className="containerclass">
        <h2><strong>Áreas</strong></h2>
        <p>Todas as informações necessárias sobre serviços, formas de contato e equipe.</p>
      </div>
      <div className="containercard">
        {/* Card de Serviços */}
        <div className="card">
          <img src="images/servicos.jpg" alt="Imagem de equipamentos do SRF" />
          <h3><strong>Serviços</strong></h3>
          <p>Conheça os principais serviços oferecidos para sua reabilitação.</p>
          <Button 
            variant="contained" 
            color="primary" 
            component={NavLink} 
            to="/servicos"
            sx={{ width: '85%', py: 1.5, fontWeight: 600, fontSize: '1em' }}
          >
            Ver Serviços
          </Button>
        </div>

        {/* Card de Como Agendar uma Consulta */}
        <div className="card">
          <img src="/images/local.jpg" alt="Imagem do prédio do SRF" />
          <h3><strong>Como Agendar uma Consulta</strong></h3>
          <p>Veja como marcar uma consulta e quais documentos necessários.</p>
          <Button 
            variant="contained" 
            color="primary" 
            component={NavLink} 
            to="/consulta"
            sx={{ width: '85%', py: 1.5, fontWeight: 600, fontSize: '1em' }}
          >
            Ver instruções
          </Button>
        </div>

        {/* Card de Equipe */}
        <div className="card">
          <img src="/images/equipedesaude.avif" alt="Imagem de uma equipe de saúde" />
          <h3><strong>Equipe</strong></h3>
          <p>Conheça a equipe formada por profissionais dedicados e qualificados.</p>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link} 
            to="/equipe"
            sx={{ width: '85%', py: 1.5, fontWeight: 600, fontSize: '1em' }}
          >
            Ver Equipe
          </Button>
        </div>
        
        {/* Card de Formas de Contato */}
        <div className="card">
          <img src="images/contato.jpg" alt="Imagem de um celular com símbolos de ligação, e-mail e escrever" />
          <h3><strong>Formas de contato</strong></h3>
          <p>O serviço de Reabilitação Física recebe ligações, e-mails, além de atender presencialmente em seu endereço. Tire suas dúvidas aqui.</p>
          <Button 
            variant="contained" 
            color="primary" 
            component={NavLink} 
            to="/contato"
            sx={{ width: '85%', py: 1.5, fontWeight: 600, fontSize: '1em' }}
          >
            Formas de Contato
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Cards;
