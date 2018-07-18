// For full theme documentation, see:
// https://github.com/jxnblk/styled-system

/* eslint-disable no-multi-spaces */

export const spacing = {
  none: 0, // 0
  xxs: 4, // 1
  xs: 8, // 2
  s: 12, // 3
  m: 16, // 4
  l: 24, // 5
  xl: 32, // 6
  xxl: 64, // 7
};

export const weights = {
  light: 300,
  normal: 400,
  medium: 600,
  bold: 700,
};

export const theme = {
  breakpoints: [32, 48, 64, 80],
  space: Object.values(spacing),
  fonts: {
    // sans: 'centrano2, sans-serif',
    // mono: '"Roboto Mono", Menlo, monospace',
  },
  fontSizes: [
    12, // 0
    14, // 1
    16, // 2
    20, // 3
    24, // 4
    32, // 5
    48, // 6
    64, // 7
    72, // 8
    96, // 9
  ],
  weights: Object.values(weights),
  colors: {
    background: '#ffffff',
    text: '#000000',
    white: 'white',
    grey: 'grey',
    lightGrey: '#DDDDDD',
    black: 'black',
    red: 'red',
    orange: 'orange',
    yellow: 'yellow',
    green: 'green',
    blue: 'blue',
    transparent: 'transparent',
  },
  radii: [0, 2, 4],
};
