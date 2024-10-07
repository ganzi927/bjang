import React from 'react';
import { SerializedStyles } from '@emotion/react';
import { RadioGroupProps } from '@mui/material';

export interface RadiosGroupProps extends RadioGroupProps {
  className?: string;
  customCss?: SerializedStyles;
  defaultValue?: any;
  value?: any;
  row?: boolean;
  children?: React.ReactElement | React.ReactElement[];
}
