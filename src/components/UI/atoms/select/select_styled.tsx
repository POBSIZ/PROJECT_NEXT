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
        : colorLineBlack;
    return css`
      color: ${colorLineBlack};
      width: 100%;
      height: 45px;
      font-size: 1em;
      font-weight: 500;
      outline: none;
      will-change: border;
      text-indent: 6px;
      border: 1px solid ${borderColor};
      appearance: none;
      border-radius: 0px;

      &:focus {
        border: 1px solid ${colorD3Blue};
        color: ${colorBaseBlack};
      }

      &:disabled {
        background-color: ${colorDisabled};
      }
    `;
  }};
`;

export default StyledSelect;
