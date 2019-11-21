import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('div')`
  width: 70%;

  ${respondTo.phone`
    width: 100%;
    flex-basis: 50%;
  `}
`;
