import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Hook para simular loading entre rotas
export const useRouteLoading = (delay = 800) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname, delay]);

  return isLoading;
};

// Hook para loading de dados (futuro uso com APIs)
export const useAsyncLoading = () => {
  const [loading, setLoading] = useState(false);

  const execute = async (asyncFunction) => {
    try {
      setLoading(true);
      const result = await asyncFunction();
      return result;
    } catch (error) {
      console.error('Erro durante loading:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, execute };
};