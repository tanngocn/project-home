import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { respondTo } from 'components/themes/_respondTo';
export default styled(Link)`
  display: inline-block;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: white;
  margin-left: 0.3rem;
  border-radius: 0.4rem;
  border: 1px solid white;
  transition: all 0.2s;

  &.--buy:hover,
  &.--view:hover,
  &.--like:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }

  &.--buy {
    background-color: #5454f5;
  }
  &.--view {
    background-color: #54f591;
  }
  &.--like {
    background-color: #d63031;
  }

  ${respondTo.phone`
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
  `}
`;
