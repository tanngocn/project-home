import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';

export default styled('div')`
  flex-basis: 40%;
  width: 100%;
  background-color: ${({ themes }) => themes['color-white']};
  color: ${({ themes }) => themes['color-black']};
  font-family: ${({ themes }) => themes['font-regular']};
  padding: 2rem;
  border-radius: 0.5rem 0 0 0.5rem;
  box-shadow: ${({ themes }) => themes['shadow-one']};
  ${respondTo.phone`
    &{
      flex-basis:100%;
      border-radius: 0.5rem;
    }
`}
`;
