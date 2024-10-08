import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useMemo } from 'react';
import * as style from './style';
import { CheckBoxProps } from './type';

const CheckBox = React.forwardRef<HTMLButtonElement, CheckBoxProps>(
  (
    {
      className,
      customCss,
      size = 'medium',
      disabled = false,
      disableRipple = false,
      disablePadding = false,
      checked,
      icon,
      checkedIcon,
      indeterminate,
      indeterminateIcon,
      onChange,
      onClick,
      onDoubleClick,
      label = undefined,
      labelPlacement = 'end',
      labelProps = { customCss: undefined },
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      onChange && onChange(checked, e);
    };
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      onClick && onClick(e);
    };
    const { labelCustomCss, restProps } = useMemo(() => {
      const { customCss: labelCustomCss, ...restProps } = labelProps;
      return { labelCustomCss, restProps };
    }, [labelProps]);

    return (
      <>
        {label && (
          <FormControlLabel
            css={[style.root.label, labelCustomCss]}
            label={label}
            labelPlacement={labelPlacement}
            control={
              <Checkbox
                className={className}
                css={[style.root.checkbox(disablePadding), customCss]}
                ref={ref}
                size={size}
                disableRipple={disableRipple}
                disabled={disabled}
                checked={checked}
                indeterminate={indeterminate}
                icon={icon}
                checkedIcon={checkedIcon}
                indeterminateIcon={indeterminateIcon}
                onChange={handleChange}
                onClick={handleClick}
                onDoubleClick={onDoubleClick}
                {...props}
              />
            }
            {...restProps}
          />
        )}
        {!label && (
          <Checkbox
            className={className}
            css={[style.root.checkbox(disablePadding), customCss]}
            ref={ref}
            size={size}
            disableRipple={disableRipple}
            disabled={disabled}
            checked={checked}
            indeterminate={indeterminate}
            icon={icon}
            checkedIcon={checkedIcon}
            indeterminateIcon={indeterminateIcon}
            onChange={handleChange}
            onClick={handleClick}
            onDoubleClick={onDoubleClick}
            {...props}
          />
        )}
      </>
    );
  }
);

CheckBox.displayName = 'CheckBox';

export default CheckBox;
