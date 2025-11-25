'use client';
import './input.css';

interface InputProps {
    label?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    success?: boolean;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    id?: string;
}

export default function Input({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    error,
    success,
    disabled = false,
    required = false,
    className = '',
    id,
}: InputProps) {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const inputClass = `
    input
    ${error ? 'input-error' : ''}
    ${success ? 'input-success' : ''}
    ${disabled ? 'input-disabled' : ''}
    ${className}
  `.trim();

    return (
        <div className="input-wrapper">
            {label && (
                <label htmlFor={inputId} className="input-label">
                    {label}
                    {required && <span className="required">*</span>}
                </label>
            )}

            <input
                id={inputId}
                type={type}
                className={inputClass}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
            />

            {error && <span className="input-message input-message-error">{error}</span>}
            {success && !error && <span className="input-message input-message-success">✓ Looks good!</span>}
        </div>
    );
}
