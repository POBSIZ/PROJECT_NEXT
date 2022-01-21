import styled, { css } from 'styled-components';

import { ToastParamsTypes } from '.';

const StyledToast = styled.div.attrs((props) => ({}))<ToastParamsTypes>`
  ${(props) => {
    const colorKeyBlue = props.theme.palette.$color_key_blue;
    const colorD1Blue = props.theme.palette.$color_d1_blue;
    const colorSuccess = props.theme.palette.$color_success;
    const colorWarning = props.theme.palette.$color_warning;
    const colorFailure = props.theme.palette.$color_failure;
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const isPop = props.is_pop ? '-105%' : '0%';
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
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      /* background-color: #fff; */
      background-color: ${themeColor};
      color: #fff;
      /* border: 2px solid ${colorD1Blue}; */
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
      /* opacity: ${isPopOpacity}; */

      width: 100%;
      height: 45px;
      margin: 0;

      /* transform: translateX(${isPop}); */
      transition: all 0.5s;

      h2 {
        /* margin-right: 40%; */
        text-align: center;
        align-items: center;
      }
    `;
  }};
`;

export default StyledToast;
