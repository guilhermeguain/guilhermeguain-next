import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const List = style({
  marginTop: '2rem',
  display: 'grid',
  gridGap: '2rem',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',

  '@media': {
    'screen and (min-width: 30rem)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    'screen and (min-width: 48rem)': {
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },
    'screen and (min-width: 62rem)': {
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    },
  },
});

export const ListItem = style({
  borderRadius: '.75rem',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.color.gray[200],
  minHeight: '9rem',
});
