import { style, keyframes } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

const progressAnimation = keyframes({
  from: {
    backgroundPosition: '1rem 0',
  },
  to: {
    backgroundPosition: '0 0',
  },
});

export const Container = style({
  borderRadius: '.75rem',
  flex: 1,
  backgroundColor: vars.color.gray[50],
  overflow: 'hidden',
});

export const Header = style({
  padding: '.5rem 1rem',
  backgroundColor: vars.color.tertiary[100],
});

export const HeaderTitle = style({
  lineHeight: 1,
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: vars.color.gray[800],
});

export const List = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const ListItem = style({});

export const ListItemTitle = style({
  fontSize: '.75rem',
  fontWeight: 700,
  lineHeight: 1,
  textTransform: 'uppercase',
  color: vars.color.text.alternative,
});

export const ListItemProgress = style({
  borderRadius: '.75rem',
  height: '.5rem',
  backgroundColor: vars.color.gray[300],
});

export const ListItemProgressInner = style({
  margin: '.5rem 0',
  borderRadius: '.75rem',
  height: '100%',
  transitionProperty:
    'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
  transitionDuration: '300',
  backgroundImage:
    'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
  backgroundSize: '1rem 1rem',
  backgroundColor: vars.color.tertiary[500],
  animation: `${progressAnimation} 1s linear infinite`,
});
