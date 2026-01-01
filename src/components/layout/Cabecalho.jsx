// src/Cabecalho.js
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const abreMenu = () => {
    setMenuAberto(!menuAberto)
  };
  
  return (
    <div className="cabecalho">

      <header>
        <button onClick={abreMenu}  className="menuBurguer">{menuAberto ? <X /> : <MenuIcon />}</button>
        <div id="logo">
          <a href="https://www.bage.rs.gov.br/secretarias/secretaria-de-saude" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/logo.png"
              alt="Logo da Prefeitura de Bagé - Secretária de SAÚDE"
              width="140px"
            />
          </a>
        </div>
        <nav id="menu" className={menuAberto ? "aberto" : ""}>
          <NavLink onClick={abreMenu} to="/">Home</NavLink>
          <NavLink onClick={abreMenu} to="/servicos">Serviços</NavLink>
          <NavLink onClick={abreMenu} to="/contato">Formas de contato</NavLink>
          <NavLink onClick={abreMenu} to="/consulta">Como agendar sua consulta</NavLink>
          <NavLink onClick={abreMenu} to="/equipe">Equipe</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Cabecalho;
