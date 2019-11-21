import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('button')`
  & {
    border: none;
    padding: 0 0.5rem;
    cursor: pointer;
    background-color: transparent;
    text-align: center;
    height: 5rem;
    line-height: 5rem;
    display: none;
    transition: all 0.2s;
    background-color: ${({ themes }) => themes['color-primary']};
    & span {
      margin-right: 1rem;
      width: 4rem;
      height: 0.4rem;
      line-height: 1.5px;
      background-color: ${({ themes }) => themes['color-white']};
      position: relative;
      display: inline-block;
      margin: auto;
      /* transition: all 0.2s; */
      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 4rem;
        height: 0.4rem;
        line-height: 1.5px;
        background-color: white;
        left: 0;
        transition: all 0.2s;
      }

      &::before {
        top: -1rem;
      }

      &::after {
        top: 1rem;
      }
    }

    & span.active {
      background-color: transparent;
      &::before {
        transform: rotate(45deg);
        top: 0rem;
      }
      &::after {
        transform: rotate(-45deg);
        top: 0rem;
      }
    }
  }

  &:focus {
    outline: none;
  }

  ${respondTo.phone` {
    & {
        display: inline-flex;
        padding: 2rem 0;
    }
`}
`;
