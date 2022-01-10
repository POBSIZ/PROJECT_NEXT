import styled, { css } from 'styled-components';

import { ButtonParamsType } from '.';

const StyledButton = styled.button.attrs((props) => ({}))<ButtonParamsType>`
  ${(props) => {
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const colorKeyGradient = props.theme.palette.$color_key_gradient;

    const bgColor =
      props.backColor === 'primary'
        ? `background-color: ${colorBaseBlack};`
        : props.backColor === 'gradient'
        ? `background-image: ${colorKeyGradient};`
        : colorBaseBlack;

    return css`
      background: ${colorBaseBlack};
      ${bgColor}
      /* background-size: 0; */
      background-repeat: no-repeat;
      /* color: ${colorBaseBlack}; */
      color: #fff;
      margin: 5px 0;
      width: 100%;
      height: 45px;
      border: none;
      padding: 5px 10px;
      font-size: 1.4em;
      font-weight: 500;
      outline: none;
      cursor: pointer;
      transition: all 0.3s;

      /* &:hover {
        background-size: 100%;
        color: #fff;
      } */
    `;
  }};
`;

export default StyledButton;
