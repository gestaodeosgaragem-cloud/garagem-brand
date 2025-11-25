'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
// import './logos.css'; // Removed: using garagem-theme.css

export default function LogosPage() {
    const logoVariants = [
        {
            color: 'Gradiente',
            logos: [
                { name: 'Horizontal Completa', file: 'Gradiente - Horizontal Completa.svg', bg: 'light' },
                { name: 'Vertical Completa', file: 'Gradiente - Vertical Completa.svg', bg: 'light' },
                { name: 'Vertical Direita', file: 'Gradiente - Vertical Direnta.svg', bg: 'light' },
                { name: 'Vertical Esquerda', file: 'Gradiente - Vertical Esquerda.svg', bg: 'light' },
                { name: 'Símbolo', file: 'Gradiente - Símbolo.svg', bg: 'light' },
            ]
        },
        {
            color: 'Preto',
            logos: [
                { name: 'Horizontal Completa', file: 'Preto - Horizontal Completa.svg', bg: 'light' },
                { name: 'Vertical Completa', file: 'Preto - Vertical Completa.svg', bg: 'light' },
                { name: 'Vertical Direita', file: 'Preto - Vertical Direita.svg', bg: 'light' },
                { name: 'Vertical Esquerda', file: 'Preto - Vertical Esquerda.svg', bg: 'light' },
                { name: 'Símbolo', file: 'Preto - Símbolo.svg', bg: 'light' },
            ]
        },
        {
            color: 'Branco',
            logos: [
                { name: 'Horizontal Completa', file: 'Branco - Horizontal Completa.svg', bg: 'dark' },
                { name: 'Vertical Completa', file: 'Branco - Vertical Completa.svg', bg: 'dark' },
                { name: 'Vertical Direita', file: 'Branco - Vertical Direita.svg', bg: 'dark' },
                { name: 'Vertical Esquerda', file: 'Branco - Vertical Esquerda.svg', bg: 'dark' },
                { name: 'Símbolo', file: 'Branco - Símbolo.svg', bg: 'dark' },
            ]
        },
    ];

    return (
        <div className="container pt-nav">
            {/* Hero */}
            <div className="centralizado mb-2rem">
                <h1 className="texto-gradiente mb-1rem" style={{ fontSize: '3rem' }}>Logos & Identidade</h1>
                <p className="opacity-70" style={{ fontSize: '1.25rem' }}>
                    Variações oficiais do logo Garagem - 15 versões organizadas por cor e formato.
                </p>
            </div>

            {/* Logo Variations by Color */}
            {logoVariants.map((variant) => (
                <section key={variant.color} className="secao">
                    <h2 style={{ marginBottom: '1rem' }}>Logo {variant.color}</h2>
                    <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
                        {variant.color === 'Gradiente' && 'Versão principal com gradiente de cores da marca para uso geral.'}
                        {variant.color === 'Preto' && 'Versão monocromática preta para fundos claros e aplicações formais.'}
                        {variant.color === 'Branco' && 'Versão branca para fundos escuros e aplicações contrastantes.'}
                    </p>

                    <div className="grid grid-3">
                        {variant.logos.map((logo) => (
                            <Card key={logo.file} className="card-escuro" hover style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{
                                    background: logo.bg === 'dark' ? '#333' : 'white',
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-md)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '200px',
                                    marginBottom: '1rem',
                                    border: logo.bg === 'light' ? '1px solid #ddd' : 'none'
                                }}>
                                    <img
                                        src={`/assets/logos/${logo.file}`}
                                        alt={`${variant.color} - ${logo.name}`}
                                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                                    />
                                </div>
                                <div style={{ marginTop: 'auto' }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{logo.name}</h3>
                                    <a
                                        href={`/assets/logos/${logo.file}`}
                                        download
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button variant="outline" size="small" style={{ width: '100%', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                                            Download SVG
                                        </Button>
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            ))}

            {/* Usage Guidelines */}
            <section className="secao">
                <h2 style={{ marginBottom: '2rem' }}>Diretrizes de Uso</h2>

                <div className="grid grid-2">
                    <Card className="card-escuro" style={{ borderLeft: '4px solid #4CAF50' }}>
                        <h3 style={{ color: '#4CAF50', marginBottom: '1rem' }}>✅ Uso Correto</h3>
                        <ul style={{ paddingLeft: '1.5rem', opacity: 0.9 }}>
                            <li style={{ marginBottom: '0.5rem' }}>Manter espaçamento mínimo ao redor do logo</li>
                            <li style={{ marginBottom: '0.5rem' }}>Usar versão branca em fundos escuros</li>
                            <li style={{ marginBottom: '0.5rem' }}>Usar versão preta em fundos muito claros</li>
                            <li style={{ marginBottom: '0.5rem' }}>Usar versão gradiente como logo principal</li>
                            <li style={{ marginBottom: '0.5rem' }}>Manter proporções originais</li>
                        </ul>
                    </Card>

                    <Card className="card-escuro" style={{ borderLeft: '4px solid #F44336' }}>
                        <h3 style={{ color: '#F44336', marginBottom: '1rem' }}>❌ Evitar</h3>
                        <ul style={{ paddingLeft: '1.5rem', opacity: 0.9 }}>
                            <li style={{ marginBottom: '0.5rem' }}>Alterar as cores dos logos</li>
                            <li style={{ marginBottom: '0.5rem' }}>Distorcer ou esticar o logo</li>
                            <li style={{ marginBottom: '0.5rem' }}>Adicionar efeitos ou sombras</li>
                            <li style={{ marginBottom: '0.5rem' }}>Rotacionar em ângulos não-padrão</li>
                            <li style={{ marginBottom: '0.5rem' }}>Usar em tamanhos ilegíveis</li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* Download All */}
            <section className="secao">
                <div className="banner banner-destaque">
                    <h2 style={{ marginBottom: '1rem' }}>
                        Download Completo
                    </h2>
                    <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                        Baixe todas as 15 variações do logo em um pacote único, incluindo
                        versões em SVG e PNG de alta resolução.
                    </p>
                    <Button variant="white" size="large" href="/docs/downloads">
                        Ir para Downloads
                    </Button>
                </div>
            </section>
        </div>
    );
}
