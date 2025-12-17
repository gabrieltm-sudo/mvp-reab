// src/Components/Servicos.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Servicos = () => {
  return (
    <div>
      <section>
        <div id="principal1" className="bg-blue-900 text-white p-6 min-h-screen flex items-center justify-center">
          <div className="title">
            <h1 className="text-4xl font-bold">Serviços prestados pelo Serviço de Reabilitação de Bagé</h1>
          </div>
        </div>
      </section>

      {/* Conteúdo dos Serviços */}
      <section id="content-all">
        <p>Dentro dos serviços prestados estão:</p>
        <br />
        <div className="servico-item">
          <div className="servico-texto">
            <li><strong>Tratamento fisioterapêutico:</strong></li>
            <br />
            <ul>
              <li>Assistência fisioterapêutica cardiovascular e pneumofuncional;</li>
              <li>Assistência fisioterapêutica nas alterações neurológicas;</li>
              <li>Assistência fisioterapêutica nas disfunções músculo-esqueléticas.</li>
            </ul>
          </div>
          <div className="servico-imagem">
            <figure>
              <Link to="https://globoplay.globo.com/v/4095156/" target="_blank" rel="noopener noreferrer">
                <img src="./images/fisioterapia.jpg" alt="Imagem de fisioterapia" className="imagem-servico" />
              </Link>
              <figcaption><b>Reportagem da RBS sobre o SRF Bagé</b></figcaption>
            </figure>
          </div>
        </div>

        <br />
        <div className="servico-item">
          <div className="servico-texto">
            <li><strong>Tratamento fonoaudiológico;</strong></li>
          </div>
        </div>

        <div className="servico-item">
          <div className="servico-texto">
            <br />
            <li><strong>Órteses, Próteses e Meios Auxiliares de Locomoção (OPMs):</strong></li>
            <br />
            <ul>
              <li>Dispensação;</li>
              <li>Substituição;</li>
              <li>Encaminhamento para a <Link to="https://www.bage.rs.gov.br/noticias/oficina-ortopedica-de-bage-esta-realizando-medicao-de-ortese-e-proteses-1" target="_blank" rel="noopener noreferrer">confecção, manutenção e adaptação</Link>.</li>
            </ul>
          </div>
          <div className="servico-imagem">
            <figure>
              <Link to="https://www.bage.rs.gov.br/noticias/oficina-ortopedica-de-bage-esta-realizando-medicao-de-ortese-e-proteses-1" target="_blank" rel="noopener noreferrer">
                <img src="./images/orteses.jpeg" alt="Imagem de órtese ou protese" className="imagem-servico" />
              </Link>
              <figcaption><b>Medição de órteses e próteses</b></figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
