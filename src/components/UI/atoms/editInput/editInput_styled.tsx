import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledEditInput = styled.input.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css`
    `
  }};
`;

export default StyledEditInput;