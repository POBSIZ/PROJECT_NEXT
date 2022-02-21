import styled, { css } from 'styled-components';

const StyledListView = styled.ul.attrs((props) => ({}))`
  ${(props) => {
    const {
      $color_key_blue,
      $color_base_black,
      $color_base_line,
      $color_failure,
    } = props.theme.palette;

    const {
      $font_title_regular,
      $font_body_1,
      $font_body_info,
      $font_button_small,
    } = props.theme.font;
    return css`
      .list_item {
        box-sizing: border-box;
        text-decoration: none;
        color: ${$color_base_black};
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        height: 150px;
        border-bottom: 1px solid ${$color_base_line};
        margin: 10px 0;
        padding-bottom: 10px;

        a {
          color: ${$color_base_black};
        }

        .list_item-title {
          ${$font_title_regular}
          font-weight: 700;
          margin: 5px 0;
        }

        .list_item_detail {
          margin: 5px 0;
          ${$font_body_1}
        }

        .list_item_detail-user {
          font-weight: 500;
        }

        .list_item_detail-date {
          ${$font_body_info}
          padding: 0 5px;
        }

        .list_item-text {
          margin: 5px 0;
          ${$font_body_info};
          word-break: break-all;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          display: -moz-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          -moz-box-orient: vertical;
          box-orient: vertical;
        }

        .list_item_badges {
          margin-top: 10px;
          display: flex;
          flex-flow: row;
        }

        .list_item_badges-item {
          width: fit-content;
          padding: 4px 10px;
          margin: 0 5px;
          ${$font_button_small}
          font-weight: 400;
          background-color: ${$color_key_blue};
          border-radius: 16px;
          color: #fff;
        }

        .list_item_badges-item:first-child {
          margin-left: 0;
        }
      }

      .list_item-like {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .like-button {
        margin: 5px;
        width: 30px;
        font-size: 30px;
        display: flex;
        align-items: center;
      }

      .like-count {
        ${$font_body_1}
      }
    `;
  }};
`;

export default StyledListView;
