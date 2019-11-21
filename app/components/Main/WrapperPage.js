import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('main')`
  flex: 1;
  padding: 0 4.5rem;
  min-height: 100vh;
  background-color: ${({ themes }) =>
    themes ? themes['color-gray-light'] : 'white'};

  ${respondTo.phone`
    &{
      padding:0;
    }
  `}
`;
