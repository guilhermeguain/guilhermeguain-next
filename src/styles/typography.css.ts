import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const Title = style({
  borderBottom: `1px solid ${vars.color.border}`,
  paddingBottom: '0.5rem',
  color: vars.color.secondary,
  fontSize: '1.5rem',
});
