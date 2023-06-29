import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { Content } from '@styles/layout.css';

export const Container = style([
  Content,
  {
    paddingTop: '6rem',
  },
]);

export const List = style({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  listStyle: 'none',
});

export const ListItem = style({
  borderRadius: '0.75rem',
  padding: '1rem',
  backgroundColor: vars.color.gray[50],
});

export const ListItemHeader = style({
  marginBottom: '1rem',
  borderBottom: `1px solid ${vars.color.border}`,
  paddingBottom: '.75rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1rem',

  '@media': {
    'screen and (min-width: 48rem)': {
      flexDirection: 'row',
      gap: '2rem',
    },
  },
});

export const ListItemHeaderInfo = style({
  display: 'flex',
  flexDirection: 'column-reverse',
});

export const ListItemHeaderInfoGroup = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
  fontSize: '.875rem',
  fontWeight: 500,

  '@media': {
    'screen and (min-width: 30rem)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
});

export const ListItemHeaderBadges = style({
  display: 'flex',
  gap: '1rem',
  fontSize: '1.5rem',
});

export const ListItemTitle = style({
  marginBottom: '.25rem',
  fontSize: '1.125rem',
  fontWeight: 500,
  color: vars.color.text.alternative,
});

export const ListItemRole = style({
  color: vars.color.text.alternative,
  fontSize: '.75rem',
  fontWeight: 600,
  textTransform: 'uppercase',
});

export const ListItemPeriod = style({
  display: 'flex',
  alignItems: 'center',
  gap: '.25rem',
  color: vars.color.text.alternative,
});

export const ListItemPeriodIcon = style({
  fill: vars.color.secondary[400],
});

export const ListItemSummary = style({
  color: vars.color.text.alternative,
  fontWeight: 500,
});
