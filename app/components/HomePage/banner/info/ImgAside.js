import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';

export default styled('img')`
  flex-basis: 100%;
  display: inline-block;
  height: 48%;
  width: 100%;
  border-radius: 0.3rem;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  ${respondTo.phone`
      &{
        width: 45%;
        flex-basis: 50%;
      }

  &:not(:last-of-type) {
    margin-bottom: 0rem;
    margin-right: 2rem;
  }
  `}
`;
