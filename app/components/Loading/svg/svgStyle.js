import styled, { keyframes } from 'styled-components';
const animation = keyframes`
    0%{
      transform: scale(1);
      transform-origin: center;
    }
    20%{
      transform: scale(1.5);
      transform-origin: center;
    }
    40%{
      transform: scale(1);
      transform-origin: center;
    }
    60%{
      transform: scale(1.5);
      transform-origin: center;
    }
    100%{
      transform: scale(1);
      transform-origin: center;
    }

`;
export default styled('svg')`
  width: 20rem;
  fill: ${({ themes }) => themes['color-primary']} !important;
  animation: ${animation} 2s infinite linear;
`;
