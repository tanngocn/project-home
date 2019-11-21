import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';

export default styled('h3')`
  font-size: 2.3rem;
  position: relative;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  display: inline-block;
  margin: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60%;
    height: 3px;
    background-color: ${({ themes }) => themes['color-primary']};
  }

  ${respondTo.phone`
  &{
    width: 100%;
    margin-bottom: 1rem;

  }

  &::after {
    width: 15%;
  }
  `}
`;
