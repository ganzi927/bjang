import React from 'react';
import Styled from './style';
import { TabPanelProps } from './type';

const TabPanel = React.forwardRef(
  (
    { className, customCss, index, value, enableCaching, children, ...props }: TabPanelProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className={className}
        css={[Styled.root, customCss]}
        role="tabpanel"
        hidden={value !== index}
        ref={ref}
        {...props}
      >
        {!enableCaching && value === index && children}
        {enableCaching && children}
      </div>
    );
  }
);

export default TabPanel;

TabPanel.displayName = 'TabPanel';
