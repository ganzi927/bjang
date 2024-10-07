import React from 'react';
import { Tabs } from '@mui/material';
import Styled from './style';
import { TabsProps } from './type';

const Tab = React.forwardRef(
  (
    { className, customCss, onChange, value, fullwidth = false, ...props }: TabsProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <Tabs
        className={className}
        css={[Styled.root, customCss]}
        onChange={onChange}
        value={value}
        variant={fullwidth ? 'fullWidth' : 'standard'}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Tab;

Tab.displayName = 'Tab';
