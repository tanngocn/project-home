import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('div')`
  display: flex;
  width: 100%;
  height: 100vh;
  transition: all 0.2s;
  position: relative;


  ${respondTo.phone`
    flex-direction: column;
    padding: 1rem;

  `}
`;
