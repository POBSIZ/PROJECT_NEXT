import styled, { css } from 'styled-components';

const StyledToast = styled.div.attrs((props) => ({}))`
  ${(props) => {
    return css`
      position: fixed;
      bottom: 0;
    `;
  }};
`;

export default StyledToast;
