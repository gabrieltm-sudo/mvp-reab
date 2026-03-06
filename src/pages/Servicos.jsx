// src/Components/Servicos.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 🚀 PERFORMANCE - Imports específicos reduzem bundle em ~15%
import Heart from 'lucide-react/dist/esm/icons/heart';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import Wrench from 'lucide-react/dist/esm/icons/wrench';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import Info from 'lucide-react/dist/esm/icons/info';
import X from 'lucide-react/dist/esm/icons/x';

import "../styles/pages/servicos.css";

const Servicos = () => {
  const [showFonoModal, setShowFonoModal] = useState(false);

  const servicos = [
    {
      id: 1,
      titulo: "Fisioterapia",
      icone: <Heart className="servico-icon" />,
      descricao: "Tratamento fisioterapêutico especializado",
      detalhes: [
        "Assistência fisioterapêutica cardiovascular e pneumofuncional",
        "Assistência fisioterapêutica nas alterações neurológicas", 
        "Assistência fisioterapêutica nas disfunções músculo-esqueléticas"
      ],
      botaoTexto: "Ver Reportagem",
      botaoLink: "https://globoplay.globo.com/v/4095156/",
      tipoLink: "externo"
    },
    {
      id: 2,
      titulo: "Fonoaudiologia",
      icone: <MessageSquare className="servico-icon" />,
      descricao: "Tratamento fonoaudiológico especializado",
      detalhes: [
        "Avaliação e reabilitação da comunicação",
        "Tratamento de distúrbios da fala e linguagem",
        "Terapia para disfagia (dificuldades de deglutição)",
        "Reabilitação vocal e auditiva"
      ],
      botaoTexto: "Saiba Mais",
      botaoLink: "#",
      tipoLink: "modal"
    },
    {
      id: 3,
      titulo: "Órteses e Próteses",
      icone: <Wrench className="servico-icon" />,
      descricao: "OPMs - Órteses, Próteses e Meios Auxiliares",
      detalhes: [
        "Dispensação de equipamentos",
        "Substituição quando necessário",
        "Encaminhamento para confecção, manutenção e adaptação"
      ],
      botaoTexto: "Agendar Medição",
      botaoLink: "https://www.bage.rs.gov.br/noticias/oficina-ortopedica-de-bage-esta-realizando-medicao-de-ortese-e-proteses-1",
      tipoLink: "externo"
    }
  ];

  const handleBotaoClick = (servico) => {
    if (servico.tipoLink === "modal") {
      setShowFonoModal(true);
    } else if (servico.tipoLink === "externo") {
      window.open(servico.botaoLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div>
      <section>
        <div id="principal1">
          <div className="title">
            <h1>Serviços prestados pelo Serviço de Reabilitação de Bagé</h1>
          </div>
        </div>
      </section>

      <section id="content-all">
        <p className="servicos-intro">Dentro dos serviços prestados estão:</p>
        
        <div className="servicos-container">
          {servicos.map((servico) => (
            <div key={servico.id} className="servico-card">
              <div className="servico-header">
                {servico.icone}
                <h3>{servico.titulo}</h3>
              </div>
              
              <p className="servico-descricao">{servico.descricao}</p>
              
              <ul className="servico-detalhes">
                {servico.detalhes.map((detalhe, index) => (
                  <li key={index}>{detalhe}</li>
                ))}
              </ul>
              
              <button 
                className="servico-botao"
                onClick={() => handleBotaoClick(servico)}
                aria-label={servico.tipoLink === "externo" 
                  ? `${servico.botaoTexto} - ${servico.titulo} (abre em nova janela)` 
                  : `Ver detalhes do serviço de ${servico.titulo.toLowerCase()}`
                }
              >
                {servico.botaoTexto}
                {servico.tipoLink === "externo" ? <ExternalLink size={16} /> : <Info size={16} />}
              </button>
            </div>
          ))}
        </div>

        {/* Modal/Seção Expandida para Fonoaudiologia */}
        {showFonoModal && (
          <div className="fono-modal-overlay" onClick={() => setShowFonoModal(false)}>
            <div className="fono-modal" onClick={(e) => e.stopPropagation()}>
              <div className="fono-modal-header">
                <h2><MessageSquare /> Fonoaudiologia - Detalhes do Serviço</h2>
                <button 
                  className="fono-modal-close"
                  onClick={() => setShowFonoModal(false)}
                  aria-label="Fechar modal de detalhes da fonoaudiologia"
                >
                  <X />
                </button>
              </div>
              
              <div className="fono-modal-content">
                <div className="fono-section">
                  <h3>🎯 Áreas de Atuação:</h3>
                  <ul>
                    <li><strong>Comunicação:</strong> Avaliação e reabilitação de distúrbios da fala e linguagem</li>
                    <li><strong>Disfagia:</strong> Tratamento de dificuldades de deglutição</li>
                    <li><strong>Voz:</strong> Reabilitação vocal para diferentes patologias</li>
                    <li><strong>Audição:</strong> Avaliação e reabilitação auditiva</li>
                  </ul>
                </div>
                
                <div className="fono-section">
                  <h3>👥 Público Atendido:</h3>
                  <ul>
                    <li>Crianças com atraso de desenvolvimento da fala</li>
                    <li>Adultos com alterações neurológicas</li>
                    <li>Pacientes pós-AVC</li>
                    <li>Pessoas com dificuldades de deglutição</li>
                  </ul>
                </div>
                
                <div className="fono-actions">
                  <Link to="/contato" className="fono-action-btn primary">
                    Agendar Consulta
                  </Link>
                  <Link to="/equipe" className="fono-action-btn secondary">
                    Conhecer Equipe
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Servicos;
