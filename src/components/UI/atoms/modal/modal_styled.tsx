import styled, { css } from 'styled-components';
import { ModalParamsType } from '.';

const StyledModal = styled.header.attrs((props) => ({}))<ModalParamsType>`
  ${(props) => {
    const propsWidth = props.width;
    const propsHeight = props.height;
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
        : `background-color: ${colorBaseBlack}`;
    return css`
      width: ${propsWidth};
      height: ${propsHeight};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #fff;
      ${bgColor};
      overflow: hidden;
      h4,
      p,
      div {
        padding: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
      p {
        flex: 1;
      }
      div {
        text-align: right;
        button {
          border: none;
          padding: 3px 6px;
          background: transparent;
          color: inherit;
          cursor: pointer;
        }
      }
    `;
  }};
`;

export default StyledModal;
