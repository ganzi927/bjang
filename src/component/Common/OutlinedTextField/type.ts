import { SerializedStyles } from '@emotion/react';
import { HTMLAttributes, InputHTMLAttributes } from 'react';

export interface OutlinedTextFieldProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onBlur' | 'onFocus'> {
  className?: string;
  customCss?: SerializedStyles;
  size?: 'small' | 'medium';
  type?: 'text' | 'password' | 'number';
  label?: string;
  labelOverflowInherit?: boolean;
  width?: string;
  placeholder?: string;
  value?: string | number | readonly string[];
  helperText?: string;
  shrink?: boolean;
  error?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  disabled?: boolean;
  startAdorment?: React.ReactNode;
  endAdorment?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  inputRef?: React.LegacyRef<HTMLInputElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> & {
    customCss?: SerializedStyles;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  };
  required?: boolean;
  maxLength?: number;
  removeOutline?: boolean;
}
