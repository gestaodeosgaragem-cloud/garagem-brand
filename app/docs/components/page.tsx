'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function ComponentsPage() {
    const [buttonVariant, setButtonVariant] = useState<'primary' | 'secondary' | 'outline' | 'white'>('primary');
    const [buttonSize, setButtonSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [cardVariant, setCardVariant] = useState<'default' | 'gradient' | 'outlined'>('default');

    return (
        <div className="container pt-nav pt-2xl">
            {/* Hero */}
            <div className="centralizado mb-2xl">
                <h1 className="texto-gradiente mb-1rem">Componentes</h1>
                <p className="text-lg opacity-80 max-w-800 mx-auto">
                    Biblioteca de componentes React reutilizáveis, construídos com o design system Garagem.
                </p>
            </div>

            {/* Buttons */}
            <section className="secao">
                <h2 className="mb-1rem">Buttons</h2>
                <p className="mb-2rem opacity-80">
                    Componente de botão com múltiplas variantes e tamanhos.
                </p>

                <Card className="card-escuro mb-2rem">
                    <div className="grid grid-2 gap-lg">
                        <div className="flex items-center justify-center bg-dark rounded-md p-2rem">
                            <Button variant={buttonVariant} size={buttonSize}>
                                {buttonVariant.charAt(0).toUpperCase() + buttonVariant.slice(1)} Button
                            </Button>
                        </div>

                        <div>
                            <div className="mb-1-5rem">
                                <label className="block mb-0-5rem opacity-70">Variant</label>
                                <div className="flex flex-wrap gap-sm">
                                    {['primary', 'secondary', 'outline', 'white'].map(v => (
                                        <button
                                            key={v}
                                            onClick={() => setButtonVariant(v as any)}
                                            className={`botao ${buttonVariant === v ? 'botao-contrario' : ''}`}
                                        >
                                            {v}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-1-5rem">
                                <label className="block mb-0-5rem opacity-70">Size</label>
                                <div className="flex flex-wrap gap-sm">
                                    {['small', 'medium', 'large'].map(s => (
                                        <button
                                            key={s}
                                            onClick={() => setButtonSize(s as any)}
                                            className={`botao ${buttonSize === s ? 'botao-contrario' : ''}`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-dark p-1rem rounded-sm overflow-x-auto">
                                <code className="font-mono text-light">{`<Button variant="${buttonVariant}" size="${buttonSize}">\n  Click me\n</Button>`}</code>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* All Button Variants */}
                <div className="mb-2rem">
                    <h3 className="mb-1rem">Todas as Variantes</h3>
                    <div className="flex flex-wrap gap-md items-center">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <div className="bg-gray-800 p-1rem rounded-md">
                            <Button variant="white">White</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cards */}
            <section className="secao fundo-escuro rounded-lg p-xl">
                <h2 className="mb-1rem">Cards</h2>
                <p className="mb-2rem opacity-80">
                    Componente de card flexível para agrupar conteúdo relacionado.
                </p>

                <Card className="card-escuro mb-2rem border-light">
                    <div className="grid grid-2 gap-lg">
                        <div className="flex items-center justify-center bg-dark rounded-md p-2rem">
                            <Card variant={cardVariant} hover={cardVariant === 'default'} className="w-full max-w-300">
                                <Card.Body>
                                    <h3>Card Title</h3>
                                    <p>This is a card component with customizable variants.</p>
                                    <Button variant="primary" size="small">Action</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="mb-1-5rem">
                            <label className="block mb-0-5rem opacity-70">Variant</label>
                            <div className="flex flex-wrap gap-sm">
                                {['default', 'gradient', 'outlined'].map(v => (
                                    <button
                                        key={v}
                                        onClick={() => setCardVariant(v as any)}
                                        className={`botao ${cardVariant === v ? 'botao-contrario' : ''}`}
                                    >
                                        {v}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-dark p-1rem rounded-sm overflow-x-auto">
                            <code className="font-mono text-light">{`<Card variant="${cardVariant}" hover>\n  <Card.Body>\n    <h3>Card Title</h3>\n    <p>Card content goes here.</p>\n  </Card.Body>\n</Card>`}</code>
                        </div>
                    </div>
                </Card>
            </section>

            {/* API Reference */}
            <section className="secao">
                <h2 className="mb-2rem">API Reference</h2>

                <div className="grid grid-1 gap-lg">
                    <Card className="card-escuro">
                        <h3 className="mb-1rem">Button Props</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                        <th className="p-1rem text-vermelho">Prop</th>
                                        <th className="p-1rem">Type</th>
                                        <th className="p-1rem">Default</th>
                                        <th className="p-1rem">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { prop: 'variant', type: 'string', default: '"primary"', desc: 'Button style variant' },
                                        { prop: 'size', type: 'string', default: '"medium"', desc: 'Button size' },
                                        { prop: 'href', type: 'string', default: '-', desc: 'Link destination (renders as Link)' },
                                        { prop: 'className', type: 'string', default: '-', desc: 'Additional CSS classes' },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b-light">
                                            <td className="p-1rem"><code className="bg-light p-0-2rem-0-4rem rounded">{row.prop}</code></td>
                                            <td className="p-1rem opacity-80">{row.type}</td>
                                            <td className="p-1rem opacity-80">{row.default}</td>
                                            <td className="p-1rem opacity-80">{row.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    <Card className="card-escuro">
                        <h3 className="mb-1rem">Card Props</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                        <th className="p-1rem text-vermelho">Prop</th>
                                        <th className="p-1rem">Type</th>
                                        <th className="p-1rem">Default</th>
                                        <th className="p-1rem">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { prop: 'variant', type: 'string', default: '"default"', desc: 'Card style variant' },
                                        { prop: 'hover', type: 'boolean', default: 'false', desc: 'Enable hover effect' },
                                        { prop: 'className', type: 'string', default: '-', desc: 'Additional CSS classes' },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b-light">
                                            <td className="p-1rem"><code className="bg-light p-0-2rem-0-4rem rounded">{row.prop}</code></td>
                                            <td className="p-1rem opacity-80">{row.type}</td>
                                            <td className="p-1rem opacity-80">{row.default}</td>
                                            <td className="p-1rem opacity-80">{row.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
