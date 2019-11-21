import styled from 'styled-components';

export default styled('div')`
  flex-basis: 100%;
  width: 100%;
  padding: 0 2rem;
  margin: 1rem 0;
  box-shadow: ${({ themes }) => themes['shadow-three']};
  background-color: ${({ themes }) => themes['color-white']};
`;
