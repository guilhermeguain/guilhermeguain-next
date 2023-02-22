import { recipe } from '@vanilla-extract/recipes';

export const Container = recipe({
  base: {
    margin: 12,
    borderRadius: 6,
    padding: '12px 24px',
  },
  variants: {
    color: {
      neutral: {
        backgroundColor: 'whitesmoke',
      },
      accent: {
        backgroundColor: 'blueviolet',
      },
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
    },
    rounded: {
      true: { borderRadius: 999 },
    },
  },
});

// import { atoms } from '@styles/sprinkles.css';

// export const Container = atoms({
//   display: 'flex',
//   marginY: {
//     mobile: 'small',
//     tablet: 'medium',
//     desktop: 'large',
//   },
//   paddingY: 'medium',
//   paddingX: 'small',
//   flexDirection: {
//     mobile: 'column',
//     desktop: 'row',
//   },
// });
