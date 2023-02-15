import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const Container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '4rem',
});

export const Menu = style({
  display: 'flex',
  gap: '.5rem',
  fontSize: '0.875rem',
  listStyle: 'none',

  '@media': {
    'screen and (min-width: 30rem)': {
      gap: '1rem',
      fontSize: '1rem',
    },
    'screen and (min-width: 48rem)': {
      gap: '1.5rem',
      fontSize: '1.125rem',
    },
  },
});

export const MenuItem = style({
  color: vars.color.gray[300],

  ':hover': {
    color: vars.color.secondary[400],
  },

  selectors: {
    '&[aria-current=true]': {
      color: vars.color.secondary[400],
    },
  },
});
