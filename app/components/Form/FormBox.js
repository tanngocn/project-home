import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('div')`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  width: 85%;

  ${respondTo.phone`
     width: 100%;
     margin: 1rem;
     box-shadow: 0 1rem 2rem rgba(0,0,0,0.3);
  `}
`;
