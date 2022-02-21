import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { ChannelBoxPropsType } from './channelBox_types';

const StyledChannelBox = styled.div.attrs((props) => ({}))<ChannelBoxPropsType>`
  ${(props) => {
    const isLock = props.is_private
      ? 'display: inline-block;'
      : 'display: none;';

    const borderRadius = props.radius;

    const Theme: GlobalStyleType = props.theme;

    const colorKey = Theme.palette.$color_key_blue;

    const colorBaseBlack = Theme.palette.$color_base_black;
    const colorBaseGray = Theme.palette.$color_base_gray;
    const colorBaseLightGray = Theme.palette.$color_base_LightGray;

    const colorAlertSuccess = Theme.palette.$color_success;
    const colorAlertFailure = Theme.palette.$color_failure;

    const fontTitleRegular = Theme.font.$font_title_regular;
    const fontBody1 = Theme.font.$font_body_1;
    const fontButtonSmall = Theme.font.$font_button_small;
    const fontBadgeSmall = Theme.font.$font_badge_small;

    return css`
      width: 100%;
      height: 115px;
      padding: 10px 13px;
      box-shadow: 0 4px 10px ${colorBaseLightGray};
      border-radius: ${borderRadius}px;
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;

      .title {
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          ${isLock}
          width: 14px;
          margin-right: 5px;
        }

        .text {
          ${fontTitleRegular}
        }
      }

      .options {
        span {
          ${fontButtonSmall}
          margin-right: 10px;

          .icon {
            width: 10px;
            margin-right: 5px;
          }

          &:nth-child(1) {
            .icon {
              color: ${colorAlertSuccess};
            }
          }

          &:nth-child(2) {
            .icon {
              color: ${colorKey};
            }
          }

          &:nth-child(3) {
            .icon {
              color: ${colorAlertFailure};
            }
          }
        }
      }

      .creator {
        ${fontBadgeSmall}
        color: ${colorBaseGray};
      }
    `;
  }};
`;

export default StyledChannelBox;
