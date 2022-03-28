import styled, { css } from 'styled-components';
import { ModalParamsType } from '.';
import { GlobalStyleType } from 'StyleVars';

export const StyledModalContent = styled.div.attrs(
  (props) => ({}),
)<ModalParamsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const colorBaseBlack = Theme.palette.$color_base_black;
    const colorKeyGradient = Theme.palette.$color_key_gradient;
    const colorKeyBlue = Theme.palette.$color_key_blue;
    const bgColor =
      props.backColor === 'primary'
        ? `background-color: ${colorKeyBlue}; color: #fff;`
        : props.backColor === 'gradient'
        ? `background-image: ${colorKeyGradient}; color: #fff;`
        : props.backColor === 'black'
        ? `background-color: ${colorBaseBlack}; color: #fff;`
        : props.backColor === 'white'
        ? `background-color: #fff;`
        : `background-color: #fff;`;
    return css`
      width: ${props.width};
      padding: 2%;
      ${bgColor}
    `;
  }}
`;

const StyledModal = styled.div.attrs((props) => ({}))<ModalParamsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const color_base_line = Theme.palette.$color_base_line;
    const isShow = props.isShow ? 'display: flex;' : 'display: none;';
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100%;
      height: 100vh;
      background-color: ${color_base_line};
      ${isShow}
    `;
  }};
`;

export default StyledModal;
