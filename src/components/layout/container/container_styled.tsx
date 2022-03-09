import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledContainer = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const TabletMaxWidth = Theme.media.$tablet_max_width;
    return css`
      padding: 0 5%;

      @media screen and (max-width: ${TabletMaxWidth}) {
        /* padding: 0 3%; */
      }
    `;
  }};
`;

export default StyledContainer;
