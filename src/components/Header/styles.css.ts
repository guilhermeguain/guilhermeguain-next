import { style } from '@vanilla-extract/css';

import { Content } from '@styles/layout.css';

export const Container = style({});

export const ContainerOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 5,
  backgroundColor: 'rgba(26,32,44,0.7)',
});

export const ContainerContent = style([
  Content,
  {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  },
]);
