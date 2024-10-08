import { css } from '@emotion/react';

export const helperText = (theme, { iconSize }) => css`
  font-size: ${iconSize}px;
  margin-left: 4px;
  color: ${theme.colors.FORTE_GRAYSCALE_800};
`;
