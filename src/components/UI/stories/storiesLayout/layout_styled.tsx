import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledStoriesLayout = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const colorBaseBlack = Theme.palette.$color_base_black;
    const colorLineBlack = Theme.palette.$color_base_line;
    return css`
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      padding-bottom: 5%;

      h1 {
        font-size: 20px;
        margin-top: 20px;
      }

      hr {
        width: 100%;
        margin: 10px 0;
        background-color: ${colorLineBlack};
      }

      .component {
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
      }

      span.info {
        display: block;
        font-size: 14px;
        margin-top: 20px;
        font-weight: 500;
      }

      div.mb-50 {
        margin-bottom: 50px;
      }

      * {
        position: relative !important;
      }

      /* 나녕이는 바닐라라떼 안먹고 싶대~ */
    `;
  }};
`;

export default StyledStoriesLayout;
