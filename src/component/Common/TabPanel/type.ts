import { SerializedStyles } from '@emotion/react';
import React from 'react';

export interface TabPanelProps {
  className?: string;
  customCss?: SerializedStyles;
  index: number;
  value: number;
  children?: React.ReactNode;
  enableCaching?: boolean;
}
