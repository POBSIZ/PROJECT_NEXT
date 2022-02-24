import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledLoader = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css`
      text-align: center;
    `;
  }};
`;

export default StyledLoader;
