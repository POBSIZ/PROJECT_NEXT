import styled, { css } from 'styled-components';

import { ProgressBarParamsType } from '.';

const StyledProgressBar = styled.div.attrs(
  (props) => ({}),
)<ProgressBarParamsType>`
  ${(props) => {
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const colorKeyGradient = props.theme.palette.$color_key_gradient;
    const colorKeyBlue = props.theme.palette.$color_key_blue;
    const colorKeyRed = props.theme.palette.$color_key_red;

    const prwidth = props.prwidth;
    const bgcolor =
      props.bgcolor == 'blue'
        ? `background-color : ${colorKeyBlue};`
        : props.bgcolor == 'black'
        ? `background-color : ${colorBaseBlack};`
        : props.bgcolor == 'gradient'
        ? `background-image: ${colorKeyGradient};`
        : 'transparent';
    return css`
      width: 100%;
      height: ${props.height};
      background-color: rgb(233, 233, 233);
      border-radius: 0.5rem;
      .progress {
        ${bgcolor}
        height: 100%;
        border-radius: 1rem;
        width: ${prwidth};
      }
    `;
  }};
`;

export default StyledProgressBar;
