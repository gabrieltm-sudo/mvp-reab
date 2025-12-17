// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cabecalho from "./Components/Cabecalho";
import Footer from "./Components/Footer";
import Acessibilidade from "./Components/Acessibilidade";

import Home from "./Components/Home";
import Servicos from "./Components/Servicos";
import Contato from "./Components/Contato";
import Consulta from "./Components/Consulta";
import Equipe from "./Components/Equipe";

import "./style.css";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/Consulta" element={<Consulta />} />
          <Route path="/equipe" element={<Equipe />}/>
        </Routes>
        <Acessibilidade />
        <Footer />
      </div>
    </Router>
  );
};

export default App;