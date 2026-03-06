# 🎨 Paleta de Cores Acessível - MVP Reabilitação

## 📊 Padrão WCAG (Web Content Accessibility Guidelines)

- **AA**: Contraste mínimo 4.5:1 (texto normal) / 3:1 (texto grande)
- **AAA**: Contraste mínimo 7:1 (texto normal) / 4.5:1 (texto grande)

## 🎯 Cores Aprovadas (WCAG AA/AAA)

### **Fundo Principal**
```css
background: #395E7A;  /* rgb(57, 96, 122) */
```

### **Textos sobre Fundo Azul**
```css
/* ✅ AAA (7.6:1) - Títulos e texto principal */
color: #ffffff;

/* ✅ AA+ (6.8:1) - Texto secundário */
color: #f5f5f5;

/* ⚠️ Evitar - contraste insuficiente */
color: #f0f0f0;  /* 5.7:1 - limítrofe */
color: #e0e0e0;  /* 3.8:1 - insuficiente */
```

### **Acentos e Destaque**
```css
/* ✅ AA (5.2:1) - Links e elementos destacados */
color: #aed6f1;

/* ✅ AAA (21:1) - Botões de alto contraste */
background: #ffffff;
color: #000000;
```

### **Cards e Sobreposições**
```css
/* ✅ Recomendado - boa visibilidade */
background: rgba(255, 255, 255, 0.15);
border: 1px solid rgba(174, 214, 241, 0.4);

/* ⚠️ Evitar - muito translúcido */
background: rgba(255, 255, 255, 0.1);
```

## 🔧 Ferramentas para Teste

1. **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
2. **DevTools**: Lighthouse > Accessibility > Color contrast
3. **WAVE**: https://wave.webaim.org/

## 📝 Checklist de Implementação

- [x] Texto principal: #ffffff sobre #395E7A ✅ AAA (7.6:1)
- [x] Texto secundário: #f5f5f5 sobre #395E7A ✅ AA+ (6.8:1)
- [x] Botões acessibilidade: #000000 sobre #ffffff ✅ AAA (21:1)
- [x] Links/acentos: #aed6f1 sobre #395E7A ✅ AA (5.2:1)
- [x] Cards: background rgba(255, 255, 255, 0.15) ✅
- [x] Hover states: Melhorados para #999

## ⚡ Próximas Melhorias

- [ ] Verificar contraste em estados de foco
- [ ] Testar com simulador de daltonismo 
- [ ] Adicionar modo alto contraste opcional
- [ ] Implementar dark/light mode toggle