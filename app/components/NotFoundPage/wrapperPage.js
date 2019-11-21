import styled from 'styled-components';

export default styled('div')`
  width: 100%;
  height: 100%;
  margin: 2rem 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ themes }) => themes['font-primary']};
  color: ${({ themes }) => themes['color-black']};
`;
