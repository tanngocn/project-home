import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';

export default styled('p')`
  font-size: 1.4rem;
  line-height: 1.7;
  font-family: inherit;
  display: none;
  ${respondTo.phone`
    display: inline-block;
  `}
`;
