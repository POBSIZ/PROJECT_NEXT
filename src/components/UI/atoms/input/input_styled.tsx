import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';
import { InputParamsType } from '.';

const StyledInput = styled.input.attrs((props) => ({
  placeholder: props.placeholder || 'input',
  type: props.type || 'text',
  name: props.name || '',
  required: props.required || false,
  disabled: props.disabled || false,
}))<InputParamsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const colorDisabled = Theme.palette.$color_disabled;
    const colorD3Blue = Theme.palette.$color_d3_blue;
    const colorBaseBlack = Theme.palette.$color_base_black;
    const colorLineBlack = Theme.palette.$color_base_line;
    const bgColor = props.disabled === true ? colorLineBlack : 'transparent';
    const borderColor =
      props.isFail === true
        ? props.theme.palette.$color_failure
        : colorLineBlack;
    return css`
      background-color: ${bgColor};
      color: ${colorBaseBlack};
      width: 100%;
      height: 45px;
      padding: 0px 10px;
      font-size: 1em;
      font-weight: 500;
      outline: none;
      border: 1px solid ${borderColor};
      border-radius: 0;
      appearance: none;

      will-change: border;

      &::placeholder {
        color: ${colorLineBlack};
      }

      &:focus {
        border: 1px solid ${colorD3Blue};
      }

      &:disabled {
        background-color: ${colorDisabled};
      }
    `;
  }};
`;

export default StyledInput;
