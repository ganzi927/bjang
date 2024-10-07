import React from 'react';
import { TypographyProps } from './type';
import style from './style';

const Typography = React.forwardRef(
  (
    { className, variant, color = 'inherit', customCss, ...props }: TypographyProps,
    ref: React.Ref<HTMLSpanElement> | React.RefCallback<HTMLSpanElement>
  ) => (
    <span
      className={className}
      css={[style.root, { color }, style.variant(variant), customCss]}
      ref={ref}
      {...props}
    />
  )
);
Typography.displayName = 'Typography';

export default Typography;
