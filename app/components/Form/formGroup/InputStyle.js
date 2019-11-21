import styled from 'styled-components';

export default styled('input')`
  & {
    order: 2;
    width: 100%;
    border: none;
    border-bottom: 2px solid
      ${({ themes }) => themes['color-gray-dark'] || 'gray'};
    padding: 0.5rem 1rem;
    transition: all 0.2s;
    font-size: inherit;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ themes }) => themes['color-blue'] || 'white'};
  }

  &[type='radio'] {
    display: none;
  }
`;
