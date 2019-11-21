import styled from 'styled-components';

export default styled('nav')`
  background-color: ${({ themes }) => themes['color-primary']};
  padding: 0.2rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
