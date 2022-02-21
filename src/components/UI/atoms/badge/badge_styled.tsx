import styled, { css } from 'styled-components';

import { BadgeParamsType } from '.';

const StyledBadge = styled.span.attrs((props) => ({}))<BadgeParamsType>`
  ${(props) => {
    const bgColor = {
      primary: '#3182F6',
      secondary: '#1E1E1E',
      success: '#2ECC71',
      warning: '#F1C40F',
      error: '#E74C3C',
      disabled: '#1E1E1E80',
    };
    const size = {
      small: {
        height: '20px',
        font: '10px',
      },
      medium: {
        height: '22px',
        font: '12px',
      },
    };
    const radius = props.radius;

    const colorBaseBlack = props.theme.palette.$color_base_black;
    const colorKeyGradient = props.theme.palette.$color_key_gradient;
    const colorKeyBlue = props.theme.palette.$color_key_blue;
    const colorKeyRed = props.theme.palette.$color_key_red;

    const textColor = props.backColor == 'none' ? colorBaseBlack : '#fff';
    return css`
      background: ${bgColor[props.backColor]};
      color: ${textColor};
      width: auto;
      height: ${size[props.size].height};
      padding: 4px 10px;
      font-size: ${size[props.size].font};
      border-radius: 3px;

      border-radius: ${radius};
      align-items: center;
      align-content: center;
      justify-content: center;
      display: flex;
    `;
  }};
`;

export default StyledBadge;
