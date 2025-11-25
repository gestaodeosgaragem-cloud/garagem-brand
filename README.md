# 🎨 Garagem Design System

> O sistema de design oficial da marca Garagem. Identidade visual completa, componentes modernos e tema standalone pronto para produção.

![Garagem Banner](https://garagem-brand-p086jwhyf-gestao-os-projects.vercel.app/assets/logos/Gradiente%20-%20Horizontal%20Completa.svg)

## 🚀 Usar o Tema (CDN)

A maneira mais rápida de usar a identidade visual Garagem em qualquer projeto web. Basta uma linha de código.

### No seu HTML:
```html
<link rel="stylesheet" href="https://garagem-brand-p086jwhyf-gestao-os-projects.vercel.app/garagem-theme.css">
```

### Ou no seu CSS:
```css
@import url('https://garagem-brand-p086jwhyf-gestao-os-projects.vercel.app/garagem-theme.css');
```

---

## ✨ O que está incluído?

Ao importar o tema, seu projeto ganha automaticamente:

- **Tipografia Oficial**: Fontes *Orbitron* (títulos) e *Funnel Display* (texto) configuradas.
- **Cores da Marca**: Variáveis CSS globais (`--garagem-vermelho`, `--garagem-gradiente`, etc).
- **Componentes Automáticos**:
  - `<button>`: Estilizados com gradiente e hover effects.
  - `.card`: Containers com sombras e bordas suaves.
  - `input`, `textarea`: Campos de formulário modernos.
- **Modo Escuro**: Suporte nativo a `data-theme="dark"`.

## 📚 Documentação

Visite nosso site de documentação para ver todos os componentes e exemplos interativos:

👉 **[Documentação Completa & Demo](https://garagem-brand-p086jwhyf-gestao-os-projects.vercel.app/)**

## 🛠️ Instalação Local (Desenvolvimento)

Se você quiser contribuir com o design system ou rodar a documentação localmente:

1. Clone o repositório:
```bash
git clone https://github.com/gestaodeosgaragem-cloud/garagem-brand.git
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

## 📦 Estrutura do Projeto

- `/public/garagem-theme.css`: O arquivo do tema standalone (distribuição).
- `/app`: Aplicação Next.js da documentação.
- `/components`: Componentes React da documentação.
- `/assets`: Logos e fontes originais.

## 📄 Licença

© 2025 Garagem. Todos os direitos reservados.
