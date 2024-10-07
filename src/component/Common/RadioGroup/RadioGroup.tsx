import React from 'react';
import { RadioGroup } from '@mui/material';
import { RadiosGroupProps } from './type';

const RadiosGroups = React.forwardRef(
  (
    {
      className,
      customCss,
      defaultValue,
      value,
      row = false,
      children,
      ...props
    }: RadiosGroupProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <RadioGroup
        className={className}
        css={[customCss]}
        defaultValue={defaultValue}
        value={value}
        row={row}
        ref={ref}
        {...props}
      >
        {children}
      </RadioGroup>
    );
  }
);
RadiosGroups.displayName = 'RadiosGroups';

export default RadiosGroups;
