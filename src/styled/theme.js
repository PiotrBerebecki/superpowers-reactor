import { css } from 'styled-components';
import { lighten, darken } from 'polished';

const pallette = {
  blue: '#00aff0',
  white: '#ffffff',
  black: '#000000',
  grey: '#808080',
};

const mediaSizes = {
  phone: 376,
  tablet: 768,
  desktop: 992,
  giant: 1170,
};

const maxContentWidth = '48em';

// iterate through the mediaSizes and create media template
export const media = Object.keys(mediaSizes).reduce((acc, label) => {
  const emSize = mediaSizes[label] / 16;
  acc[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default {
  // colors
  colorPrimary: pallette.blue,
  colorPrimaryLight: lighten(0.02, pallette.blue),
  colorPrimaryDark: darken(0.01, pallette.blue),
  colorAccentOnPrimary: pallette.white,
  colorAccentOnPrimaryMuted: lighten(0.44, pallette.grey),
  colorBoxShadow: lighten(0.2, pallette.grey),
  colorBoxShadowLight: lighten(0.42, pallette.grey),
  colorWhiteBackground: pallette.white,
  colorFontMain: lighten(0.4, pallette.black),
  colorPuzzleItemBorder: lighten(0.42, pallette.grey),

  // font sizes
  fontSizLargeXX: '1.5rem',
  fontSizLargeX: '1.25rem',
  fontSizeLarge: '1.125em',
  fontSizeMedium: '1rem',
  fontSizeSmall: '0.9375rem',
  fontSizeSmallX: '0.875rem',
  fontSizeSmallXX: '0.8125rem',

  // spacing
  spaceS: '0.5rem',
  spaceM: '1rem',
  spaceL: '2rem',
  spaceXL: '4rem',

  // media
  widthContainer() {
    return media.desktop`
      max-width: ${maxContentWidth};
    `;
  },
};
