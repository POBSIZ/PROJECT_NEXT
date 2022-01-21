import styled, { css } from 'styled-components';

import { BadgeParamsType } from '.';

const StyledBadge = styled.span.attrs((props) => ({}))<BadgeParamsType>`
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
        : 'background-color: transparent;';

    const textColor = props.backColor == 'none' ? colorBaseBlack : '#fff';
    return css`
      ${bgColor};
      color: ${textColor};
      width: fit-content;
      height: auto;
      padding: 2px 4px;
      font-size: 12px;
      border-radius: 3px;
    `;
  }};
`;

export default StyledBadge;
