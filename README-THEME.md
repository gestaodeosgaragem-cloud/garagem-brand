# Garagem Design System - CDN Theme

## 🚀 Quick Start

### Opção 1: Link no HTML
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="/garagem-theme.css">
</head>
<body>
    <h1>Meu Projeto Garagem</h1>
    <button>Botão Automático</button>
</body>
</html>
```

### Opção 2: @import no CSS
```css
@import url('/garagem-theme.css');

/* Seus estilos personalizados aqui */
```

## 🎨 Recursos Incluídos

### ✅ Estilos Automáticos
- **Botões**: Todos os `<button>` já vêm com gradiente Garagem
- **Tipografia**: Orbitron para títulos, Funnel Display para texto
- **Cards**: `.card` com hover e sombras
- **Inputs**: Form elements estilizados

### 🎭 Temas
```html
<!-- Tema Claro (padrão) -->
<body>...</body>

<!-- Tema Escuro -->
<body data-theme="dark">...</body>
```

### 🔧 Variáveis CSS Disponíveis
```css
/* Cores */
--garagem-vermelho: #D93030;
--garagem-magenta: #EA348B;
--garagem-branco-ambiente: #F8F1FE;
--garagem-preto-tecnico: #212121;
--garagem-gradiente: linear-gradient(45deg, #EA348B 0%, #D93030 100%);

/* Espaçamentos */
--espacamento-xs: 0.5rem;
--espacamento-sm: 1rem;
--espacamento-md: 1.5rem;
--espacamento-lg: 2rem;
--espacamento-xl: 3rem;

/* Bordas */
--radius-sm: 0.375rem;
--radius-md: 0.5rem;
--radius-lg: 1rem;
```

## 📦 Classes Utilitárias

### Botões
```html
<button>Padrão (Gradiente)</button>
<button class="botao-contrario">Invertido</button>
<button class="botao-outline">Outline</button>
<button class="botao-preto">Preto</button>
<button class="botao-pequeno">Pequeno</button>
<button class="botao-grande">Grande</button>
```

### Cards
```html
<div class="card">
    <h3>Título do Card</h3>
    <p>Conteúdo do card...</p>
</div>

<div class="card card-gradiente">Card com Gradiente</div>
<div class="card card-escuro">Card Escuro</div>
```

### Utilitários
```html
<h1 class="texto-gradiente">Texto com Gradiente</h1>
<div class="fundo-gradiente">Fundo com Gradiente</div>
<div class="fundo-escuro">Fundo Escuro</div>
<div class="centralizado">Texto Centralizado</div>
<div class="container">Container</div>
```

## 🌐 Deploy para CDN

### Vercel (Recomendado)
1. Faça push do projeto para GitHub
2. Conecte ao Vercel
3. O arquivo ficará disponível em: `https://seu-projeto.vercel.app/garagem-theme.css`

### Netlify
1. Faça deploy do projeto
2. Arquivo disponível em: `https://seu-site.netlify.app/garagem-theme.css`

### GitHub Pages  
1. Ative GitHub Pages no repositório
2. Arquivo disponível em: `https://usuario.github.io/repo/garagem-theme.css`

## 📝 Exemplo Completo

```html
<!DOCTYPE html>
<html lang="pt-BR" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Garagem Project</title>
    <link rel="stylesheet" href="/garagem-theme.css">
</head>
<body>
    <div class="container">
        <div class="secao">
            <h1 class="texto-gradiente centralizado">Garagem Design System</h1>
            <p class="centralizado">Tema standalone importável via CDN</p>
        </div>

        <div class="card">
            <h2>Bem-vindo</h2>
            <p>Este card usa estilos automáticos do Garagem Theme.</p>
            <button>Ação Principal</button>
            <button class="botao-outline">Ação Secundária</button>
        </div>
    </div>
</body>
</html>
```

## 🎯 Compatibilidade
- ✅ HTML puro
- ✅ React / Next.js
- ✅ Vue / Nuxt
- ✅ Angular
- ✅ WordPress
- ✅ Qualquer framework ou CMS

## 📚 Documentação Completa
Acesse: [https://seu-dominio.com/docs](https://seu-dominio.com/docs)

## 📄 Licença
© 2025 Garagem. Todos os direitos reservados.

---

**Versão**: 1.0  
**Tamanho**: ~12KB (minificado: ~8KB)  
**Performance**: ⚡ Carrega em < 50ms
