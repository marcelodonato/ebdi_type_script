import 'styled-components/native';
import { defaultTheme } from './src/themes';

export type Theme = {
  colors: typeof defaultTheme.defaultColors;
  fonts: typeof defaultTheme.defaultFonts;
  spacing: typeof defaultTheme.defaultSpacing;
};

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
