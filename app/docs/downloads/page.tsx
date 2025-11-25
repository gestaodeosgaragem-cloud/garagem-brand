'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
// import './downloads.css'; // Removed: using garagem-theme.css

export default function DownloadsPage() {
    const packages = [
        {
            name: 'Logos Completo',
            description: 'Todos os logos em SVG, PNG (alta resolução) e versões para impressão',
            size: '2.4 MB',
            items: ['SVG vetoriais', 'PNG @1x, @2x, @3x', 'Versões coloridas e monocromáticas'],
            file: '/downloads/garagem-logos.zip',
        },
        {
            name: 'Ícones',
            description: 'Biblioteca completa de ícones em múltiplos formatos',
            size: '1.8 MB',
            items: ['SVG otimizados', 'Icon font (TTF, WOFF2)', 'React components'],
            file: '/downloads/garagem-icons.zip',
        },
        {
            name: 'Fontes',
            description: 'Fontes da marca para uso local',
            size: '850 KB',
            items: ['Inter (WOFF2)', 'Outfit (WOFF2)', 'Licenças incluídas'],
            file: '/downloads/garagem-fonts.zip',
        },
        {
            name: 'Design System',
            description: 'CSS completo com variáveis e componentes',
            size: '45 KB',
            items: ['design-system.css', 'globals.css', 'Componentes CSS'],
            file: '/downloads/garagem-design-system.zip',
        },
        {
            name: 'Kit de Impressão',
            description: 'Assets otimizados para materiais impressos',
            size: '5.2 MB',
            items: ['PDF alta resolução', 'CMYK versions', 'Guias de impressão'],
            file: '/downloads/garagem-print-kit.zip',
        },
        {
            name: 'Pacote Completo',
            description: 'Todos os assets da marca em um único download',
            size: '12 MB',
            items: ['Todos os itens acima', 'Documentação PDF', 'Exemplos de uso'],
            file: '/downloads/garagem-complete.zip',
            featured: true,
        },
    ];

    return (
        <div className="container pt-nav">
            {/* Hero */}
            <div className="centralizado mb-2rem">
                <h1 className="texto-gradiente mb-1rem" style={{ fontSize: '3rem' }}>Downloads</h1>
                <p className="opacity-70" style={{ fontSize: '1.25rem' }}>
                    Baixe todos os assets da marca Garagem organizados em pacotes prontos
                    para uso.
                </p>
            </div>

            {/* Featured Download */}
            <section className="secao">
                {packages
                    .filter((pkg) => pkg.featured)
                    .map((pkg) => (
                        <div key={pkg.name} className="banner banner-destaque">
                            <div className="grid grid-2 gap-xl items-center" style={{ textAlign: 'left' }}>
                                <div>
                                    <div style={{
                                        display: 'inline-block',
                                        background: 'white',
                                        color: 'var(--garagem-vermelho)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        marginBottom: '1rem'
                                    }}>
                                        Recomendado
                                    </div>
                                    <h2 style={{ marginBottom: '1rem', color: 'white' }}>{pkg.name}</h2>
                                    <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', opacity: 0.9, color: 'white' }}>{pkg.description}</p>
                                    <div style={{ marginBottom: '2rem', opacity: 0.8, color: 'white' }}>
                                        📦 {pkg.size}
                                    </div>
                                    <Button variant="white" size="large" href={pkg.file}>
                                        Download Completo
                                    </Button>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                                    <h3 style={{ marginBottom: '1rem', color: 'white' }}>Inclui:</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, color: 'white' }}>
                                        {pkg.items.map((item, i) => (
                                            <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <span style={{ background: 'white', color: 'var(--garagem-vermelho)', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>✓</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
            </section>

            {/* Individual Packages */}
            <section className="secao">
                <h2 style={{ marginBottom: '1rem' }}>Pacotes Individuais</h2>
                <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
                    Baixe apenas o que você precisa com nossos pacotes específicos.
                </p>

                <div className="grid grid-3">
                    {packages
                        .filter((pkg) => !pkg.featured)
                        .map((pkg) => (
                            <Card key={pkg.name} className="card-escuro" hover style={{ display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ marginBottom: '1rem' }}>{pkg.name}</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1rem', flex: 1 }}>{pkg.description}</p>
                                <div style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '1rem' }}>
                                    📦 {pkg.size}
                                </div>
                                <ul style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1.5rem', paddingLeft: '1.2rem' }}>
                                    {pkg.items.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '0.25rem' }}>{item}</li>
                                    ))}
                                </ul>
                                <Button variant="outline" href={pkg.file} style={{ width: '100%', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                                    Download
                                </Button>
                            </Card>
                        ))}
                </div>
            </section>

            {/* License Information */}
            <section className="secao">
                <h2 style={{ marginBottom: '2rem' }}>Licença de Uso</h2>
                <Card className="card-escuro">
                    <div className="grid grid-2 gap-xl">
                        <div style={{ padding: '1rem' }}>
                            <h3 style={{ color: '#4CAF50', marginBottom: '1rem' }}>✅ Permitido</h3>
                            <ul style={{ paddingLeft: '1.5rem', opacity: 0.9 }}>
                                <li style={{ marginBottom: '0.5rem' }}>Uso em projetos comerciais e pessoais da marca Garagem</li>
                                <li style={{ marginBottom: '0.5rem' }}>Modificação de cores e tamanhos conforme diretrizes</li>
                                <li style={{ marginBottom: '0.5rem' }}>Uso em materiais digitais e impressos</li>
                                <li style={{ marginBottom: '0.5rem' }}>Compartilhamento interno entre membros da equipe</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ color: '#F44336', marginBottom: '1rem' }}>❌ Proibido</h3>
                            <ul style={{ paddingLeft: '1.5rem', opacity: 0.9 }}>
                                <li style={{ marginBottom: '0.5rem' }}>Redistribuição ou venda dos assets</li>
                                <li style={{ marginBottom: '0.5rem' }}>Uso em projetos não relacionados à marca Garagem</li>
                                <li style={{ marginBottom: '0.5rem' }}>Modificação substancial da identidade visual</li>
                                <li style={{ marginBottom: '0.5rem' }}>Remoção de créditos ou informações de licença</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
                        Para dúvidas sobre licenciamento ou usos especiais, entre em contato com a equipe responsável pela marca.
                    </div>
                </Card>
            </section>

            {/* Help Section */}
            <section className="secao">
                <div className="banner" style={{ background: 'var(--garagem-preto-tecnico)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h2 style={{ marginBottom: '1rem', color: 'white' }}>
                        Precisa de Ajuda?
                    </h2>
                    <p style={{ marginBottom: '2rem', opacity: 0.8, color: 'white' }}>
                        Consulte nosso guia de início rápido ou entre em contato com o
                        suporte.
                    </p>
                    <div className="flex gap-md justify-center flex-wrap">
                        <Button variant="white" size="large" href="/docs/getting-started">
                            Guia de Início
                        </Button>
                        <Button variant="outline" size="large" className="botao-outline" style={{ borderColor: 'white', color: 'white' }} href="mailto:suporte@garagem.com">
                            Contato
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
