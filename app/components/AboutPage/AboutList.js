import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('ul')`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  align-items: space-between;
  height: 100%;

  ${respondTo.phone`
    &{
      padding:0;
      flex-direction: column;
    }
  `}
`;
