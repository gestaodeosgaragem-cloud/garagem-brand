import Button from '@/components/Button';
import Card from '@/components/Card';
import Link from 'next/link';
// import './page.css'; // Removed: using garagem-theme.css

export default function Home() {
  const features = [
    {
      title: 'Design System',
      description: 'CSS variables completas com cores, tipografia, spacing e mais',
      href: '/docs/colors',
      linkText: 'Explorar cores',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      )
    },
    {
      title: 'Componentes',
      description: 'Biblioteca de componentes React reutilizáveis e estilizados',
      href: '/docs/components',
      linkText: 'Ver componentes',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    },
    {
      title: 'Logos & Ícones',
      description: 'Variações de logos e ícones em múltiplos formatos',
      href: '/docs/logos',
      linkText: 'Ver galeria',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      )
    },
    {
      title: 'Tipografia',
      description: 'Fontes, pesos e hierarquia tipográfica documentada',
      href: '/docs/typography',
      linkText: 'Guia de tipografia',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="4 7 4 4 20 4 20 7" />
          <line x1="9" y1="20" x2="15" y2="20" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      )
    },
    {
      title: 'Downloads',
      description: 'Assets para impressão e uso digital em pacotes organizados',
      href: '/docs/downloads',
      linkText: 'Central de downloads',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      )
    },
    {
      title: 'Quick Start',
      description: 'Comece rapidamente com exemplos e melhores práticas',
      href: '/docs/getting-started',
      linkText: 'Guia de início',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      )
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero hero-full">
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'var(--garagem-gradiente)',
          opacity: 0.9,
          zIndex: 0
        }}></div>
        <div className="hero-conteudo">
          <h1 className="hero-titulo text-white">
            Garagem
          </h1>
          <p className="hero-subtitulo text-white">
            Repositório de Identidade Visual
          </p>
          <p className="text-white mb-2rem" style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Design system completo com componentes, cores, tipografia e assets prontos para uso.
            Tudo que você precisa para desenvolver com a identidade Garagem.
          </p>

          <div className="flex justify-center gap-md flex-wrap">
            <Button href="/docs/getting-started" variant="white" size="large">
              Começar Agora
            </Button>
            <Button href="/docs/components" variant="outline" size="large" className="botao-contrario">
              Ver Componentes
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="secao fundo-escuro">
        <div className="container">
          <div className="centralizado mb-3rem">
            <h2>Recursos do Sistema</h2>
            <p className="opacity-70" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Explore todos os recursos disponíveis no nosso design system para criar interfaces consistentes.
            </p>
          </div>

          <div className="grid grid-3">
            {features.map((feature, index) => (
              <Link href={feature.href} key={index} style={{ textDecoration: 'none' }}>
                <Card hover className="card-escuro">
                  <div style={{ color: 'var(--garagem-vermelho)', marginBottom: '1rem' }}>
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <span style={{
                    color: 'var(--garagem-vermelho)',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    marginTop: 'auto',
                    display: 'inline-block'
                  }}>
                    {feature.linkText} →
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette Preview */}
      <section className="secao">
        <div className="container">
          <div className="centralizado mb-3rem">
            <h2>Paleta Oficial</h2>
            <p>Cores primárias e secundárias da marca Garagem.</p>
          </div>

          <div className="grid grid-4">
            <div className="card">
              <div style={{ height: '100px', background: 'var(--garagem-vermelho)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}></div>
              <h4>Vermelho</h4>
              <p style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>#D93030</p>
            </div>
            <div className="card" style={{ padding: '1rem' }}>
              <div style={{ height: '100px', background: 'var(--garagem-magenta)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}></div>
              <h4>Magenta</h4>
              <p style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>#EA348B</p>
            </div>
            <div className="card" style={{ padding: '1rem' }}>
              <div style={{ height: '100px', background: 'var(--garagem-preto-tecnico)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}></div>
              <h4>Preto Técnico</h4>
              <p style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>#212121</p>
            </div>
            <div className="card" style={{ padding: '1rem' }}>
              <div style={{ height: '100px', background: 'var(--garagem-gradiente)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}></div>
              <h4>Gradiente</h4>
              <p style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>Linear 45deg</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="secao">
        <div className="container">
          <div className="banner banner-destaque">
            <h2>Pronto para começar?</h2>
            <p className="mb-2rem">
              Baixe os assets ou importe o tema CSS diretamente no seu projeto.
            </p>
            <div className="flex justify-center gap-md flex-wrap">
              <Button href="/docs/downloads" variant="white">
                Baixar Assets
              </Button>
              <Button href="/docs/theme" variant="outline" className="botao-contrario">
                Usar Tema CDN
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
