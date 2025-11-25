'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import Link from 'next/link';
// import './getting-started.css'; // Removed: using garagem-theme.css

export default function GettingStartedPage() {
    return (
        <div className="container pt-nav">
            {/* Hero */}
            <div className="centralizado mb-2rem">
                <h1 className="texto-gradiente mb-1rem" style={{ fontSize: '3rem' }}>Começar Agora</h1>
                <p className="opacity-70" style={{ fontSize: '1.25rem' }}>
                    Guia rápido para começar a usar a identidade visual Garagem em seus
                    projetos.
                </p>
            </div>

            {/* Quick Start */}
            <section className="secao">
                <h2 style={{ marginBottom: '1rem' }}>Início Rápido</h2>
                <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
                    Siga estes passos para integrar o design system Garagem no seu projeto.
                </p>

                <div className="grid grid-3 gap-lg">
                    <Card className="card-escuro" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: 'var(--garagem-vermelho)',
                            marginBottom: '1rem',
                            lineHeight: 1
                        }}>1</div>
                        <h3 style={{ marginBottom: '1rem' }}>Download dos Assets</h3>
                        <p style={{ marginBottom: '1.5rem', flex: 1, opacity: 0.8 }}>
                            Baixe o pacote completo ou apenas os componentes necessários
                            para seu projeto.
                        </p>
                        <Button variant="outline" href="/docs/downloads" size="small" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                            Ir para Downloads
                        </Button>
                    </Card>

                    <Card className="card-escuro" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: 'var(--garagem-vermelho)',
                            marginBottom: '1rem',
                            lineHeight: 1
                        }}>2</div>
                        <h3 style={{ marginBottom: '1rem' }}>Importar o Design System</h3>
                        <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
                            Adicione o CSS do design system ao seu projeto:
                        </p>
                        <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-sm)', overflowX: 'auto', fontSize: '0.8rem', marginTop: 'auto' }}>
                            <code>{`<link rel="stylesheet" 
href="garagem-theme.css">`}</code>
                        </pre>
                    </Card>

                    <Card className="card-escuro" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: 'var(--garagem-vermelho)',
                            marginBottom: '1rem',
                            lineHeight: 1
                        }}>3</div>
                        <h3 style={{ marginBottom: '1rem' }}>Usar Componentes</h3>
                        <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
                            Comece a usar os componentes e variáveis CSS em seu código:
                        </p>
                        <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-sm)', overflowX: 'auto', fontSize: '0.8rem', marginTop: 'auto' }}>
                            <code>{`<button class="botao">
  Clique aqui
</button>`}</code>
                        </pre>
                    </Card>
                </div>
            </section>

            {/* Installation */}
            <section className="secao fundo-escuro" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--espacamento-xl)' }}>
                <h2 style={{ marginBottom: '2rem' }}>Instalação no Projeto</h2>

                <div className="grid grid-2 gap-xl">
                    <Card className="card-escuro" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>📦 CDN (Recomendado)</h3>
                        <p style={{ marginBottom: '1rem', opacity: 0.8 }}>Adicione no &lt;head&gt; do seu HTML:</p>
                        <pre style={{ background: '#111', padding: '1rem', borderRadius: 'var(--radius-sm)', overflowX: 'auto', color: '#e0e0e0' }}>
                            <code>{`<link rel="stylesheet" href="https://garagem-brand.vercel.app/garagem-theme.css">`}</code>
                        </pre>
                    </Card>

                    <Card className="card-escuro" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>📂 Manual</h3>
                        <p style={{ marginBottom: '1rem', opacity: 0.8 }}>Copie o arquivo CSS para seu projeto:</p>
                        <ol style={{ paddingLeft: '1.5rem', opacity: 0.8 }}>
                            <li style={{ marginBottom: '0.5rem' }}>Baixe o <code>garagem-theme.css</code></li>
                            <li style={{ marginBottom: '0.5rem' }}>Coloque na pasta <code>public</code> ou <code>assets</code></li>
                            <li style={{ marginBottom: '0.5rem' }}>Importe no seu HTML ou arquivo CSS principal</li>
                        </ol>
                    </Card>
                </div>
            </section>

            {/* CSS Variables */}
            <section className="secao">
                <h2 style={{ marginBottom: '1rem' }}>Usando CSS Variables</h2>
                <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
                    O design system usa CSS custom properties para máxima flexibilidade.
                </p>

                <Card className="card-escuro">
                    <h3 style={{ marginBottom: '1.5rem' }}>Exemplos de Uso</h3>
                    <div className="grid grid-2 gap-lg">
                        <div>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--garagem-vermelho)' }}>Cores</h4>
                            <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-sm)', overflowX: 'auto', fontSize: '0.9rem' }}>
                                <code>{`.my-element {
  color: var(--garagem-vermelho);
  background: var(--garagem-branco-ambiente);
}`}</code>
                            </pre>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--garagem-vermelho)' }}>Tipografia</h4>
                            <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-sm)', overflowX: 'auto', fontSize: '0.9rem' }}>
                                <code>{`.title {
  font-family: var(--fonte-headings);
  font-size: var(--texto-4xl);
  font-weight: 700;
}`}</code>
                            </pre>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--garagem-vermelho)' }}>Espaçamento</h4>
                            <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-sm)', overflowX: 'auto', fontSize: '0.9rem' }}>
                                <code>{`.container {
  padding: var(--espacamento-lg);
  gap: var(--espacamento-md);
}`}</code>
                            </pre>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--garagem-vermelho)' }}>Bordas</h4>
                            <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-sm)', overflowX: 'auto', fontSize: '0.9rem' }}>
                                <code>{`.card {
  border-radius: var(--radius-lg);
  box-shadow: var(--sombra-md);
}`}</code>
                            </pre>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Resources */}
            <section className="secao">
                <div className="banner banner-destaque">
                    <h2 style={{ marginBottom: '2rem', color: 'white' }}>
                        Recursos Úteis
                    </h2>

                    <div className="grid grid-4 gap-md">
                        {[
                            { icon: '🎨', title: 'Guia de Cores', desc: 'Explore a paleta completa.', link: '/docs/colors' },
                            { icon: '📝', title: 'Tipografia', desc: 'Entenda a escala tipográfica.', link: '/docs/typography' },
                            { icon: '🧩', title: 'Componentes', desc: 'Biblioteca de componentes.', link: '/docs/components' },
                            { icon: '⬇️', title: 'Downloads', desc: 'Baixe logos e assets.', link: '/docs/downloads' },
                        ].map((resource) => (
                            <Link key={resource.title} href={resource.link} style={{ textDecoration: 'none' }}>
                                <Card className="card-escuro" hover style={{ height: '100%', background: 'rgba(255,255,255,0.1)', border: 'none' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{resource.icon}</div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{resource.title}</h3>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{resource.desc}</p>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
