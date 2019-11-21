import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { respondTo } from 'components/themes/_respondTo';

export default styled(Link)`
  display: inline-flex;
  height: 4rem;

  ${respondTo.phone`
    margin-top: 2rem;
  `}
`;
