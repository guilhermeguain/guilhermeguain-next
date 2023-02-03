import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const Container = style({
  border: `1px solid ${vars.color.gray[600]}`,
  borderRadius: '1.5rem',
  padding: '.25rem .75rem .25rem 1rem',
});

export const Input = style({
  color: vars.color.text.primary,
  backgroundColor: 'transparent',
  fontSize: '.75rem',
  cursor: 'pointer',
  width: '100%',

  selectors: {
    '&:focus-visible': {
      outline: 0,
    },
  },
});

export const Option = style({
  backgroundColor: '#fff',
  color: vars.color.gray[800],
});
