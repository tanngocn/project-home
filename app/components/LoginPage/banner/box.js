import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('div')`
  flex-basis: 40%;
  background-image: url(${({ cake1 }) => cake1});
  background-size: cover;
  background-position-x: -3rem;
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 0 3rem;
  text-align: center;

  ${respondTo.phone`
   & {
    display:none;
   }

`}
`;
