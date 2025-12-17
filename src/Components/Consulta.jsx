import React from "react";
import { Link } from "react-router-dom";

const Consulta = () => {
  return (
    <>
      <section>
        <div id="principal1">
          <div className="title">
            <h1>Como agendar a sua consulta</h1>
          </div>
        </div>
      </section>

      <section id="content-all">
      <p>
        O agendamento é feito <strong>presencialmente</strong>, não havendo a
        necessidade do próprio paciente levar os documentos, podendo ser um
        parente ou acompanhante.
      </p>
      <br />
      <p>Portanto, é importante se atentar às seguintes instruções:</p>
      <br />
      <ol className="agendamento">
        <li>
          Os documentos para o SRF entrar com o pedido via
          <em>GERCON (Gerenciamento de Consultas)</em> são:
        </li>
        <ul>
          <li>RG ou Certidão de Nascimento;</li>
          <li>CPF;</li>
          <li>Cartão SUS;</li>
          <li>Comprovante de residência com CEP;</li>
          <li>
            Solicitação de um profissional de saúde do dispositivo indicado, com
            diagnóstico <em>CID (Classificação Internacional de Doenças)</em> e
            tempo de lesão;
          </li>
          <li>Dois números de telefones atualizados.</li>
        </ul>
        <li>
          O agendamento é feito apenas presencialmente e em horário de
          atendimento. (Horários disponíveis <Link to="/contato">aqui</Link>)
        </li>
      </ol>
    </section>
    </>
  );
};

export default Consulta;