import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const vars = {
  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    '1/2': '50%',
    '1/5': '20%',
  },
};

const responsiveStyles = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'grid'],
    flexDirection: ['row', 'column'],
    marginTop: vars.space,
    marginBottom: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
  },
  shorthands: {
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

export const atoms = createSprinkles(responsiveStyles);
