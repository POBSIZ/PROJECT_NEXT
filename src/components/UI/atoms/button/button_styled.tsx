import styled, { css } from 'styled-components';

import { ButtonParamsType } from '.';

const StyledButton = styled.button.attrs((props: ButtonParamsType) => ({
  disabled: props.isDisabled,
}))<ButtonParamsType>`
  ${(props) => {
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const colorKeyGradient = props.theme.palette.$color_key_gradient;
    const colorKeyBlue = props.theme.palette.$color_key_blue;
    const colorKeyRed = props.theme.palette.$color_key_red;

    const bgColor =
      props.backColor === 'primary'
        ? `background-color: ${colorKeyBlue};`
        : props.backColor === 'gradient'
        ? `background-image: ${colorKeyGradient};`
        : props.backColor === 'black'
        ? `background-color: ${colorBaseBlack};`
        : props.backColor === 'red'
        ? `background-color: ${colorKeyRed};`
        : `background-color: ${colorBaseBlack};`;

    return css`
      background: ${colorBaseBlack};
      ${bgColor}
      /* background-size: 0; */
      background-repeat: no-repeat;
      /* color: ${colorBaseBlack}; */
      color: #fff;
      width: 100%;
      height: 45px;
      border: none;
      padding: 5px 10px;
      font-size: 1em;
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
