import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
import NavList from 'components/Header/navbar/NavList';
export default styled(NavList)`
  justify-content: flex-start;
  padding: 1rem 4rem;
  ${respondTo.phone`
   & {
     color: ${({ themes }) => themes['color-white']};
     flex-direction: row;
     justify-content: center;
     flex-wrap: wrap;
   }
`}
`;
