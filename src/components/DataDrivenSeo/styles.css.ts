import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const Columns = style({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '@media': {
    'screen and (min-width: 62rem)': {
      flexDirection: 'row',
    },
  },
});

export const ColumnsItem = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '1rem',
});

export const ColumnHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const ColumnTitle = style({
  color: vars.color.text.primary,
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  fontWeight: 700,
});
