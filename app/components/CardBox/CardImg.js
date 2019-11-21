import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';

export default styled('img')`
  width: 100%;

  ${respondTo.phone`
      width: 100%;
  `}
`;
