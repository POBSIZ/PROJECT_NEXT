import styled, { css } from 'styled-components';

import { SelectParamsType } from '.';

const StyledSelect = styled.select.attrs((props) => ({
  name: props.name || '',
  disabled: props.disabled,
}))<SelectParamsType>`
  ${(props) => {
    const colorDisabled = props.theme.palette.$color_disabled;
    const colorD3Blue = props.theme.palette.$color_d3_blue;
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const colorLineBlack = props.theme.palette.$color_line_black;
    const borderColor =
      props.isFail === true
        ? props.theme.palette.$color_failure
        : colorLineBlack;
    return css`
      color: ${colorBaseBlack};
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
      }

      &:disabled {
        background-color: ${colorDisabled};
      }
    `;
  }};
`;

export default StyledSelect;
