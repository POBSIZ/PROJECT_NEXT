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
      height: 60px;

      .input_wrapper {
        .icon {
          position: absolute !important;
          float: right;
          font-size: 14px;
          transform: translateY(16px) translateX(-24px);
          color: ${color_base_gray};
          cursor: pointer;
          outline: none;
        }

        ${StyledEditInput}:focus {
          border-bottom: 1px solid ${color_key_blue};
        }

        ${StyledEditInput}:focus + .icon {
          color: ${color_key_blue};
        }
      }

      .text_count {
        /* position: absolute !important; */
        display: block;
        width: 100%;
        text-align: right;
        padding-right: 5px;
        margin-top: 4px;
        color: ${color_base_gray};
        ${font_badge_small};
      }
    `;
  }};
`;

export default StyledEditInput;
