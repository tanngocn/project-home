import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('li')`
  display: inline-block;
  list-style: none;
  /* transition: all 0.2s; */
  border-bottom: 2px solid ${({ themes }) => themes['color-primary']};
  text-align: center;
  transition: all 0.2s;
  transition-delay: 0.2s;

  &:active,
  &:hover a {
    background-color: ${({ themes }) => themes['color-white']};
    color: ${({ themes }) => themes['color-primary']};
  }
  &:not(:first-of-type) {
    margin-left: 1rem;
  }

  ${respondTo.phone`
    &:not(:first-of-type) {
    margin-left: 0rem;
    margin-top: 0.2rem;

  }
      & {
        display: block;
        width: 100%;
        height: auto;
        border-bottom: none;
      }

`}
`;
