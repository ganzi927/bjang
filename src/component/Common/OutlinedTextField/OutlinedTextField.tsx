import React, { useState } from 'react';
import style from './style';
import { OutlinedTextFieldProps } from './type';
import Tooltip from 'component/Common/Tooltips';
import { IconInfo } from 'component/res/images';

function validateValue(value?: string | number | readonly string[]) {
  if (value === undefined) {
    return false;
  }
  if (typeof value === 'string') {
    return Boolean(value);
  }
  if (typeof value === 'number') {
    return !isNaN(value);
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
}

const OutlinedTextField = React.forwardRef(
  (
    {
      className,
      customCss,
      id,
      label,
      labelOverflowInherit = false,
      width = '400px',
      shrink: shrinkProps = false,
      value: valueProps = '',
      placeholder,
      fullWidth = false,
      type = 'text',
      size = 'medium',
      error = false,
      errorMessage = '',
      helperText,
      readOnly = false,
      disabled = false,
      startAdorment,
      endAdorment,
      onChange,
      onBlur,
      inputRef,
      inputProps,
      maxLength,
      removeOutline = false,
      ...props
    }: OutlinedTextFieldProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [nativeShrink, setShrink] = useState(shrinkProps);
    const [nativeValue, setInnerValue] = useState<string | number | readonly string[] | undefined>(
      valueProps
    );

    const value = valueProps !== undefined ? valueProps : nativeValue;

    const shrink =
      (nativeShrink || validateValue(value) || shrinkProps || startAdorment !== undefined) &&
      Boolean(label);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      const { value } = e.target;
      setInnerValue(value);
      if (onChange) {
        onChange(e);
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (type === 'number') {
        e.target.addEventListener(
          'wheel',
          function (e) {
            e.stopPropagation();
          },
          { passive: false }
        );
      }

      setShrink(true);

      if (inputProps?.onFocus) {
        inputProps?.onFocus(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setShrink(false);

      if (inputProps?.onBlur) {
        inputProps?.onBlur(e);
      }
    };

    let classNames = [];
    classNames.push(
      'Outlined-TextField-Container',
      disabled ? 'disabled' : null,
      error ? 'Error' : null,
      readOnly ? 'ReadOnly' : null,
      className ? `${className}` : null
    );
    classNames = classNames.filter(Boolean);

    return (
      <div
        ref={ref}
        css={[style.container(width, fullWidth), customCss]}
        className={classNames.join(' ')}
        data-shrink={shrink}
        {...props}
      >
        {label &&
          (labelOverflowInherit ? (
            <div css={style.labelOverflowInherit} className="Outlined-TextField-Label">
              {label}
              {props.required && <span style={{ color: 'red' }}>*</span>}
            </div>
          ) : (
            <div css={style.label} className="Outlined-TextField-Label">
              {label}
              {props.required && <span style={{ color: 'red' }}>*</span>}
            </div>
          ))}
        <div className="Outlined-TextFiled-Wrapper" css={style.wrapper(size, removeOutline)}>
          <div className="Outlined-TextField-Contents" css={style.contents}>
            {startAdorment && (
              <div className="Outlined-TextField-StartAdorment" css={style.startAdorment}>
                {startAdorment}
              </div>
            )}
            <input
              {...inputProps}
              className={['Outlined-TextField-Input', inputProps?.className]
                .filter(Boolean)
                .join(' ')}
              css={[style.input, inputProps?.customCss]}
              ref={inputRef}
              id={id}
              value={value}
              type={type}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              readOnly={readOnly}
              disabled={disabled}
              maxLength={maxLength}
            />
            {endAdorment && (
              <div className="Outlined-TextField-EndAdorment" css={style.endAdorment}>
                {endAdorment}
              </div>
            )}
            {error && errorMessage && (
              <Tooltip
                variant="primary"
                PopperProps={style.toolTip.popperProps}
                title={<span>{errorMessage}</span>}
                placement="top-start"
              >
                <div css={style.toolTip.warningIcon}>
                  <IconInfo />
                </div>
              </Tooltip>
            )}
          </div>
        </div>
        {helperText && (
          <p className="Outlined-TextField-HelperText" css={style.helperText}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

OutlinedTextField.displayName = 'OutlinedTextField';

export default OutlinedTextField;
