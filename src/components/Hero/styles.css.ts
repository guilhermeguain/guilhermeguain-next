import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

import { Content } from '@styles/layout.css';

export const Container = style({
  backgroundImage: "url('/images/bg-hero.jpg')",
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

export const Role = style({
  order: 2,
  fontSize: '1.125rem',
  lineHeight: 1,
  color: vars.color.text.primary,

  '@media': {
    'screen and (min-width: 30rem)': {
      fontSize: '3rem',
    },
  },
});

export const Name = style({
  order: 1,
  color: vars.color.gray[500],

  '@media': {
    'screen and (min-width: 30rem)': {
      fontSize: '1.875rem',
    },
  },
});

export const Desc = style({
  margin: '.5rem 0',
  order: 3,
  color: vars.color.text.secondary,

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
  order: 4,
  color: '#fff',
});
