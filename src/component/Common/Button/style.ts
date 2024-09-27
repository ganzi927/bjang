import { css } from '@emotion/react';

enum heightEnum {
  small = '28px',
  medium = '32px',
  large = '36px',
  xlarge = `44px`,
}
enum paddingEnum {
  small = '0 12px',
  medium = '0 20px',
  large = medium,
  xlarge = medium,
}

enum fontSize {
  small = '0.813rem',
  medium = small,
  large = `1rem`,
  xlarge = large,
}

export const root = {
  size: (size) => {
    return css`
      width: max-content;
      height: ${heightEnum[size]};
      padding: ${paddingEnum[size]};
      font-size: ${fontSize[size]};
      border-radius: 6px;
      font: Spoqa Han Sans Neo;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      transition: all ease 0.2s;
      border: none;

      .icon-wrapper {
        display: inline-flex;
        margin-right: 10px;
      }

      &:disabled {
        cursor: unset;
      }
    `;
  },
  variant: (variant, isLoading) => {
    switch (variant) {
      case `primary`:
        return (theme) => css`
          background-color: #2c2d49;
          color: ${theme.colors.FORTE_WHITE};

          ${isLoading
            ? `
   background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), #2c2d49;
   cursor: unset;
   `
            : `
   &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
      #2c2d49;
  }

  &:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), #2c2d49;
  }

  &:disabled {
    background-color: ${theme.colors.FORTE_GRAYSCALE_300};
    color: ${theme.colors.FORTE_GRAYSCALE_500};
  }
   `}
        `;
      case `secondary`:
        return (theme) => css`
          background: ${theme.colors.FORTE_WHITE};
          border: 1px solid ${theme.colors.FORTE_GRAYSCALE_200};
          color: ${theme.colors.FORTE_DEFAULT_TEXT};

          &:hover {
            background: ${theme.colors.FORTE_GRAYSCALE_50};
          }

          &:active {
            background: ${theme.colors.FORTE_GRAYSCALE_50};
          }

          &:disabled {
            background: ${theme.colors.FORTE_GRAYSCALE_50};
            border: 1px solid #dadce0;
            color: ${theme.colors.FORTE_GRAYSCALE_500};
          }
        `;
      case `line`:
        return (theme) => css`
          background: ${theme.colors.FORTE_WHITE};
          border: 1px solid #2c2d49;
          color: ${theme.colors.FORTE_DEFAULT_TEXT};

          &:hover {
            background: ${theme.colors.FORTE_GRAYSCALE_50};
          }

          &:active {
            border: 1.5px solid #2c2d49;
            background: ${theme.colors.FORTE_GRAYSCALE_50};
          }

          &:disabled {
            background: ${theme.colors.FORTE_GRAYSCALE_50};
            border: 1px solid #9aa0a6;
            color: ${theme.colors.FORTE_GRAYSCALE_500};
          }
        `;
      case `tertiary`:
        return (theme) => css`
          background: ${theme.colors.FORTE_GRAYSCALE_100};
          color: ${theme.colors.FORTE_DEFAULT_TEXT};

          &:active {
            background: #e8eaed;
          }

          &:disabled {
            background-color: ${theme.colors.FORTE_GRAYSCALE_300};
            color: ${theme.colors.FORTE_GRAYSCALE_500};
          }
        `;

      case `text`:
        return (theme) => css`
          background: transparent;
          color: ${theme.colors.FORTE_DEFAULT_TEXT};
        `;
      default:
        return (theme) => css`
          background-color: #2c2d49;
          color: ${theme.colors.FORTE_WHITE};

          &:hover {
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
              #2c2d49;
          }

          &:active {
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), #2c2d49;
          }

          &:disabled {
            background-color: ${theme.colors.FORTE_GRAYSCALE_300};
            color: ${theme.colors.FORTE_GRAYSCALE_500};
          }
        `;
    }
  },
};
