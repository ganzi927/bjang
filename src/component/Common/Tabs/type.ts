import { SerializedStyles } from '@emotion/react';
import React from 'react';

export interface TabsProps {
  className?: string;
  customCss?: SerializedStyles;
  onChange?: (event: React.SyntheticEvent, value: number) => void;
  value?: number;
  fullwidth?: boolean;
  children: React.ReactNode;
}
