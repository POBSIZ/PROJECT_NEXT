import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';
import { EditInputProps } from '.';

const StyledEditInput = styled.input.attrs((props: EditInputProps) => ({
  type: 'text',
  placeholder: props.placeholder,
  disabled: props.isDisabled,
}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const color_base_gray = Theme.palette.$color_base_gray;
    const color_key_blue = Theme.palette.$color_key_blue;
    return css`
      width: 100%;
      height: 45px;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid ${color_base_gray};
      outline: none;
      padding: 0 25px 0 5px;
    `;
  }};
`;

export const StyledEditInputWrapper = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const color_base_gray = Theme.palette.$color_base_gray;
    const color_key_blue = Theme.palette.$color_key_blue;
    const font_badge_small = Theme.font.$font_badge_small;
    return css`
      width: 100%;

      .input_wrapper {
        .icon {
          float: right;
          font-size: 14px;
          right: 5px;
          bottom: calc(45px / 2 + 7px);
          color: ${color_base_gray};
          cursor: pointer;
        }

        ${StyledEditInput}:focus {
          border-bottom: 1px solid ${color_key_blue};
        }

        ${StyledEditInput}:focus + .icon {
          color: ${color_key_blue};
        }
      }

      .text_count {
        position: absolute !important;
        display: block;
        width: 100%;
        text-align: right;
        padding-right: 5px;
        margin-top: 5px;
        color: ${color_base_gray};
        ${font_badge_small};
      }
    `;
  }};
`;

export default StyledEditInput;
