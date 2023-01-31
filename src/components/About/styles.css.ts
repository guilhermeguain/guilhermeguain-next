import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const Intro = style({
  paddingTop: '4rem',
  paddingBottom: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  alignItems: 'center',

  '@media': {
    'screen and (min-width: 30rem)': {
      paddingTop: '5rem',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  },
});

export const Avatar = style({
  borderRadius: '50%',
});

export const IntroContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  flex: 1,
  textAlign: 'center',
  width: '100%',

  '@media': {
    'screen and (min-width: 30rem)': {
      textAlign: 'left',
    },
  },
});

export const Name = style({
  borderBottom: `1px solid ${vars.color.border}`,
  paddingBottom: '0.5rem',
  color: vars.color.secondary,
  fontSize: '1.5rem',
});

export const Role = style({
  color: vars.color.text,
  fontSize: '1.125rem',
  fontWeight: 500,
});

export const Contacts = style({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',

  '@media': {
    'screen and (min-width: 30rem)': {
      justifyContent: 'flex-start',
    },
  },
});

export const ContactsItem = style({});

export const ContactsItemSvg = style({
  fill: vars.color.text,
  color: vars.color.text,
});

export const Main = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '@media': {
    'screen and (min-width: 62rem)': {
      flexDirection: 'row',
    },
  },
});

export const Column = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const Text = style({
  marginBottom: '2rem',
  selectors: {
    '&:last-of-type': {
      marginBottom: '1rem',
    },
  },
});

export const List = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const ListItem = style({
  display: 'flex',
  alignItems: 'baseline',
  fontSize: '0.875rem',
  lineHeight: '1.625',
});

export const ListItemIcon = style({
  marginRight: '.5rem',
  fill: vars.color.secondary,
  display: 'none',

  '@media': {
    'screen and (min-width: 30rem)': {
      display: 'initial',
    },
  },
});

export const ListItemText = style({
  flex: 1,
});

export const ListItemPrefix = style({
  color: vars.color.secondary,
  fontWeight: 500,
});

export const Boxes = style([
  Column,
  {
    gap: '2rem',
    flexDirection: 'column',
    alignItems: 'center',
  },
]);

export const BoxesGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '@media': {
    'screen and (min-width: 48rem)': {
      flexDirection: 'row',
    },
  },
});
