// csc

import styled, { css } from 'styled-components';

import { MoveParamsType } from '.';

const StyledMoveButton = styled.a.attrs((props) => ({}))<MoveParamsType>`
  ${(props) => {
    const propsWidth = props.width;
    const propsHeight = props.height;
    const radius = props.radius;
    const colorKeyBlue = props.theme.palette.$color_key_blue;
    const colorKeyRed = props.theme.palette.$color_key_red;
    const colorBaseBlack = props.theme.palette.$color_base_black;
    return css`
      width: ${propsWidth};
      height: ${propsHeight};
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1.4em;
      color: #fff;
      padding: 10px 20px;
      font-weight: 500;
      background-color: ${colorKeyBlue};
      border-radius: ${radius + 'px'};
    `;
  }};
`;

export default StyledMoveButton;
