import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

export const Ranking = styled.article.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_line = Theme.palette.$color_base_line;
    const $mobile_max_width = Theme.media.$mobile_max_width;
    const $tablet_max_width = Theme.media.$tablet_max_width;
    const $font_title_medium = Theme.font.$font_title_medium;

    return css`
      h1 {
        ${$font_title_medium};
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid ${$color_base_line};
      }

      ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;

        li {
          width: fit-content;
        }
      }

      @media screen and (max-width: ${$tablet_max_width}) {
        ul {
          gap: 10px;

          li {
            width: fit-content;
          }
        }
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        ul {
          gap: 10px;

          li {
            width: 100%;
          }
        }
      }
    `;
  }};
`;

export const PurchaseForm = styled.form.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      margin-top: 20px;
      margin-bottom: 40px;

      section {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        section {
          gap: 10px;
          flex-wrap: wrap;
          flex-flow: column;
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

const StyledPlayPage = styled.div.attrs((props) => ({}))`
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

      @media screen and (max-width: ${$mobile_max_width}) {
        margin: 20px 0 100px;
        .page-title {
          margin-bottom: 0px;
        }
      }
    `;
  }};
`;

export default StyledPlayPage;
