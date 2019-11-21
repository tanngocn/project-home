import React from 'react';
import WrapperPage from 'components/Main/WrapperPage';
import G from 'components/Loading/svg/gSvg';
import SVG from 'components/Loading/svg/svgStyle';
import SVGBox from 'components/Loading/svg/svgBox';
import { themes } from 'components/themes/_variables';
function Loading() {
  const d1 =
    'M73.4,12.6c0-0.7-0.2-1.4-0.5-2h0l0,0c0,0,0,0,0,0l-3-5.4l-3,5.4c0,0,0,0,0,0l0,0h0c-0.3,0.6-0.5,1.3-0.5,2c0,2.2,1.6,3.9,3.5,3.9C71.8,16.5,73.4,14.7,73.4,12.6z';
  const d2 =
    'M124.6,75.7h-9.3V62.3c0-4-3.2-7.3-7.3-7.3h-7.4V41c0-3.3-2.7-6-6-6H72.1V16.5h-2.2h-2.2v18.6H45c-3.3,0-6,2.7-6,6v14h-7.4c-4,0-7.3,3.2-7.3,7.3v13.4h-9.3c-5.9,0-10.6,4.8-10.6,10.6v24.7c0,5.9,4.8,10.6,10.6,10.6h109.6c5.9,0,10.6-4.8,10.6-10.6V86.4C135.3,80.5,130.5,75.7,124.6,75.7z';
  return (
    <WrapperPage>
      <SVGBox>
        <SVG viewBox=" -30 -30 200 200" themes={themes}>
          <G>
            <path d={d1} />
            <path d={d2} />
          </G>
        </SVG>
      </SVGBox>
    </WrapperPage>
  );
}
export default Loading;
