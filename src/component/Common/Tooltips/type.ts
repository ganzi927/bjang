import { PopperProps } from '@mui/material';
import { ReactElement, ReactNode } from 'react';

export interface TooltipProps {
  title?: NonNullable<ReactNode>;
  variant?: 'primary' | 'secondary' | 'ellipsis';
  children?: ReactElement;
  placement?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'left-start'
    | 'left'
    | 'left-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'right-start'
    | 'right'
    | 'right-end';
  disableHoverListener?: boolean;
  disableInteractive?: boolean;
  disableFocusListener?: boolean;
  PopperProps?: Partial<PopperProps>;
  open?: boolean;
}
