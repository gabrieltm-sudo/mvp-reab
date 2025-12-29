// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Cabecalho from "./components/layout/Cabecalho";
import Footer from "./components/layout/Footer";
import Acessibilidade from "./components/common/Acessibilidade";
import LoadingSpinner from "./components/ui/LoadingSpinner";

import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Consulta from "./pages/Consulta";
import Equipe from "./pages/Equipe";

import "./style.css";
import ScrollToTop from "./components/common/ScrollToTop";
import { useRouteLoading } from "./hooks/useLoading";
import { theme } from './theme';

// Componente limpo que usa o hook
const AppContent = () => {
  const isLoading = useRouteLoading(300); // 300ms de loading

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <div>
          <Cabecalho />
          <AppContent />
          <Acessibilidade />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;