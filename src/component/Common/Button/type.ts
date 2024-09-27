import { SerializedStyles } from '@emotion/react';
import { ButtonHTMLAttributes, FunctionComponent, SVGProps } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'primary' | 'secondary' | 'line' | 'tertiary' | 'text';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  customCss?: SerializedStyles;
  isLoading?: boolean;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}
