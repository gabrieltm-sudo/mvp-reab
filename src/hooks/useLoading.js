import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Hook funcional para loading entre rotas
export const useRouteLoading = (delay = 300) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(location.pathname);

  useEffect(() => {
    // Só mostra loading se houve mudança real de rota
    if (previousLocation !== location.pathname) {
      setIsLoading(true);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);

      setPreviousLocation(location.pathname);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]); // Removido dependências problemáticas

  return isLoading;
};
