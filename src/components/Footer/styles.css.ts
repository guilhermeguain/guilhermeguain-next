import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

import { Content } from '@styles/layout.css';

export const Container = style({
  padding: '1rem 0',
  backgroundColor: vars.color.gray[900],
});

export const ContainerContent = style([
  Content,
  {
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '0.875rem',
    gap: '2rem',

    '@media': {
      'screen and (min-width: 48rem)': {
        flexDirection: 'row',
      },
    },
  },
]);

export const Texts = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  lineHeight: 1,
  textAlign: 'center',
  flex: 1,
  color: vars.color.text.primary,

  '@media': {
    'screen and (min-width: 48rem)': {
      flexDirection: 'row',
    },
  },
});

export const TextsInner = style({
  borderBottom: `1px solid ${vars.color.divider}`,
  paddingBottom: '1rem',
  display: 'flex',
  gap: '1rem',
  lineHeight: 1,

  '@media': {
    'screen and (min-width: 48rem)': {
      borderRight: `1px solid ${vars.color.divider}`,
      borderBottom: 'none',
      paddingRight: '1rem',
      paddingBottom: 0,
      flexDirection: 'row',
    },
  },
});

export const TextsInnerItem = style({
  selectors: {
    '&:not(:first-child)': {
      borderLeft: `1px solid ${vars.color.divider}`,
      paddingLeft: '1rem',
    },
  },
});
