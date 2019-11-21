import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
import NavLink from 'components/Header/navbar/NavLink';
export default styled(NavLink)`
  &:visited,
  &:link {
    padding: 0.1rem;
    color: ${({ themes }) => themes['color-white']};
  }
  ${respondTo.phone` {
      & {
            width: 100%;
            border-radius: 0rem;
            background-color: ${({ themes }) => themes['color-black']};
    }
`}
`;
