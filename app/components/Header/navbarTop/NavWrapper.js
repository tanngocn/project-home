import styled from 'styled-components';
import NavWrapper from 'components/Header/navbar/NavWrapper';
export default styled(NavWrapper)`
  background-color: ${({ themes }) => themes['color-black']};
`;
