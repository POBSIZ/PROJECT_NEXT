import styled, { css } from 'styled-components';

import { ToastPropsTypes } from '.';

const StyledToast = styled.div.attrs((props) => ({}))<ToastPropsTypes>`
  ${(props) => {
    const colorKeyBlue = props.theme.palette.$color_key_blue;
    const colorD1Blue = props.theme.palette.$color_d1_blue;
    const colorSuccess = props.theme.palette.$color_success;
    const colorWarning = props.theme.palette.$color_warning;
    const colorFailure = props.theme.palette.$color_failure;
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const isPop = props.is_pop ? '-50%' : '100%';
    const isPopOpacity = props.is_pop ? '100%' : '0%';
    const themeColor =
      props.status === 'default'
        ? colorBaseBlack
        : props.status === 'error'
        ? colorFailure
        : props.status === 'warning'
        ? colorWarning
        : props.status === 'success'
        ? colorSuccess
        : '#fff';
    const mediaMinMaxWidth = props.theme.media.$min_max_width;

    return css`
      position: fixed;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      background-color: ${themeColor};
      color: #fff;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
      opacity: ${isPopOpacity};

      width: 300px;
      height: 45px;
      margin: 0;

      left: 50%;
      transform: translateX(-50%) translateY(${isPop});
      transition: all 0.5s;

      bottom: 0;

      h2 {
        text-align: center;
        align-items: center;
      }

      @media screen and (max-width: ${mediaMinMaxWidth}) {
        width: 80%;
      }
    `;
  }};
`;

export default StyledToast;
