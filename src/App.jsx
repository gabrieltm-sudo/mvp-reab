// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Cabecalho from "./Components/Cabecalho";
import Footer from "./Components/Footer";
import Acessibilidade from "./Components/Acessibilidade";
import LoadingSpinner from "./Components/LoadingSpinner";

import Home from "./Components/Home";
import Servicos from "./Components/Servicos";
import Contato from "./Components/Contato";
import Consulta from "./Components/Consulta";
import Equipe from "./Components/Equipe";

import "./style.css";
import ScrollToTop from "./Components/ScrollToTop";

// Componente interno para gerenciar loading
const AppContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(location.pathname);

  useEffect(() => {
    // ✅ Só mostra loading se houve mudança real de rota
    if (previousLocation !== location.pathname) {
      setIsLoading(true);
      
      // ✅ Timer para esconder loading
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 200);

      // ✅ Atualiza rota anterior
      setPreviousLocation(location.pathname);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]); // ✅ Removi previousLocation da dependência

  if (isLoading) {
    return <LoadingSpinner message="Carregando página..." />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/consulta" element={<Consulta />} />
      <Route path="/equipe" element={<Equipe />}/>
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Cabecalho />
        <AppContent />
        <Acessibilidade />
        <Footer />
      </div>
    </Router>
  );
};

export default App;