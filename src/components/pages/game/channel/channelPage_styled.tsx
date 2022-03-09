import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

export const StyledChannelPageItem = styled.li.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const TabletMaxWidth = Theme.media.$tablet_max_width;
    const MobileMaxWidth = Theme.media.$mobile_max_width;
    return css`
      width: calc(100% / 3 - 20px);

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
        margin: 40px 0;
        padding-bottom: 20px;
        border-bottom: 2px solid ${color_base_line};
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;
      }
    `;
  }};
`;

export default StyledChannelPage;
