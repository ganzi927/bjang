import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { ToggleProps } from './type';
import Typography from '../Typography';
import * as style from './style';

const Toggle = React.forwardRef(
  (
    {
      className,
      customCss,
      checked,
      disabled = false,
      label,
      labelPlacement = 'end',
      size = 'medium',
      onChange,
      ...props
    }: ToggleProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    if (label) {
      let tempLabel: React.ReactNode = label;
      if (typeof label === 'string') {
        tempLabel =
          size === 'medium' ? (
            <Typography variant="body2">{label}</Typography>
          ) : (
            <Typography variant="inputLabel2">{label}</Typography>
          );
      }

      return (
        <FormControlLabel
          className={className}
          css={[style.form, customCss]}
          control={
            <Switch
              css={[style.root]}
              checked={checked}
              disabled={disabled}
              onChange={onChange}
              size={size}
            />
          }
          ref={ref}
          label={tempLabel}
          checked={checked}
          labelPlacement={labelPlacement}
          {...props}
        />
      );
    } else {
      return (
        <Switch
          className={className}
          css={[style.root, customCss]}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          size={size}
          ref={ref}
          {...props}
        />
      );
    }
  }
);
Toggle.displayName = 'Toggle';

export default Toggle;
