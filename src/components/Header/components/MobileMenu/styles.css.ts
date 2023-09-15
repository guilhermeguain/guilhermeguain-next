import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const Button = style({
  margin: 0,
  border: 'none',
  padding: '.5rem',
  backgroundColor: 'transparent',
  color: vars.color.border,

  '@media': {
    'screen and (min-width: 48rem)': {
      display: 'none',
    },
  },
});

export const MenuBase = style({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  height: '100vh',
});

export const Menu = styleVariants({
  default: [MenuBase],
  hidden: [
    MenuBase,
    {
      zIndex: -1,
      height: '0vh',
    },
  ],
});

export const Overlay = style({
  backgroundColor: 'rgba(0,0,0,0.5)',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  opacity: 1,
  transition: 'opacity .5s cubic-bezier(0.820, 0.085, 0.395, 0.895)',

  selectors: {
    '&[aria-hidden=true]': {
      opacity: 0,
    },
  },
});

export const Drawer = style({
  padding: '1rem 1rem 1rem 2rem',
  position: 'absolute',
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  transition: 'right .5s cubic-bezier(0.820, 0.085, 0.395, 0.895)',
  backgroundColor: vars.color.gray[200],
  boxShadow: '10px 10px 20px 10px rgba(0,0,0,0.4)',
  maxHeight: '100%',

  selectors: {
    '&[aria-expanded=true]': {
      right: 0,
    },
  },
});

export const DrawerHeader = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const DrawerContent = style({
  paddingTop: '1rem',
  paddingBottom: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  minWidth: '12rem',
  flex: 1,
});

export const Link = style({
  color: vars.color.gray[700],

  selectors: {
    '&:hover, &[aria-current=true]': {
      color: vars.color.secondary[500],
    },
  },
});
