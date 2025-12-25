import React from "react";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <section id="content">
      <div className="content-container">
        <div className="content-coluna-container">
          <div className="content-coluna">
            <p>
              <strong>Entre os principais pacientes atendidos estão: </strong>
            </p>
            <ul>
              <li>
                Pessoas com problemas neurológicos com problemas de equilíbrio e
                movimento;
              </li>
              <li>Crianças com paralisia cerebral;</li>

              <li>Pacientes com traumatismos raquimedulares/cranianos;</li>
              <li>
                Pacientes amputados (cuja maioria acaba sendo em razão da
                diabetes).
              </li>
            </ul>
          </div>

          <div className="content-coluna">
            <p>
              <br/>
              <br/>
              <strong>Objetivos do SRF:</strong>
            </p>
            <ol type="1">
              <li>
                Fornecer reabilitação clínica funcional, contribuindo para a
                melhoria das condições de vida e integração social.
              </li>
              <li>
                Promover a autonomia e independência para pessoas com
                deficiência, temporariamente ou permanentemente, por meio da
                reabilitação física.
              </li>
              <li>
                Fornecer órteses, próteses e meios de locomoção, como
                <a
                  href="https://www.bage.rs.gov.br/noticias/reabilitacao-fisica-entrega-cadeiras-de-rodas"
                  target="_blank" rel="noopener noreferrer"
                >
                  cadeiras de rodas
                </a>
                , conforme mencionado na aba de{" "}
                <Link to="/servicos">
                  serviços
                </Link>
                .
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeContent;
