'use client';

import Card from '@/components/Card';
// import './typography.css'; // Removed: using garagem-theme.css

export default function TypographyPage() {
    const typeScale = [
        { name: '5XL', var: '--texto-5xl', size: '3rem', usage: 'Hero headlines' },
        { name: '4XL', var: '--texto-4xl', size: '2.5rem', usage: 'Page titles' },
        { name: '3XL', var: '--texto-3xl', size: '2rem', usage: 'Section headings' },
        { name: '2XL', var: '--texto-2xl', size: '1.5rem', usage: 'Card headings' },
        { name: 'XL', var: '--texto-xl', size: '1.25rem', usage: 'Subtitles' },
        { name: 'LG', var: '--texto-lg', size: '1.125rem', usage: 'Lead text' },
        { name: 'Base', var: '--texto-base', size: '1rem', usage: 'Body text' },
        { name: 'SM', var: '--texto-sm', size: '0.875rem', usage: 'Small text' },
        { name: 'XS', var: '--texto-xs', size: '0.75rem', usage: 'Captions' },
    ];

    const fontWeights = [
        { name: 'Light', weight: '300', usage: 'Decorative text' },
        { name: 'Regular', weight: '400', usage: 'Body text' },
        { name: 'Medium', weight: '500', usage: 'Emphasis' },
        { name: 'Semibold', weight: '600', usage: 'Subheadings' },
        { name: 'Bold', weight: '700', usage: 'Headings' },
        { name: 'Black', weight: '900', usage: 'Hero text' },
    ];

    return (
        <div className="container pt-nav" style={{ paddingTop: 'var(--espacamento-2xl)' }}>
            {/* Hero */}
            <div className="centralizado" style={{ marginBottom: 'var(--espacamento-2xl)' }}>
                <h1 className="texto-gradiente" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Tipografia</h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto' }}>
                    Sistema tipográfico completo com escala, pesos e diretrizes de uso
                    para criar hierarquia visual consistente.
                </p>
            </div>

            {/* Font Families */}
            <section className="secao">
                <h2 style={{ marginBottom: '2rem' }}>Famílias Tipográficas</h2>
                <div className="grid grid-3">
                    <Card className="card-escuro">
                        <div style={{ fontFamily: 'var(--fonte-headings)', fontSize: '3rem', marginBottom: '1rem' }}>
                            Orbitron
                        </div>
                        <h3>Headings Font</h3>
                        <code style={{ display: 'block', marginBottom: '1rem', opacity: 0.7 }}>var(--fonte-headings)</code>
                        <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1rem' }}>
                            Usado para headings, títulos e elementos que precisam de
                            destaque visual. Possui geometria moderna e tecnológica.
                        </p>
                        <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                            <span>Google Fonts</span> • <span>Weights: 400-900</span>
                        </div>
                    </Card>

                    <Card className="card-escuro">
                        <div style={{ fontFamily: 'var(--fonte-corpo)', fontSize: '3rem', marginBottom: '1rem' }}>
                            Funnel Display
                        </div>
                        <h3>Body Font</h3>
                        <code style={{ display: 'block', marginBottom: '1rem', opacity: 0.7 }}>var(--fonte-corpo)</code>
                        <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1rem' }}>
                            Usado para corpo de texto, parágrafos e elementos de
                            interface. Otimizada para legibilidade.
                        </p>
                        <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                            <span>CDN Fonts</span> • <span>Weights: 100-900</span>
                        </div>
                    </Card>

                    <Card className="card-escuro">
                        <div style={{ fontFamily: 'monospace', fontSize: '3rem', marginBottom: '1rem' }}>
                            Mono
                        </div>
                        <h3>Monospace Font</h3>
                        <code style={{ display: 'block', marginBottom: '1rem', opacity: 0.7 }}>monospace</code>
                        <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1rem' }}>
                            Usado para código, valores técnicos e elementos que requerem
                            largura fixa.
                        </p>
                        <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                            <span>System</span> • <span>Monospace stack</span>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Type Scale */}
            <section className="secao fundo-escuro" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--espacamento-xl)' }}>
                <h2 style={{ marginBottom: '1rem' }}>Escala Tipográfica</h2>
                <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
                    Sistema de tamanhos harmonioso baseado em proporções consistentes.
                </p>

                <div className="grid grid-1 gap-md">
                    {typeScale.map((type) => (
                        <div key={type.name} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem',
                            padding: '1rem',
                            borderBottom: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <div style={{ width: '100px', opacity: 0.5 }}>{type.name}</div>
                            <div style={{ flex: 1 }}>
                                <span style={{ fontSize: `var(${type.var})`, display: 'block' }}>
                                    The quick brown fox
                                </span>
                            </div>
                            <div style={{ width: '200px', textAlign: 'right' }}>
                                <code style={{ display: 'block', marginBottom: '0.25rem' }}>{type.var}</code>
                                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{type.size}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Font Weights */}
            <section className="secao">
                <h2 style={{ marginBottom: '2rem' }}>Pesos Tipográficos</h2>
                <div className="grid grid-3">
                    {fontWeights.map((weight) => (
                        <Card key={weight.name} className="card-escuro">
                            <div style={{ fontSize: '2rem', fontWeight: weight.weight, marginBottom: '1rem' }}>
                                Aa
                            </div>
                            <h4>{weight.name}</h4>
                            <div style={{ marginBottom: '1rem' }}>
                                <code style={{ opacity: 0.7 }}>font-weight: {weight.weight}</code>
                            </div>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{weight.usage}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Guidelines */}
            <section className="secao">
                <h2 style={{ marginBottom: '2rem' }}>Diretrizes de Uso</h2>
                <div className="grid grid-2">
                    <Card className="card-escuro" style={{ borderLeft: '4px solid #4CAF50' }}>
                        <h3 style={{ color: '#4CAF50', marginBottom: '1rem' }}>✅ Boas Práticas</h3>
                        <ul style={{ paddingLeft: '1.5rem', opacity: 0.9 }}>
                            <li style={{ marginBottom: '0.5rem' }}>Manter hierarquia consistente (H1 → H2 → H3)</li>
                            <li style={{ marginBottom: '0.5rem' }}>Usar no máximo 2-3 tamanhos em um componente</li>
                            <li style={{ marginBottom: '0.5rem' }}>Funnel Display para corpo de texto (melhor legibilidade)</li>
                            <li style={{ marginBottom: '0.5rem' }}>Orbitron para headings (mais impacto visual)</li>
                            <li style={{ marginBottom: '0.5rem' }}>Line-height adequado para leitura confortável</li>
                        </ul>
                    </Card>

                    <Card className="card-escuro" style={{ borderLeft: '4px solid #F44336' }}>
                        <h3 style={{ color: '#F44336', marginBottom: '1rem' }}>❌ Evitar</h3>
                        <ul style={{ paddingLeft: '1.5rem', opacity: 0.9 }}>
                            <li style={{ marginBottom: '0.5rem' }}>Misturar muitos tamanhos e pesos diferentes</li>
                            <li style={{ marginBottom: '0.5rem' }}>Textos muito pequenos (menor que 12px)</li>
                            <li style={{ marginBottom: '0.5rem' }}>Parágrafos com line-height muito apertado</li>
                            <li style={{ marginBottom: '0.5rem' }}>Usar monospace fora de contexto técnico</li>
                            <li style={{ marginBottom: '0.5rem' }}>ALL CAPS em textos longos</li>
                        </ul>
                    </Card>
                </div>
            </section>
        </div>
    );
}
