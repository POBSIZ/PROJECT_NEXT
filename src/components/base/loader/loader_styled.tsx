import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledLoader = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css`
      width: 100%;
      height: 100vh;
      background-color: #000;
      text-align: center;
    `;
  }};
`;

export default StyledLoader;
