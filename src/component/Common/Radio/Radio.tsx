import React from 'react';
import { FormControlLabel, Radio } from '@mui/material';
import { RadioProps } from './type';
import * as style from './style';
import Typography from 'component/Common/Typography';

const Radios = React.forwardRef(
  (
    {
      className,
      customCss,
      size = 'small',
      disabled = false,
      checked,
      label,
      labelPlacement = 'end',
      value,
      onChange = (checked, e) => {
        checked;
      },
      ...props
    }: RadioProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      onChange(checked, e);
    };

    if (label) {
      let tempLabel: React.ReactNode = label;
      if (typeof label === 'string') {
        tempLabel = <Typography variant="body2">{label}</Typography>;
      }

      return (
        <FormControlLabel
          className={className}
          css={[style.root, style.form, customCss]}
          control={<Radio size={size} disabled={disabled} onChange={handleChange} />}
          ref={ref}
          value={value}
          label={tempLabel}
          checked={checked}
          labelPlacement={labelPlacement}
          {...props}
        />
      );
    } else {
      return (
        <Radio
          className={className}
          css={[style.root, customCss]}
          ref={ref}
          size={size}
          disabled={disabled}
          value={value}
          checked={checked}
          onChange={handleChange}
          {...props}
        />
      );
    }
  }
);
Radios.displayName = 'Radios';

export default Radios;
