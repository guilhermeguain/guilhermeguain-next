import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import { lighten, darken } from 'polished';

const colorPrimary = '#C40A32';
const colorSecondary = '#078C64';
const colorTertiary = '#9FCA0A';

export const config: ThemeOverride = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        backgroundColor: 'gray.800',
      },
    },
  },
  colors: {
    primary: {
      50: lighten(0.25, colorPrimary),
      100: lighten(0.2, colorPrimary),
      200: lighten(0.15, colorPrimary),
      300: lighten(0.1, colorPrimary),
      400: lighten(0.05, colorPrimary),
      500: colorPrimary,
      600: darken(0.05, colorPrimary),
      700: darken(0.1, colorPrimary),
      800: darken(0.15, colorPrimary),
      900: darken(0.2, colorPrimary),
    },
    secondary: {
      50: lighten(0.25, colorSecondary),
      100: lighten(0.2, colorSecondary),
      200: lighten(0.15, colorSecondary),
      300: lighten(0.1, colorSecondary),
      400: lighten(0.05, colorSecondary),
      500: colorSecondary,
      600: darken(0.05, colorSecondary),
      700: darken(0.1, colorSecondary),
      800: darken(0.15, colorSecondary),
      900: darken(0.2, colorSecondary),
    },
    tertiary: {
      50: lighten(0.25, colorTertiary),
      100: lighten(0.2, colorTertiary),
      200: lighten(0.15, colorTertiary),
      300: lighten(0.1, colorTertiary),
      400: lighten(0.05, colorTertiary),
      500: colorTertiary,
      600: darken(0.05, colorTertiary),
      700: darken(0.1, colorTertiary),
      800: darken(0.15, colorTertiary),
      900: darken(0.2, colorTertiary),
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: 'gray.300',
      },
    },
    Heading: {
      baseStyle: {
        color: 'secondary.400',
        fontWeight: 'normal',
      },
    },
  },
};

export const theme = extendTheme(config);
