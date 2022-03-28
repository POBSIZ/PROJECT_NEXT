import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledMain = styled.main.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const tablet_max_width = Theme.media.$tablet_max_width;
    return css`
      min-height: 100vh;
      padding-top: 60px;
      @media screen and (max-width: ${tablet_max_width}) {
        padding-top: 50px;
      }
    `;
  }};
`;

export default StyledMain;
