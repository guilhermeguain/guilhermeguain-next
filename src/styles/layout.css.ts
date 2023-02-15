import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const Content = style({
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '80rem',
});

export const List = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const ListItem = style({
  display: 'flex',
  alignItems: 'baseline',
});

export const ListItemIcon = style({
  marginRight: '.5rem',
  fill: vars.color.secondary[400],
  display: 'none',

  '@media': {
    'screen and (min-width: 30rem)': {
      display: 'initial',
    },
  },
});

export const ListItemPrefix = style({
  color: vars.color.secondary[400],
  fontWeight: 500,
});

export const ListItemText = style({
  flex: 1,
});
