import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';
import StyledButton from 'Atoms/button/button_styled';

export const UserRank = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $font_title_medium = Theme.font.$font_title_medium;
    const $font_title_regular = Theme.font.$font_title_regular;
    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      display: flex;
      flex-flow: column;
      gap: 5px;
      margin-bottom: 20px;

      h1 {
        ${$font_title_medium};
        text-align: center;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30%;

          .inner-wrapper {
            width: 100%;
          }

          &:first-child {
            width: 100%;
            .inner-wrapper {
              width: 220px;
            }
          }
          &:nth-child(2) {
            justify-content: flex-end;
            align-items: flex-end;
            width: calc(50% - 20px);
            .inner-wrapper {
              width: 220px;
            }
          }
          &:nth-child(3) {
            justify-content: flex-start;
            align-items: flex-start;
            width: calc(50% - 20px);
            .inner-wrapper {
              width: 220px;
            }
          }
        }
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        gap: 5px;
        ul {
          gap: 10px;
          li {
            gap: 5px;
            width: 100%;
            &:first-child {
              .inner-wrapper {
                width: 100%;
              }
            }
            &:nth-child(2) {
              width: 100%;
              .inner-wrapper {
                width: 100%;
              }
            }
            &:nth-child(3) {
              width: 100%;
              .inner-wrapper {
                width: 100%;
              }
            }
          }
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

const StyledResultPage = styled.div.attrs((props) => ({}))`
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

export default StyledResultPage;
