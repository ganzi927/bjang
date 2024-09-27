import { ReactNode, useState } from 'react';
import theme from '../theme';
import { ReactComponent as Edit } from '../../icons/Edit_Icon.svg';
import { css, ThemeProvider } from '@emotion/react';
import Button from '../Common/Button/Button';

export default function Layout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <main>{children}</main>
        <Button
          size="small"
          variant="primary"
          customCss={css`
            margin: 20px;
          `}
          isLoading={isLoading}
          onClick={onClick}
          icon={Edit}
        >
          test
        </Button>
      </div>
    </ThemeProvider>
  );
}
