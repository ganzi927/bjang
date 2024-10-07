import { ReactNode, useState } from 'react';
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
}
