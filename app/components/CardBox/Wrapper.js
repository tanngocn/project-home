import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';

export default styled('div')`
  flex-basis: 100%;
  margin: 2rem 0rem;
  display: flex;
  flex-wrap: wrap;
  ${respondTo.phone`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
  `}
`;
