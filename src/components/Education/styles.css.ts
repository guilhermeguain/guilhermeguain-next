import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const Container = style({
  flex: 1,
});

export const List = style({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
});

export const ListItem = style({
  display: 'flex',
  color: vars.color.text.primary,
  gap: '1rem',
  selectors: {
    '&:not(:first-child)': {
      marginTop: '.5rem',
      borderTop: `1px solid ${vars.color.divider}`,
      paddingTop: '1rem',
    },
  },
});

export const ListItemColumn = style({
  display: 'flex',
  flexDirection: 'column',
  selectors: {
    '&:first-child': {
      flex: 1,
    },
    '&:last-child': {
      textAlign: 'right',
      color: vars.color.text.secondary,
    },
  },
});

export const ListItemTitle = style({
  color: vars.color.text.primary,
  fontWeight: 500,
  fontSize: '0.875rem',

  '@media': {
    'screen and (min-width: 30rem)': {
      fontSize: '1rem',
    },
  },
});

export const ListItemInstitution = style({
  color: vars.color.text.secondary,
  fontSize: '0.625rem',
  textTransform: 'uppercase',
  fontWeight: 600,

  '@media': {
    'screen and (min-width: 30rem)': {
      fontSize: '0.75rem',
    },
  },
});

export const ListItemPeriod = style({
  fontSize: '0.75rem',
  fontWeight: 500,

  '@media': {
    'screen and (min-width: 30rem)': {
      fontSize: '0.875rem',
    },
  },
});

export const ListItemLocation = style({
  fontSize: '0.75rem',
});
