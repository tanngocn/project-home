import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('span')`
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translate(-50%, -50%) rotate(90deg);
  display: inline-block;
  padding: 0.6rem;
  font-size: 1.3rem;
  text-align: right;
  color: ${({ themes }) => themes['color-white']};
  background-color: ${({ themes }) => themes['color-black']};
  cursor: pointer;
  z-index: 2;
  transition: all 0.2s;
  &:hover,
  &.active {
    background-color: ${({ themes }) => themes['color-blue']};
  }

  ${respondTo.phone`
  &{
    top: -10%;
    transform: translate(-50%, -50%) rotate(0deg);
    left: 50%;
  }

    &:hover,
    &.active{
    top: 2rem;
    background-color: ${({ themes }) => themes['color-blue']};
  }

  `}
`;
