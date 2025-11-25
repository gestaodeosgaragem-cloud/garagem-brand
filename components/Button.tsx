import Link from 'next/link';
// import './button.css'; // Removed: using garagem-theme.css

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'gradient';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    disabled?: boolean;
    href?: string;
    className?: string;
    style?: React.CSSProperties;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    disabled = false,
    href,
    className = '',
    style
}: ButtonProps) {
    // Map internal variants to Garagem Theme classes
    let themeClass = 'botao'; // Default (Primary/Gradient)

    switch (variant) {
        case 'secondary':
            themeClass += ' botao-preto';
            break;
        case 'outline':
            themeClass += ' botao-outline';
            break;
        case 'white':
            themeClass += ' botao-contrario';
            break;
        case 'ghost':
            themeClass += ' botao-outline'; // Fallback
            break;
        // primary and gradient use default .botao
    }

    switch (size) {
        case 'small':
            themeClass += ' botao-pequeno';
            break;
        case 'large':
            themeClass += ' botao-grande';
            break;
    }

    const classes = `${themeClass} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes} style={style}>
                {children}
            </Link>
        );
    }

    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {children}
        </button>
    );
}
