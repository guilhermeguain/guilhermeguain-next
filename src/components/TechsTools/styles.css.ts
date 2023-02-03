import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const Container = style({
  borderRadius: '.75rem',
  flex: 1,
  backgroundColor: vars.color.gray[50],
  overflow: 'hidden',
});

export const Header = style({
  padding: '.5rem 1rem',
  backgroundColor: vars.color.primary[500],
});

export const HeaderTitle = style({
  lineHeight: 1,
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#fff',
});

export const List = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const ListItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  flex: 1,
});

export const ListItemTitle = style({
  fontSize: '.75rem',
  fontWeight: 700,
  lineHeight: 1,
  textTransform: 'uppercase',
  color: vars.color.text.alternative,
});

export const ListItemBadges = style({
  display: 'flex',
  fontSize: '1.65rem',
  gap: '.75rem',
});
