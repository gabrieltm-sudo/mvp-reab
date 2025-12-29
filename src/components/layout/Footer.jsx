// src/Footer.js
import { Inbox, MapPinCheckIcon, Phone } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="ColunasFooter">
        <div className="Coluna-Footer">
          <nav id="LinksSite">
            <h3>Links para navegação: </h3>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/servicos">Serviços</NavLink>
            <NavLink to="/contato">Formas de contato</NavLink>
            <NavLink to="/consulta">Como agendar sua consulta</NavLink>
            <NavLink to="/equipe">Equipe</NavLink>
          </nav>
        </div>
        <div className="Coluna-Footer">
          <div id="ContatoFooter">
          <h4>Contato</h4>
            <p>
              <Inbox size={20} style={{ marginRight: "5px" }} />{" "}
              reabilitacaofisica.sms@bage.rs.gov.br
            </p>
            <p>
              <Phone size={20} style={{ marginRight: "5px" }} /> (53) 3242-7494
            </p>
            <p>
              <MapPinCheckIcon size={20} style={{ marginRight: "5px" }} />{" "}
              Avenida Marechal Floriano, 2265, Centro, Bagé - RS, CEP: 96400011
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
