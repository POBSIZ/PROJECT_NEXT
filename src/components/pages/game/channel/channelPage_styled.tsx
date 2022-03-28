import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';
import StyledButton from 'Atoms/button/button_styled';

export const BottomNav = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css`
      flex-basis: 42px;
      display: flex;
      flex-direciton: row;
    `;
  }};
`;

export const StyledChannelPageItem = styled.li.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const TabletMaxWidth = Theme.media.$tablet_max_width;
    const MobileMaxWidth = Theme.media.$mobile_max_width;
    return css`
      display: inline-block;
      width: calc(100% / 3 - 20px);
      margin: 10px;

      @media screen and (max-width: ${TabletMaxWidth}) {
        width: calc(100% / 2 - 20px);
      }

      @media screen and (max-width: ${MobileMaxWidth}) {
        width: calc(100% / 1 - 20px);
      }
    `;
  }};
`;

const StyledChannelPage = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const color_base_line = Theme.palette.$color_base_line;
    const font_title_medium = Theme.font.$font_title_medium;
    return css`
      margin: 30px 0 100px;
      h1 {
        ${font_title_medium}
        margin-top: 40px;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 2px solid ${color_base_line};
      }

      .btn_wrapper {
        margin-bottom: 20px;
        display: flex;
        ${StyledButton}:first-child {
          margin-right: 20px;
        }
      }

      ul {
        width: 100%;
      }
    `;
  }};
`;

export default StyledChannelPage;
