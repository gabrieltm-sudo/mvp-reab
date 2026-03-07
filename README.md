# Serviço de Reabilitação Física de Bagé - MVP

[![Deploy](https://img.shields.io/badge/Deploy-Online-green?style=for-the-badge&logo=vercel)](https://srf.gabriel-sudo.me)

Projeto MVP desenvolvido para o Serviço de Reabilitação Física de Bagé - RS, com informações sobre serviços de fisioterapia, fonoaudiologia e ortopedia.

---

## 📸 Demonstração

Você pode acessar a versão funcional do projeto através do link abaixo:  
🔗 **[srf.gabriel-sudo.me](https://srf.gabriel-sudo.me)**

### Desktop
![Página inicial - Desktop](/public/images/webdemonstracao.png)

### Mobile
![Página inicial - Mobile](/public/images/mobiledemonstracao.png)

---

## 📋 Sobre

Site institucional criado como MVP para apresentar os serviços de reabilitação física oferecidos à comunidade de Bagé. O projeto foca em acessibilidade e responsividade para atender idosos, pessoas com deficiência e seus familiares.

---

## 🛠️ Tecnologias

- **React 18.2.0** - Biblioteca JavaScript
- **Vite 7.2.4** - Build tool
- **React Router 7.10.1** - Navegação entre páginas
- **Material-UI 7.3.6** - Componente de botões
- **Lucide React** - Ícones
- **CSS Modules** - Estilização

---

## 📂 Estrutura

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas (Home, Serviços, Equipe, Consulta, Contato)
├── styles/        # Arquivos CSS organizados por pasta
├── hooks/         # Hook customizado (useLoading)
└── App.jsx        # Componente principal
```

---

## 🚀 Como executar

### Instalar dependências:
```bash
npm install
```

### Executar em desenvolvimento:
```bash
npm run dev
```

Acesse: `http://localhost:5173`

### Build para produção:
```bash
npm run build
```

Os arquivos otimizados estarão em `/dist`

---

## ✨ Funcionalidades

- 5 páginas completas (Home, Serviços, Equipe, Consulta, Contato)
- Navegação por rotas com React Router
- Botões de acessibilidade (ajuste de tamanho de fonte)
- Design responsivo (desktop e mobile)
- Cards modernos com informações dos serviços
- Menu hambúrguer no mobile
- Tabela de horários de atendimento

---

## 📱 Responsividade

O site se adapta a diferentes tamanhos de tela:
- Desktop (≥ 768px)
- Mobile (< 768px)

---

## 🎨 Paleta de Cores

- Azul primário: `#395E7A`
- Azul escuro: `#1E3D4A`
- Azul claro: `#aed6f1`
- Texto: `#2c2c2c`

---

## 🚀 Melhorias Futuras

Funcionalidades planejadas para as próximas versões:

- **Mapa Interativo** - Integração com Google Maps ou Leaflet na página de Contato
- **Página de Consulta** - Redesign do layout com melhor UX
- **Sistema de E-mail** - API para envio de formulários de contato (EmailJS, Resend ou similar)
- **Agendamento Online** - Possível integração com sistema de agendamento
- **Galeria de Fotos** - Imagens das instalações e equipe

> **Status:** MVP concluído e funcional. Melhorias serão implementadas conforme demanda e disponibilidade.

---

**Desenvolvido por Gabriel Torres Machado - Discente Monitor do PET Saúde/I&SD TEC I - 2026**
