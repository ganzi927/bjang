import React from 'react';
import { SerializedStyles } from '@emotion/react';

export interface RadioProps {
  className?: string;
  customCss?: SerializedStyles;
  size?: 'small' | 'medium';
  checked?: boolean;
  disabled?: boolean;
  label?: string | React.ReactNode;
  value?: any;
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
}
