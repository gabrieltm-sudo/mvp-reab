# 📂 Estrutura CSS Modular

Este projeto utiliza uma arquitetura CSS modular organizada para melhor manutenibilidade e performance.

## 📁 Organização dos Arquivos

### 🌍 **Global**
- `global.css` - Reset CSS, estilos de base, tipografia e regras globais

### 🤝 **Shared** 
- `shared.css` - Componentes compartilhados entre páginas (#principal1, #effect, .title, #content-all)

### 🏠 **Layout**
- `layout/header.css` - Cabeçalho, menu e navegação
- `layout/footer.css` - Rodapé e suas seções

### 📄 **Pages**
- `pages/home.css` - Página inicial (intro, stats, cards)
- `pages/servicos.css` - Página de serviços  
- `pages/contato.css` - Página de contato e tabelas
- `pages/consulta.css` - Página de consulta/agendamento
- `pages/equipe.css` - Página da equipe

### 🔧 **Components**
- `component/acessibilidadeBotao.css` - Botões de acessibilidade
- `component/spinnerLoading.css` - Spinner de carregamento

## 💡 Como Usar

### Importação no App.jsx
```jsx
// Ordem recomendada de importação:
import "./styles/global.css";
import "./styles/shared.css";
import "./styles/layout/header.css";
import "./styles/layout/footer.css";
import "./styles/component/acessibilidadeBotao.css";
import "./styles/component/spinnerLoading.css";
```

### Importação em Páginas Específicas
```jsx
// No componente da página
import "../styles/pages/home.css";
```

## 📱 Responsividade

Todos os arquivos incluem media queries apropriadas:
- `@media screen and (max-width: 768px)` - Mobile padrão
- `@media screen and (max-width: 600px)` - Smartphones pequenos (spinner)
- `@media screen and (max-width: 480px)` - Telas muito pequenas (home)

## 🔄 Migração

Este sistema substitui o antigo `style.css` monolítico, proporcionando:
- ✅ Melhor organização
- ✅ Carregamento otimizado
- ✅ Fácil manutenção
- ✅ Modularidade por componente/página

## 🛡️ Backup

O arquivo original está preservado em `styleCompletoCasodePerda.css` para segurança.