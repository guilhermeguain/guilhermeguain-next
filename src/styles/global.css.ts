import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css';

globalStyle('html', {
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  backgroundColor: 'gray.800',
});

globalStyle('p', {
  color: vars.color.text,
  textAlign: 'justify',
});
