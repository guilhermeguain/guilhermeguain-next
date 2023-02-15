import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css';

globalStyle('html', {
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  margin: 0,
  backgroundColor: vars.color.gray[800],
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre', {
  margin: 0,
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  color: vars.color.secondary[500],
  fontWeight: 400,
});

globalStyle('a', {
  textDecoration: 'inherit',
  color: 'inherit',
});

globalStyle('p', {
  color: vars.color.text.primary,
  textAlign: 'justify',
  lineHeight: 1.5,
});

globalStyle('ol, ul', {
  margin: 0,
  padding: 0,
});

globalStyle('select', {
  border: 0,
});
