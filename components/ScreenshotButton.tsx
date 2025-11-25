'use client';
import { useState } from 'react';
import './screenshot-button.css';

export default function ScreenshotButton() {
    const [isCapturing, setIsCapturing] = useState(false);

    const captureScreenshot = async () => {
        setIsCapturing(true);

        try {
            // Trigger browser screenshot
            alert('📸 Captura de Tela\n\n' +
                'Use as ferramentas do navegador:\n\n' +
                '• Windows: Win + Shift + S\n' +
                '• Mac: Cmd + Shift + 4\n' +
                '• Chrome DevTools: Ctrl/Cmd + Shift + P → "Screenshot"\n\n' +
                'Depois cole a imagem no chat do Antigravity!');
        } finally {
            setIsCapturing(false);
        }
    };

    return (
        <button
            className="screenshot-button"
            onClick={captureScreenshot}
            title="Tirar screenshot para feedback"
            aria-label="Capturar tela"
        >
            {isCapturing ? '📸' : '🎯'}
            <span className="screenshot-tooltip">Screenshot para Feedback</span>
        </button>
    );
}
