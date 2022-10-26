import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import { lighten, darken } from 'polished';

const colorPrimary = '#4072a0';

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
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'primary.400',
        fontWeight: 'normal',
      },
    },
  },
};

export const theme = extendTheme(config);
