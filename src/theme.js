import { createTheme } from '@mui/material/styles';

// Tema customizado mantendo suas cores atuais
export const theme = createTheme({
  palette: {
    primary: {
      main: '#395E7A',        // Seu azul atual
      dark: '#2D4A5E',        // Azul mais escuro
      light: '#5A7A96',       // Azul mais claro
    },
    secondary: {
      main: '#315D7A',        // Azul secundário
      dark: '#1E3D4A',        // Mais escuro
      light: '#4A7A96',       // Mais claro
    },
    background: {
      default: '#395E7A',     // Fundo principal (seu azul)
      paper: '#ffffff',       // Fundo dos cards/componentes
    },
    text: {
      primary: '#ffffff',     // Texto branco (para fundo azul)
      secondary: '#f0f0f0',   // Texto branco suave
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Montserrat', sans-serif",
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
    },
  },
  components: {
    // Customizações dos componentes MUI
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none', // Remove MAIÚSCULA automática
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 15,
        },
      },
    },
  },
});