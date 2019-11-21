import { css } from 'styled-components';
import qsr from '../../fonts/Quicksand-Regular.ttf';
import qsb from '../../fonts/Quicksand-Bold.ttf';
import qsl from '../../fonts/Quicksand-Light.ttf';
const font = css`
  @font-face {
    font-family: 'qsr';
    src: url(${qsr});
  }
`;
export const themes = {
  // Color
  'color-primary': '#d63031',
  'color-primary-light': '#e74c3c',
  'color-primary-dark': '#c0392b',
  'color-secondary': 'violet',
  'color-secondary-light': '#9b59b6',
  'color-secondary-dark': '#8e44ad',
  'color-black': '#222f3e',
  'color-white': '#fff',
  'color-gray-light': '#fafbfb',
  'color-gray-dark': '#7f8c8d',
  'color-green': '#2ecc71',
  'color-blue': '#2980b9',

  // font family
  'font-regular': `${font}`,
  'font-light': `${qsl}`,
  'font-bold': `${qsb}`,

  // size
  'default-size': '1.6*rem',

  // shadow
  'shadow-one': '0 0.8rem 1rem rgba(0, 0, 0, 0.2)',
  'shadow-two': '0 1rem 2rem rgba(0, 0, 0, 0.5)',
  'shadow-three': '0 0.5rem 0.8rem rgba(0, 0, 0, 0.4);',
};

export const breakpoints = {
  phone: '37.5em',
  tablet: '56.25em',
  desktop: '75em',
  bigDesktop: '112.5em',
};
