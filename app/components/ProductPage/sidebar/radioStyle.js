import styled from 'styled-components';
import FormGroup from 'components/Form/formGroup/style';
import { respondTo } from 'components/themes/_respondTo';
export default styled(FormGroup)`
  margin-bottom: 0;
  margin-top: 2rem;

  ${respondTo.phone`
    margin-top: 0rem;
  `}
`;
