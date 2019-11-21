import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
import { absoluteFullHeight } from '../themes/_mixin';
export default styled('li')`
  height: auto;
  margin: 3rem 0;
  flex-basis: 45%;
  width: 45%;
  border-radius: 2rem;
  box-shadow: ${({ themes }) => themes['shadow-three']};
  background-color: ${({ themes }) => themes['color-white']};
  position: relative;
  padding: 1rem 4.5rem;

  &:nth-child(2n) {
    margin-left: auto;
    width: 50%;
  }

  &::after {
    ${absoluteFullHeight}
    width: 2rem;
    background-color: ${({ themes }) => themes['color-blue']};
    border-radius: 9rem 0 0 9rem;
  }
  ${respondTo.phone`
      &,
      &:nth-child(2n){
        width: 100%;
      }
  `}
`;
