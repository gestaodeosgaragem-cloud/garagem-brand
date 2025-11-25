'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
// import './colors.css'; // Removed: using garagem-theme.css

export default function ColorsPage() {
    const colors = [
        {
            name: 'Vermelho Garagem',
            hex: '#D93030',
            var: '--garagem-vermelho',
            usage: 'Cor principal da marca. Use em CTAs, destaques e elementos interativos.',
        },
        {
            name: 'Magenta Garagem',
            hex: '#EA348B',
            var: '--garagem-magenta',
            usage: 'Cor secundária. Use em gradientes e elementos de apoio.',
        },
        {
            name: 'Branco Ambiente',
            hex: '#F8F1FE',
            var: '--garagem-branco-ambiente',
            usage: 'Fundo claro. Use como background em temas claros.',
        },
        {
            name: 'Preto Técnico',
            hex: '#212121',
            var: '--garagem-preto-tecnico',
            usage: 'Fundo escuro. Use como background em temas escuros e textos.',
        },
    ];

    const gradients = [
        {
            name: 'Gradiente Institucional',
            css: 'linear-gradient(45deg, #EA348B 0%, #D93030 100%)',
            var: '--garagem-gradiente',
            usage: 'Gradiente oficial da marca. Use em backgrounds, botões e elementos de destaque.',
        },
    ];

    return (
        <div className="container pt-nav">
            <div className="centralizado mb-2rem">
                <h1 className="texto-gradiente mb-1rem" style={{ fontSize: '3rem' }}>Paleta de Cores</h1>
                <p className="opacity-70" style={{ fontSize: '1.25rem' }}>
                    Cores oficiais da identidade visual Garagem
                </p>
            </div>

            {/* Cores Principais */}
            <section className="secao">
                <h2 className="mb-2rem">Cores da Marca</h2>
                <div className="grid grid-2">
                    {colors.map((color) => (
                        <Card key={color.hex} className="card-escuro">
                            <div
                                style={{
                                    background: color.hex,
                                    height: '120px',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: '0.5rem'
                                }}
                            ></div>
                            <div>
                                <h3 style={{ marginBottom: '0.5rem' }}>{color.name}</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1rem' }}>{color.usage}</p>

                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem' }}>
                                    <span style={{ opacity: 0.6, fontSize: '0.8rem', display: 'block' }}>HEX</span>
                                    <code style={{ fontFamily: 'monospace' }}>{color.hex}</code>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
                                    <span style={{ opacity: 0.6, fontSize: '0.8rem', display: 'block' }}>CSS Variable</span>
                                    <code style={{ fontFamily: 'monospace' }}>{color.var}</code>
                                </div>
                            </div>
                            <Button variant="outline" size="small" onClick={() => navigator.clipboard.writeText(color.hex)}>
                                Copiar HEX
                            </Button>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Gradientes */}
            <section className="secao">
                <h2 style={{ marginBottom: '2rem' }}>Gradientes</h2>
                <div className="grid grid-1">
                    {gradients.map((gradient) => (
                        <Card key={gradient.name} className="card-escuro" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div
                                style={{
                                    background: gradient.css,
                                    height: '150px',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: '0.5rem'
                                }}
                            ></div>
                            <div>
                                <h3 style={{ marginBottom: '0.5rem' }}>{gradient.name}</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1rem' }}>{gradient.usage}</p>

                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem' }}>
                                    <span style={{ opacity: 0.6, fontSize: '0.8rem', display: 'block' }}>CSS</span>
                                    <code style={{ fontFamily: 'monospace', wordBreak: 'break-all' }}>{gradient.css}</code>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
                                    <span style={{ opacity: 0.6, fontSize: '0.8rem', display: 'block' }}>CSS Variable</span>
                                    <code style={{ fontFamily: 'monospace' }}>{gradient.var}</code>
                                </div>
                            </div>
                            <Button variant="outline" size="small" onClick={() => navigator.clipboard.writeText(gradient.css)}>
                                Copiar CSS
                            </Button>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Exemplos de Uso */}
            <section className="secao">
                <h2 style={{ marginBottom: '2rem' }}>Exemplos de Uso</h2>
                <div className="grid grid-3">
                    <Card className="card-escuro">
                        <h3 style={{ marginBottom: '1rem' }}>Texto com Gradiente</h3>
                        <h1 className="texto-gradiente" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            GARAGEM
                        </h1>
                        <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-sm)', overflowX: 'auto', fontSize: '0.8rem' }}>
                            {`.texto-gradiente {
  background: var(--garagem-gradiente);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`}
                        </pre>
                    </Card>

                    <Card className="card-escuro">
                        <h3 style={{ marginBottom: '1rem' }}>Fundo com Gradiente</h3>
                        <div
                            style={{
                                background: 'var(--garagem-gradiente)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-md)',
                                color: 'white',
                                textAlign: 'center',
                                marginBottom: '1rem'
                            }}
                        >
                            <h4 style={{ color: 'white', margin: 0 }}>Conteúdo</h4>
                        </div>
                        <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-sm)', overflowX: 'auto', fontSize: '0.8rem' }}>
                            {`background: var(--garagem-gradiente);
color: var(--garagem-branco-ambiente);`}
                        </pre>
                    </Card>

                    <Card className="card-escuro">
                        <h3 style={{ marginBottom: '1rem' }}>Contraste</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div style={{ background: '#D93030', color: '#F8F1FE', padding: '0.5rem', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                                ✅ Vermelho + Branco
                            </div>
                            <div style={{ background: '#212121', color: '#F8F1FE', padding: '0.5rem', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                                ✅ Preto + Branco
                            </div>
                            <div style={{ background: '#F8F1FE', color: '#212121', padding: '0.5rem', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                                ✅ Branco + Preto
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Download */}
            <section className="secao">
                <div className="banner banner-destaque">
                    <h2 style={{ marginBottom: '1rem' }}>
                        Quer usar as cores no seu projeto?
                    </h2>
                    <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                        Baixe o arquivo CSS com todas as variáveis de cores ou veja como usar o tema completo
                    </p>
                    <div className="flex gap-md justify-center flex-wrap">
                        <Button variant="white" size="large" href="/docs/theme">
                            Ver Garagem Theme
                        </Button>
                        <Button variant="outline" size="large" href="/docs/downloads" className="botao-contrario">
                            Baixar Assets
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
