import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="rodape">
            <div className="container">
                <div className="rodape-grid">
                    <div className="rodape-coluna">
                        <h4>Garagem</h4>
                        <p className="opacity-70 mb-1rem">
                            Design System oficial para construção de interfaces digitais da marca.
                        </p>
                    </div>

                    <div className="rodape-coluna">
                        <h4>Recursos</h4>
                        <ul className="rodape-links">
                            <li><Link href="/docs/getting-started">Começando</Link></li>
                            <li><Link href="/docs/colors">Cores</Link></li>
                            <li><Link href="/docs/typography">Tipografia</Link></li>
                            <li><Link href="/docs/components">Componentes</Link></li>
                        </ul>
                    </div>

                    <div className="rodape-coluna">
                        <h4>Links Úteis</h4>
                        <ul className="rodape-links">
                            <li><a href="https://github.com/gestaodeosgaragem-cloud/garagem-brand" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="/garagem-theme.css" target="_blank">Download CSS</a></li>
                            <li><a href="/demo.html" target="_blank">Demo HTML</a></li>
                        </ul>
                    </div>
                </div>

                <div className="rodape-copyright">
                    <p>&copy; {new Date().getFullYear()} Garagem Design System. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
