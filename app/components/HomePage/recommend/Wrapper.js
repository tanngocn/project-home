import styled from 'styled-components';

export default styled('div')`
  display: flex;
  color: ${({ themes }) => themes['color-black']};
  margin-top: 2rem;
  flex-wrap: wrap;
`;
