import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#C40A32',
    secondary: '#078C64',
    tertiary: '#9FCA0A',
    border: '#E2E8F0',
    text: '#CBD5E0',
  },
});
