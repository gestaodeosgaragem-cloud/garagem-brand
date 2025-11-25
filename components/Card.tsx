// import './card.css'; // Removed: using garagem-theme.css

interface CardProps {
    children: React.ReactNode;
    variant?: 'default' | 'gradient' | 'dark' | 'glass' | 'outlined';
    hover?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

interface CardSubComponentProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, variant = 'default', hover = false, className = '', style }: CardProps) {
    let themeClass = 'card';

    switch (variant) {
        case 'gradient':
            themeClass += ' card-gradiente';
            break;
        case 'dark':
            themeClass += ' card-escuro';
            break;
        case 'outlined':
            // Theme doesn't have explicit outlined card, using default with border override if needed
            // or we could add .card-outline to theme later. For now, default card has border.
            break;
    }

    // Theme .card already has hover effect by default. 
    // If hover=false is passed, we might want to disable it, but theme doesn't support disabling yet.
    // For now, we rely on theme defaults.

    const classes = `${themeClass} ${className}`;

    return <div className={classes} style={style}>{children}</div>;
}

// Subcomponents are just structural wrappers now, as theme handles padding on the main card
Card.Header = function CardHeader({ children, className = '' }: CardSubComponentProps) {
    return <div className={`card-header ${className}`} style={{ marginBottom: '1rem' }}>{children}</div>;
};

Card.Body = function CardBody({ children, className = '' }: CardSubComponentProps) {
    return <div className={`card-body ${className}`}>{children}</div>;
};

Card.Footer = function CardFooter({ children, className = '' }: CardSubComponentProps) {
    return <div className={`card-footer ${className}`} style={{ marginTop: '1rem' }}>{children}</div>;
};
