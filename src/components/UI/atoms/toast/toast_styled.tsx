import styled, { css } from 'styled-components';

import { ToastParamsTypes } from '.';

const StyledToast = styled.div.attrs((props) => ({}))<ToastParamsTypes>`
  ${(props) => {
    const colorKeyBlue = props.theme.palette.$color_key_blue;
    const colorD1Blue = props.theme.palette.$color_d1_blue;
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const isPop = props.is_pop ? '-105%' : '0%';
    const isPopOpacity = props.is_pop ? '100%' : '0%';
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      background-color: #fff;
      color: #000;
      border: 2px solid ${colorD1Blue};
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
      opacity: ${isPopOpacity};

      width: 100%;
      height: 50px;
      margin: 0;

      transform: translateX(${isPop});
      transition: all 0.5s;

      .type {
        height: 50px;
        width: 50px;
        background-color: ${colorD1Blue};
      }

      h2 {
        margin-right: 40%;
        text-align: center;
      }
    `;
  }};
`;

export default StyledToast;
