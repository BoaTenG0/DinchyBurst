import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width='100%' // Set width to 100%
    height='100%' // Set height to 100%
    viewBox='0 0 370 232' // Ensure viewBox covers the entire SVG content
    preserveAspectRatio='xMidYMid meet' // Preserve aspect ratio and center the SVG
    {...props}
  >
    <Path
      fill='#9087E5'
      d='M244.223 0H22.263C14.865 0 .068 4.522.068 22.608v179.903C-.637 212.34 3.873 232 27.548 232h317.085c8.456-.655 25.367-5.772 25.367-21.5V99c0-17-3.316-37.5-29.528-37.5H313.35c-7.265 0-18.507 0-30.027-5-5.285-2.294-17.92-11-16.467-36.5.627-11-8.717-20-22.633-20Z'
    />
  </Svg>
);

export default SvgComponent;
