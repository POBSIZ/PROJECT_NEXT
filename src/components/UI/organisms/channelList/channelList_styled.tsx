import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledChannelList = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css`
      width: 100%;
    `;
  }};
`;

export default StyledChannelList;
