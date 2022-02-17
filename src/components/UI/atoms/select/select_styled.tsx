import styled, { css } from 'styled-components';

import { SelectParamsType } from '.';

const StyledSelect = styled.select.attrs((props) => ({
  defaultValue: 'none',
  name: props.name || '',
  disabled: props.disabled,
  required: props.required || false,
}))<SelectParamsType>`
  ${(props) => {
    const colorDisabled = props.theme.palette.$color_disabled;
    const colorD3Blue = props.theme.palette.$color_d3_blue;
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const colorLineBlack = props.theme.palette.$color_line_black;
    const borderColor =
      props.isFail === true
        ? props.theme.palette.$color_failure
        : props.isSuccess === true
        ? '#2ECC71'
        : props.isWarning === true
        ? '#F1C40F'
        : '';

    return css`
      color: ${colorBaseBlack};
      width: 100%;
      height: 45px;
      font-size: 16px;
      font-weight: 400;
      outline: none;
      will-change: border;
      text-indent: 6px;
      border: 1px solid ${borderColor};
      appearance: none;
      border-radius: 0px;

      &:focus {
        border: 1px solid ${colorD3Blue};
      }

      &:disabled {
        border: 1px solid rgb(30, 30, 30, 50%);
        background-color: rgb(30, 30, 30, 5%);
      }
    `;
  }};
`;

export default StyledSelect;
