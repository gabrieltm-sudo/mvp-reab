import { Inbox, MapPinCheckIcon, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Contato = () => {
  return (
    <>
    <section>
      <div id="principal1">
        <div className="title">
          <h1>Formas de contato e horário de funcionamento</h1>
        </div>
      </div>
    </section>
    <section id="content-all">
      <p>
        As principais formas de contatar o Serviço de Reabilitação Física de
        Bagé são por e-mail, telefone e diretamente em seu endereço atual.
      </p>
      <br />
      <ul id="contato-list">
        <li>
          <Inbox/> <strong>E-mail:</strong>{" "}
          <a href="mailto:reabilitacaofisica.sms@bage.rs.gov.br"
            target="_blank" rel="noopener noreferrer"
          >
            reabilitacaofisica.sms@bage.rs.gov.br
          </a>
        </li>
        <li>
          <Phone /> <strong>Telefone:</strong> {" "}(53) 3242-7494
        </li>
        <li>
          <MapPinCheckIcon /> <strong>Endereço:</strong>{" "}
          <Link to="https://maps.app.goo.gl/2nJTHhcy5BPZXT5g6">
            Avenida Marechal Floriano, 2265, Centro, Bagé - RS, CEP: 96400011
          </Link>
        </li>
      </ul>
      <br />
      <table id="table">
        <thead>
          <tr>
            <th>Horário de Atendimento:</th>
          </tr>
        <tr>
          <th>Dia da semana</th>
          <th>Horário</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Segunda-feira</td>
          <td id="horarios">07:30 às 11:30 - 13:30 às 17:30</td>
        </tr>

        <tr>
          <td>Terça-feira</td>
          <td id="horarios">07:30 às 11:30 - 13:30 às 17:30</td>
        </tr>

        <tr>
          <td>Quarta-feira</td>
          <td id="horarios">07:30 às 11:30 - 13:30 às 17:30</td>
        </tr>

        <tr>
          <td>Quinta-feira</td>
          <td id="horarios">07:30 às 11:30 - 13:30 às 17:30</td>
        </tr>

        <tr>
          <td>Sexta-feira</td>
          <td id="horarios">07:30 às 11:30 - 13:30 às 17:30</td>
        </tr>
        </tbody>
      </table>
    </section>
    </>
  );
};

export default Contato