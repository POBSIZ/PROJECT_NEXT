import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';
import { ProfilePropsType } from './profile_types';

const StyledProfile = styled.div.attrs((props) => ({}))<ProfilePropsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const borderRadius = props.radius;
    return css`
      width: 100%;
      height: 70px;
      padding: 10px;
      box-shadow: 0 4px 10px rgb(30, 30, 30, 10%);
      border-radius: ${borderRadius || 16}px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      gap: 5px;
      cursor: pointer;
      transition: 0.2s;
      will-change: box-shadow;

      .avatar {
        background-color: #1e1e1e33;
        width: 50px;
        height: 50px;
        border-radius: 64px;
      }
      .information {
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
    `;
  }};
`;

export default StyledProfile;
