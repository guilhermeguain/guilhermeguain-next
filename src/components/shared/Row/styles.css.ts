import { style } from '@vanilla-extract/css';

import { Content } from '@styles/layout.css';

export const CustomContent = style([
  Content,
  {
    '@media': {
      'screen and (min-width: 48rem)': {
        flexDirection: 'row',
        gap: '2rem',
      },
    },
  },
]);
