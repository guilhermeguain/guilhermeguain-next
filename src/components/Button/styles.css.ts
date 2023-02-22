import { atoms } from '@styles/sprinkles.css';

export const Container = atoms({
  display: 'flex',
  marginY: {
    mobile: 'small',
    tablet: 'medium',
    desktop: 'large',
  },
  paddingY: 'medium',
  paddingX: 'small',
  flexDirection: {
    mobile: 'column',
    desktop: 'row',
  },
});
