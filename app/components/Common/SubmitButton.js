import styled from 'styled-components';

export default styled('button')`
  margin-left: auto;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  background-color: ${({ themes }) => themes['color-blue']};
  transition: all 0.2s;
  font-size: 1.4rem;
  color: ${({ themes }) => themes['color-white']};
  cursor: pointer;
  border: 1px solid ${({ themes }) => themes['color-white']};

  &:hover {
    border: 1px solid ${({ themes }) => themes['color-black']};
    background-color: ${({ themes }) => themes['color-white']};
    color: ${({ themes }) => themes['color-black']};
  }
`;
