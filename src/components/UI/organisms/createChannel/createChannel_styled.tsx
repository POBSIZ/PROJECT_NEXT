import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

export const StyledCreateChannelInput = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const color_base_line = Theme.palette.$color_base_line;
    const font_title_medium = Theme.font.$font_title_medium;
    const font_body_head = Theme.font.$font_body_head;
    return css`
      margin-bottom: 20px;

      h3 {
        ${font_body_head}
        margin-bottom: 10px;
      }
    `;
  }};
`;

const StyledCreateChannel = styled.form.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const color_base_line = Theme.palette.$color_base_line;
    const font_title_medium = Theme.font.$font_title_medium;
    return css`
      h1 {
        ${font_title_medium}
        margin-top: 40px;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 2px solid ${color_base_line};
      }
    `;
  }};
`;

export default StyledCreateChannel;
