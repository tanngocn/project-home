import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('div')`
  display: flex;
  height: 50rem;
  margin-top: 2rem;

  ${respondTo.phone`
    flex-direction: column;
    height: auto;
    padding: 1rem;
    margin-top: 1rem;
  `}
`;
