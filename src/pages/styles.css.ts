import { style } from '@vanilla-extract/css';

import { Content } from '@styles/layout.css';

export const CustomContent = style([
  Content,
  {
    gap: '2rem',

    '@media': {
      'screen and (min-width: 48rem)': {
        flexDirection: 'row',
      },
    },
  },
]);
