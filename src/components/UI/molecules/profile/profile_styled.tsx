import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';
import { ProfilePropsType } from './profile_types';

export const StyledProfileRank = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const fontBodyHead = Theme.font.$font_body_head;
    const colorBaseBlack = Theme.palette.$color_base_black;
    const colorBaseBlue = Theme.palette.$color_key_blue;
    const colorSuccess = Theme.palette.$color_success;
    const colorWarning = Theme.palette.$color_warning;
    const colorFailure = Theme.palette.$color_failure;
    const rankBgColor =
      props.children == 1
        ? colorSuccess
        : props.children == 2
        ? colorWarning
        : props.children == 3
        ? colorFailure
        : colorBaseBlack;
    return css`
      width: 30px;
      height: 30px;
      border-radius: 100%;
      background-color: ${rankBgColor};
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      ${fontBodyHead};
    `;
  }};
`;

export const StyledProfileReady = styled.div.attrs((props) => ({}))<{
  isReady: boolean;
}>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const colorFailure = Theme.palette.$color_failure;
    const colorSuccess = Theme.palette.$color_success;
    const bgBolor = props.isReady ? colorSuccess : colorFailure;
    return css`
      width: 30px;
      height: 30px;
      border-radius: 100%;
      background-color: ${bgBolor};
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 14px;
        color: #fff;
      }
    `;
  }};
`;

const StyledProfile = styled.div.attrs((props) => ({}))<ProfilePropsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const colorKeyBlue = Theme.palette.$color_key_blue;
    const borderRadius = props.radius;
    const borderColor = props.isMe ? colorKeyBlue : `none`;
    return css`
      width: 100%;
      height: 70px;
      padding: 10px;
      box-shadow: 0 4px 10px rgb(30, 30, 30, 14%);
      border: 1px solid ${borderColor};
      border-radius: ${borderRadius || 16}px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      gap: 10px;
      cursor: pointer;
      transition: 0.2s;

      section {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        gap: 10px;

        .avatar {
          background-color: #1e1e1e33;
          width: 50px;
          height: 50px;
          border-radius: 64px;
        }
        .information {
          display: flex;
          flex-flow: column;
          gap: 4px;
          .UserName {
            font-size: 16px;
            font-weight: 500;
          }
          .task {
            font-size: 10px;
            font-weight: 400;
            color: #1e1e1e80;
          }
          .game_information {
            font-size: 12px;
            font-weight: 400;
          }
        }
      }
    `;
  }};
`;

export default StyledProfile;
