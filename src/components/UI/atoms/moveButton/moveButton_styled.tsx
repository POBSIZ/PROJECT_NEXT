// csc

import styled, { css } from 'styled-components';

import { MoveParamsType } from '.';

const StyledMoveButton = styled.a.attrs((props) => ({}))<MoveParamsType>`
  ${(props) => {
    const propsWidth = props.width;
    const propsHeight = props.height;
    const radius = props.radius;
    const colorKeyGradient = props.theme.palette.$color_key_gradient;
    const colorKeyBlue = props.theme.palette.$color_key_blue;
    const colorKeyRed = props.theme.palette.$color_key_red;
    const colorBaseBlack = props.theme.palette.$color_base_black;

    const backgroundColor =
      props.backColor == 'primary'
        ? `background-color: ${colorKeyBlue};`
        : props.backColor == 'gradient'
        ? `background-image: ${colorKeyGradient};`
        : 'transparent';

    const textColor =
      props.backColor == 'primary'
        ? '#fff'
        : props.backColor == 'gradient'
        ? '#fff'
        : colorBaseBlack;

    return css`
      ${backgroundColor}
      width: ${propsWidth};
      height: ${propsHeight};
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1em;
      color: ${textColor};
      padding: 10px 20px;
      font-weight: 500;
      border-radius: ${radius + 'px'};
    `;
  }};
`;

export default StyledMoveButton;
