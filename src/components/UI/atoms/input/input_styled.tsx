import styled, { css } from 'styled-components';
import { InputParamsType } from '.';

const StyledInput = styled.input.attrs((props) => ({
  placeholder: props.placeholder || 'input',
  type: props.type || 'text',
  name: props.name || '',
  required: props.required || false,
  disabled: props.disabled || false,
}))<InputParamsType>`
  ${(props) => {
    const colorD3Blue = props.theme.palette.$color_d3_blue;
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const colorLineBlack = props.theme.palette.$color_line_black;
    const bgColor = props.disabled === true ? colorLineBlack : 'transparent';
    const borderColor =
      props.isFail === true
        ? props.theme.palette.$color_failure
        : colorLineBlack;
    return css`
      background-color: ${bgColor};
      color: ${colorBaseBlack};
      margin: 5px 0;
      width: 100%;
      height: 45px;
      padding: 5px 10px;
      font-size: 1.4em;
      font-weight: 500;
      outline: none;
      border: 1px solid ${borderColor};

      will-change: border;

      &:focus {
        border: 1px solid ${colorD3Blue};
      }
    `;
  }};
`;

export default StyledInput;
