import styled from 'styled-components';
import { directionColumnFlexCenter } from 'components/themes/_mixin';
import { respondTo } from 'components/themes/_respondTo';

export default styled('div')`
  width: 23%;
  height: auto;
  padding: 2rem;
  border-radius: 1rem;
  ${directionColumnFlexCenter}
  margin-top: 4rem;
  box-shadow: 0 0.5rem 2em 0.5rem rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &:not(:nth-child(4n + 1)) {
    margin-left: 3.33rem;
  }

  ${respondTo.phone`
    width: 100%;
    margin-top: 2rem;
    flex-direction:row;

    &:not(:nth-child(4n + 1)) {
    margin-left: 0rem;
  }
  `}
`;
