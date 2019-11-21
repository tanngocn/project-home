import { css } from 'styled-components';
import { breakpoints } from './_variables';

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media only screen and (max-width: ${breakpoints[label]}) {
        ${css(...args)}
      }
    `;
    return accumulator;
  },
  {},
);
