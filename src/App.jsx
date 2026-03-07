// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Cabecalho from "./components/layout/Cabecalho";
import Footer from "./components/layout/Footer";
import Acessibilidade from "./components/common/Acessibilidade";
import LoadingSpinner from "./components/ui/LoadingSpinner";

// Páginas carregam sob demanda
const Home = lazy(() => import("./pages/Home"));
const Servicos = lazy(() => import("./pages/Servicos"));
const Contato = lazy(() => import("./pages/Contato"));
const Consulta = lazy(() => import("./pages/Consulta"));
const Equipe = lazy(() => import("./pages/Equipe"));

import "./styles/global.css";
import "./styles/shared.css";
import "./styles/layout/header.css";
import "./styles/layout/footer.css";
import "./styles/component/acessibilidadeBotao.css";
import "./styles/component/spinnerLoading.css";

import ScrollToTop from "./components/common/ScrollToTop";
import { useRouteLoading } from "./hooks/useLoading";
import { theme } from './theme';

// Componente com loading suave para transições
const AppContent = () => {
  const isLoading = useRouteLoading(300); // 300ms de loading suave

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
          
          {/* Suspense wrapper para lazy loading */}
          <Suspense fallback={<LoadingSpinner message="Carregando página..." />}>
            <AppContent />
          </Suspense>
          
          <Acessibilidade />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;