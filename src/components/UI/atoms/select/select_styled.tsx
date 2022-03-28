import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { SelectParamsType } from '.';

const StyledSelect = styled.select.attrs((props) => ({
  defaultValue: 'none',
  name: props.name || '',
  disabled: props.disabled,
  required: props.required || false,
}))<SelectParamsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const colorDisabled = Theme.palette.$color_disabled;
    const colorD3Blue = Theme.palette.$color_d3_blue;
    const colorBaseBlack = Theme.palette.$color_base_black;
    const colorLineBlack = Theme.palette.$color_base_line;
    const borderColor =
      props.isFail === true
        ? props.theme.palette.$color_failure
        : props.isSuccess === true
        ? '#2ECC71'
        : props.isWarning === true
        ? '#F1C40F'
        : colorLineBlack;
    const bgColor = props.disabled === true ? colorLineBlack : 'transparent';

    return css`
      color: ${colorBaseBlack};
      background-color: ${bgColor};
      width: 100%;
      height: 45px;
      font-size: 16px;
      font-weight: 400;
      outline: none;
      will-change: border;
      text-indent: 6px;
      border: 1px solid ${borderColor};

      border-radius: 0px;

      &:focus {
        border: 1px solid ${colorD3Blue};
        color: ${colorBaseBlack};
      }

      &:disabled {
        border: 1px solid rgb(30, 30, 30, 50%);
        background-color: rgb(30, 30, 30, 5%);
      }
    `;
  }};
`;

export default StyledSelect;
