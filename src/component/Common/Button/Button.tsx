import React, { forwardRef } from 'react';
import { ButtonProps } from './type';
import * as style from './style';
import LoadingIndicator from './LoadingIndicator';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, className, size, customCss, isLoading, icon: Icon, children, ...rest }: ButtonProps,
    ref
  ) => {
    return (
      <>
        <button
          className={className}
          css={[style.root.size(size), style.root.variant(variant, isLoading), customCss]}
          {...rest}
        >
          {isLoading && (
            <div className="icon-wrapper">
              <LoadingIndicator />
            </div>
          )}
          {Icon && !isLoading && (
            <div className="icon-wrapper">
              <Icon />
            </div>
          )}
          {children}
        </button>
      </>
    );
  }
);

Button.displayName = 'Button';

export default Button;
