'use client';

import { useState } from 'react';
import Card from '@/components/Card';

export default function ThemePage() {
    const [copied, setCopied] = useState(false);

    const cdnUrl = 'https://garagem-brand.vercel.app/garagem-theme.css';

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="container pt-nav">
            <div className="centralizado mb-3rem">
                <h1 className="texto-gradiente mb-1rem" style={{ fontSize: '3rem' }}>Garagem Theme CDN</h1>
                <p className="opacity-70" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                    Importe o design system Garagem em qualquer projeto com uma única linha
                </p>
            </div>

            {/* CDN via Link Tag */}
            <section className="secao">
                <h2 className="mb-2rem">📦 Uso via CDN (Recomendado)</h2>
                <Card>
                    <h3 style={{ marginBottom: '1rem' }}>Método 1: Link Tag no HTML</h3>
                    <p style={{ marginBottom: '1rem' }}>Adicione esta linha no <code>&lt;head&gt;</code> do seu HTML:</p>
                    <div style={{
                        background: 'var(--garagem-preto-tecnico)',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-md)',
                        position: 'relative',
                        marginBottom: '1rem'
                    }}>
                        <code style={{ color: '#4AF626', fontSize: '0.9rem', wordBreak: 'break-all' }}>
                            {`<link rel="stylesheet" href="${cdnUrl}">`}
                        </code>
                        <button
                            onClick={() => copyToClipboard(`<link rel="stylesheet" href="${cdnUrl}">`)}
                            className="botao-pequeno"
                            style={{ position: 'absolute', top: '1rem', right: '1rem' }}
                        >
                            {copied ? '✓ Copiado!' : 'Copiar'}
                        </button>
                    </div>
                    <p className="opacity-70" style={{ fontSize: '0.9rem' }}>
                        ✅ Recomendado para a maioria dos projetos • Cache otimizado • Atualizações automáticas
                    </p>
                </Card>
            </section>

            {/* CDN via @import */}
            <section className="secao">
                <Card>
                    <h3 style={{ marginBottom: '1rem' }}>Método 2: CSS @import</h3>
                    <p style={{ marginBottom: '1rem' }}>Adicione no topo do seu arquivo CSS principal:</p>
                    <div style={{
                        background: 'var(--garagem-preto-tecnico)',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-md)',
                        position: 'relative',
                        marginBottom: '1rem'
                    }}>
                        <code style={{ color: '#4AF626', fontSize: '0.9rem', wordBreak: 'break-all' }}>
                            {`@import url('${cdnUrl}');`}
                        </code>
                        <button
                            onClick={() => copyToClipboard(`@import url('${cdnUrl}');`)}
                            className="botao-pequeno"
                            style={{ position: 'absolute', top: '1rem', right: '1rem' }}
                        >
                            {copied ? '✓ Copiado!' : 'Copiar'}
                        </button>
                    </div>
                    <p className="opacity-70" style={{ fontSize: '0.9rem' }}>
                        ⚠️ Pode impactar performance • Bloqueia renderização até carregar
                    </p>
                </Card>
            </section>

            {/* Download Local */}
            <section className="secao">
                <Card className="card-escuro">
                    <h3 style={{ marginBottom: '1rem' }}>Método 3: Download Local</h3>
                    <p style={{ marginBottom: '1rem' }}>Para maior controle ou projetos offline:</p>
                    <a
                        href="/garagem-theme.css"
                        download="garagem-theme.css"
                        className="botao"
                        style={{ display: 'inline-block', marginTop: '1rem' }}
                    >
                        ⬇️ Baixar garagem-theme.css
                    </a>
                    <p className="opacity-70" style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                        📁 Depois, importe localmente: <code>&lt;link rel="stylesheet" href="./garagem-theme.css"&gt;</code>
                    </p>
                </Card>
            </section>

            {/* O que está incluído */}
            <section className="secao">
                <h2 className="mb-2rem">✨ O que está incluído</h2>
                <div className="grid grid-3">
                    <Card>
                        <h4 style={{ color: 'var(--garagem-vermelho)', marginBottom: '0.5rem' }}>🎨 Cores</h4>
                        <p className="opacity-70">Variáveis CSS com paleta completa da marca Garagem</p>
                    </Card>
                    <Card>
                        <h4 style={{ color: 'var(--garagem-vermelho)', marginBottom: '0.5rem' }}>🔤 Tipografia</h4>
                        <p className="opacity-70">Fontes Orbitron e Funnel Display com escala completa</p>
                    </Card>
                    <Card>
                        <h4 style={{ color: 'var(--garagem-vermelho)', marginBottom: '0.5rem' }}>📐 Layout</h4>
                        <p className="opacity-70">Classes utilitárias para grid, flexbox e espaçamento</p>
                    </Card>
                    <Card>
                        <h4 style={{ color: 'var(--garagem-vermelho)', marginBottom: '0.5rem' }}>🎯 Componentes</h4>
                        <p className="opacity-70">Botões, cards, inputs e mais componentes estilizados</p>
                    </Card>
                    <Card>
                        <h4 style={{ color: 'var(--garagem-vermelho)', marginBottom: '0.5rem' }}>🌗 Tema Escuro</h4>
                        <p className="opacity-70">Suporte automático para modo escuro</p>
                    </Card>
                    <Card>
                        <h4 style={{ color: 'var(--garagem-vermelho)', marginBottom: '0.5rem' }}>📱 Responsivo</h4>
                        <p className="opacity-70">Mobile-first com breakpoints otimizados</p>
                    </Card>
                </div>
            </section>

            {/* Exemplo de Uso */}
            <section className="secao">
                <h2 className="mb-2rem">💻 Exemplo Completo</h2>
                <Card className="card-escuro">
                    <pre style={{
                        color: 'var(--garagem-branco-ambiente)',
                        overflow: 'auto',
                        fontSize: '0.85rem',
                        lineHeight: '1.6'
                    }}>
                        {`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site com Garagem Theme</title>
    
    <!-- Importe o tema Garagem -->
    <link rel="stylesheet" href="${cdnUrl}">
</head>
<body>
    <div class="container">
        <h1>Bem-vindo!</h1>
        <p>Seu site já tem os estilos da marca Garagem.</p>
        
        <button class="botao">Clique Aqui</button>
        
        <div class="card">
            <h3>Card Automático</h3>
            <p>Este card já vem estilizado!</p>
        </div>
    </div>
</body>
</html>`}
                    </pre>
                </Card>
            </section>

            {/* Recursos Adicionais */}
            <section className="secao fundo-escuro" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--espacamento-xl)', textAlign: 'center' }}>
                <h2 className="mb-2rem" style={{ color: 'white' }}>📚 Próximos Passos</h2>
                <div className="grid grid-3" style={{ marginBottom: '2rem' }}>
                    <a href="/docs/colors" className="card" style={{ textDecoration: 'none' }}>
                        <h4 style={{ color: 'var(--garagem-vermelho)' }}> Cores</h4>
                        <p className="opacity-70">Explore a paleta completa</p>
                    </a>
                    <a href="/docs/typography" className="card" style={{ textDecoration: 'none' }}>
                        <h4 style={{ color: 'var(--garagem-vermelho)' }}>Tipografia</h4>
                        <p className="opacity-70">Sistema de fontes e tamanhos</p>
                    </a>
                    <a href="/docs/components" className="card" style={{ textDecoration: 'none' }}>
                        <h4 style={{ color: 'var(--garagem-vermelho)' }}>Componentes</h4>
                        <p className="opacity-70">Biblioteca de componentes</p>
                    </a>
                </div>
            </section>
        </div>
    );
}
