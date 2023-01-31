import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css';

globalStyle('html', {
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  backgroundColor: 'gray.800',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  color: vars.color.secondary,
});

globalStyle('p', {
  color: vars.color.text.primary,
  textAlign: 'justify',
});
