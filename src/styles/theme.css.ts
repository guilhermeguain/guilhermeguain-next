import { createGlobalTheme } from '@vanilla-extract/css';
import { lighten, darken } from 'polished';

const colorPrimary = '#C40A32';
const colorSecondary = '#078C64';
const colorTertiary = '#9FCA0A';

export const vars = createGlobalTheme(':root', {
  color: {
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
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
    border: '#E2E8F0',
    divider: '#2D3748',
    text: {
      primary: '#CBD5E0',
      secondary: '#A0AEC0',
      alternative: '#4A5568',
    },
  },
});
