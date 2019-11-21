import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('div')`
  flex-basis: 78%;
  width: 100%;
  height: 100%;

  ${respondTo.phone`
    flex-basis: 100%;
  `}
`;
