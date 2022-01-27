import styled, { css } from 'styled-components';

const StyledStoriesLayout = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const colorLineBlack = props.theme.palette.$color_line_black;
    return css`
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;

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

      * {
        position: relative !important;
      }
    `;
  }};
`;

export default StyledStoriesLayout;
