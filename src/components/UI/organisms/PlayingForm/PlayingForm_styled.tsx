import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledPlayingForm = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const color_base_line = Theme.palette.$color_base_line;
    const font_title_medium = Theme.font.$font_title_medium;
    return css`
      h1 {
        ${font_title_medium}
        margin: 20px 0;
        padding-bottom: 20px;
        border-bottom: 2px solid ${color_base_line};
        font-size: 32px;
        font-weight: bold;
      }
      .title {
        font-size: 24px;
        font-weight: 700;
      }
      .information {
        font-size: 16px;
        font-weight: 400;
        color: #1e1e1e80;
      }
      .chart {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 800px;
        height: 230px;
        background-color: aqua;
      }
      .select_box {
        display: flex;
        margin: 50px;
        gap: 20px;
      }
      input::-webkit-inner-spin-button {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
      }
    `;
  }};
`;

export default StyledPlayingForm;
