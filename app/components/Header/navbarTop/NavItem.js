import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
import NavItem from 'components/Header/navbar/NavItem';
export default styled(NavItem)`
  color: ${({ themes }) => themes['color-white']};
  border-bottom: none;
  &.top:active,
  &.top:hover a {
    color: ${({ themes }) => themes['color-primary']};
    background-color: ${({ themes }) => themes['color-white']};
  }
  &:active,
  &:hover a {
    color: ${({ themes }) => themes['color-primary']};
    background-color: ${({ themes }) => themes['color-black']};
    transform: translateY(-0.1rem);
  }
  & a {
    color: ${({ themes }) => themes['color-white']};
  }
  ${respondTo.phone`
      & {
        width: 100%;
        color: ${({ themes }) => themes['color-white']};
        background-color: ${({ themes }) => themes['color-black']};
      }
      &:not(:first-of-type) {
        margin:0;

  }
`}
`;
