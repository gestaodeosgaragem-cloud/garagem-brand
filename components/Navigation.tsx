'use client';
import Link from 'next/link';
import { useState } from 'react';
import './navigation.css';

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: 'Início', href: '/' },
    { label: 'Cores', href: '/docs/colors' },
    { label: 'Theme', href: '/docs/theme' },
    { label: 'Tipografia', href: '/docs/typography' },
    { label: 'Componentes', href: '/docs/components' },
    { label: 'Logos', href: '/docs/logos' },
    { label: 'Downloads', href: '/docs/downloads' },
    { label: 'Começar', href: '/docs/getting-started' },
];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navigation">
            <div className="container nav-container">
                <Link href="/" className="nav-logo">
                    <img
                        src="/assets/logos/Branco - Horizontal Completa.svg"
                        alt="Garagem"
                        className="nav-logo-img"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    {navItems.slice(1).map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="nav-link">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="nav-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="nav-mobile">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="nav-mobile-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
