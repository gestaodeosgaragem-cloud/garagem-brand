'use client';
import './textarea.css';

interface TextareaProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    rows?: number;
    maxLength?: number;
    showCounter?: boolean;
    className?: string;
    id?: string;
}

export default function Textarea({
    label,
    placeholder,
    value,
    onChange,
    error,
    disabled = false,
    required = false,
    rows = 4,
    maxLength,
    showCounter = false,
    className = '',
    id,
}: TextareaProps) {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    const textareaClass = `
    textarea
    ${error ? 'textarea-error' : ''}
    ${disabled ? 'textarea-disabled' : ''}
    ${className}
  `.trim();

    return (
        <div className="textarea-wrapper">
            {label && (
                <label htmlFor={textareaId} className="textarea-label">
                    {label}
                    {required && <span className="required">*</span>}
                </label>
            )}

            <textarea
                id={textareaId}
                className={textareaClass}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                rows={rows}
                maxLength={maxLength}
            />

            <div className="textarea-footer">
                {error && <span className="textarea-message textarea-message-error">{error}</span>}
                {showCounter && maxLength && (
                    <span className="character-counter">
                        {value?.length || 0} / {maxLength}
                    </span>
                )}
            </div>
        </div>
    );
}
