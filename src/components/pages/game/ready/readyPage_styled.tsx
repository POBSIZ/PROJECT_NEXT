import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';
import StyledButton from 'Atoms/button/button_styled';

export const UserList = styled.ul.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $font_title_regular = Theme.font.$font_title_regular;
    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;

      li {
        width: 30%;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        gap: 10px;
        li {
          width: 100%;
        }
      }
    `;
  }};
`;

export const GameInfo = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $font_title_regular = Theme.font.$font_title_regular;
    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      display: flex;
      flex-flow: column;
      gap: 5px;
      margin-bottom: 20px;

      h1 {
        ${$font_title_regular};
      }

      ul {
        display: flex;
        flex-flow: row;
        gap: 20px;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          color: ${$color_base_gray};
          .icon {
            font-size: 14px;
          }
        }
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        gap: 5px;
        ul {
          gap: 10px;
          li {
            gap: 5px;
          }
        }
      }
    `;
  }};
`;

const StyledReadyPage = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const color_base_line = Theme.palette.$color_base_line;
    const font_title_medium = Theme.font.$font_title_medium;
    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      margin: 30px 0 100px;

      .page-title {
        ${font_title_medium}
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 2px solid ${color_base_line};
      }

      .page-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        ${StyledButton} {
          width: 250px;
        }
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        margin: 20px 0 100px;

        .page-title {
          margin-bottom: 0px;
        }

        .page-head {
          display: flex;
          flex-flow: column;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;

          ${StyledButton} {
            width: 100%;
          }
        }
      }
    `;
  }};
`;

export default StyledReadyPage;
