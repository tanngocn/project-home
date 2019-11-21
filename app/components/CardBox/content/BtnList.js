import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';

export default styled('div')`
  flex-basis: 50%;
  margin-left: 1rem;

  ${respondTo.phone`
    flex-basis: 60%;
    order:3;
    margin-left: auto;
    text-align: center;
  `}
`;
