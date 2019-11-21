import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
import {
  absoluteFullWidth,
  absoluteFullHeight,
} from 'components/themes/_mixin';

export default styled('aside')`
  flex-basis: 20%;
  padding: 0 3rem;
  position: relative;

  margin: 1rem 0;
  box-shadow: ${({ themes }) => themes['shadow-three']};
  border-radius: 3px;
  margin-right: 1rem;
  background-color: ${({ themes }) => themes['color-white']};
  overflow: hidden;
  transition: all 0.2s;
  &.hide {
    flex-basis: 0%;
    padding: 1.5rem;

    & > h3,
    & > div {
      opacity: 0;
      visibility: hidden;
    }
  }
  &::after {
    ${absoluteFullHeight}
    width: 1rem;
    z-index: 3;
    background-color: ${({ themes }) => themes['color-black']};
  }

  ${respondTo.phone`
    &{
      flex-basis: 40%;
      margin-right: 0;
      padding: 1rem;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;

    }
    &::after {
   ${absoluteFullWidth}
    height: 5%;


  }
  &.hide {
    flex-basis: 10%;
  }
  `}
`;
