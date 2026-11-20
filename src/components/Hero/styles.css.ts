import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

import { Content } from '@styles/layout.css';

export const Container = style({
  backgroundImage: "url('/images/bg-hero.webp')",
  position: 'relative',
  zIndex: 10,
});

export const CustomContent = style([
  Content,
  {
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '.5rem',
  },
]);

export const Badge = style({
  order: 3,
  marginTop: '.25rem',
  padding: '.3rem .75rem',
  borderRadius: '999px',
  backgroundColor: 'rgba(3, 67, 48, 0.72)',
  color: vars.color.secondary[50],
  fontSize: '.8125rem',
  fontWeight: 600,
  lineHeight: 1.2,
});

export const Role = style({
  order: 2,
  fontSize: '1.25rem',
  lineHeight: 1.2,
  color: vars.color.text.primary,

  '@media': {
    'screen and (min-width: 30rem)': {
      fontSize: '2rem',
    },
    'screen and (min-width: 48rem)': {
      fontSize: '2.5rem',
    },
  },
});

export const Name = style({
  order: 1,
  color: vars.color.gray[500],
  fontSize: '1.25rem',

  '@media': {
    'screen and (min-width: 30rem)': {
      fontSize: '1.875rem',
    },
  },
});

export const Desc = style({
  margin: '.5rem 0',
  order: 4,
  color: vars.color.text.secondary,
  lineHeight: 1.5,

  '@media': {
    'screen and (min-width: 30rem)': {
      fontSize: '1.25rem',
    },
  },
});

export const Badges = style({
  marginTop: '1.5rem',
  borderRadius: '1.5rem',
  padding: '.5rem 1.5rem',
  display: 'flex',
  gap: '1rem',
  backgroundColor: vars.color.primary[400],
  fontSize: '1.5rem',
  order: 5,
  color: '#fff',
});
