import styled from 'styled-components';
import { respondTo } from 'components/themes/_respondTo';
export default styled('ul')`
  display: flex;
  margin: 0;
  justify-content: flex-start;
  align-items: center;
  color: ${({ themes }) => themes['color-white']};
  ${respondTo.phone`
   & {
     align-items: center;
     flex-direction: column;
     padding:0;
     transition: all 0.2s;
     opacity:1;
     height: ${({ coefficient }) => `${coefficient}rem` || 'auto'};
     visibility: visible;
   }
   &.hide{
     height:0;
     opacity:0;
     visibility: hidden;

   }
   &.hide > li{
     height:0rem;
     opacity:0;
     visibility: hidden;
   }
`}
`;
