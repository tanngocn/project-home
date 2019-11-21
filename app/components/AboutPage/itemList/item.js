import styled from 'styled-components';

export default styled('li')`
  margin-bottom: 2rem;
  font-size: 1.4rem;

  &:nth-last-of-type() {
    margin-bottom: 0;
  }
`;
