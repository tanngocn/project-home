import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { respondTo } from 'components/themes/_respondTo';
export default styled(NavLink)`
  &:visited,
  &:link {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
    height: 4rem;
    line-height: 4rem;
    display: inline-block;
    font-size: 1.4rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0.1rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }

  ${respondTo.phone` {
      & {
            display: block;
            width: 90%;
            border-radius: 0rem;
            background-color: ${({ themes }) => themes['color-primary']};
    }
`}
`;
