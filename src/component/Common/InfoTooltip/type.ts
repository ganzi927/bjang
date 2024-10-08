import { ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';

export interface InfoTooltipProps {
  helperText?: string | ReactNode;
  iconSize?: number;
  customCss?: SerializedStyles | ((theme: any) => SerializedStyles);
  placement?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-end'
    | 'left'
    | 'left-start';
  arrow?: boolean;
}
