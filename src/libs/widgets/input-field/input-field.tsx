import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import './input-field.css';

export interface InputFieldProps {
    id: string
    label?: string
    placeholder?: string
    helperText?: string
    type?: string
    required?: boolean
    variant?: 'solid' | 'soft' | 'outlined' | 'plain'
    size?: 'sm' | 'md' | 'lg'
    isFullWidth?: boolean
    className?: string
    classNameHelperText?: string
    value: string | number
    helperTextColor?: string
    colors?: 'primary' | 'neutral' | 'danger' | 'success' | 'warning'
    setState: (value: string | number) => void
}

const InputField: React.FC<InputFieldProps> = ({
    id,
    label,
    placeholder,
    helperText,
    type,
    required,
    variant,
    size,
    isFullWidth,
    className,
    value,
    helperTextColor,
    classNameHelperText,
    colors,
    setState,
}) => {
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input
                id={id}
                className={className || ''}
                type={type}
                placeholder={placeholder}
                required={required}
                variant={variant}
                size={size}
                fullWidth={isFullWidth}
                value={value}
                color={colors}
                onChange={(e) => setState(e.target.value)}
            />
            <FormHelperText className={classNameHelperText || ''} sx={{ color: helperTextColor }}>{helperText}</FormHelperText>
        </FormControl>
    );
}

export default InputField;