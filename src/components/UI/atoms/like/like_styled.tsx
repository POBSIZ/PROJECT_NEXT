import styled, { css } from 'styled-components';
import { LikeParamsType } from '.';

const StyledLike = styled.div.attrs((props) => ({}))<{ isLike: boolean }>`
  ${(props) => {
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const colorKeyGradient = props.theme.palette.$color_key_gradient;
    const iconColor = props.isLike
      ? props.theme.palette.$color_key_red
      : props.theme.palette.$color_disabled;
    return css`
      cursor: pointer;
      width: 100%;
      height: 100%;
      .Icon {
        will-change: color;
        width: 100%;
        height: 100%;
        color: ${iconColor};
        transition: all 0.2s;
      }
    `;
  }};
`;

export default StyledLike;
