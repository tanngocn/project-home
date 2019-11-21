import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';

export default styled('div')`
  flex-basis: 20%;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  ${respondTo.phone`
    flex-basis: 100%;
    height: 50rem;
    margin-top: 2rem;
    flex-wrap: nowrap;
  `}
`;
