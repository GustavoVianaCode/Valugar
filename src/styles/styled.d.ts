import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary?: string;
      text: string;
      textLight: string;
      textLighter?: string;
      border: string;
      borderDark?: string;
      background: string;
      backgroundLight?: string;
      backgroundAlt?: string;
      error?: string;
      success?: string;
      successDark?: string;
      warning?: string;
      white?: string;
    };
    borderRadius: {
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      small?: string;
      medium?: string;
      large?: string;
    };
    spacing?: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    fontSize: {
      small: string;
      medium: string;
      regular: string;
      large: string;
      xl: string;
      xxl: string;
    };
    shadows?: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}