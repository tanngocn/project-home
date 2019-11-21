import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('div')`
  margin-left: auto;
  ${respondTo.phone`
    display: flex;
    padding: 0 1rem;
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
  `}
`;
