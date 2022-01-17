import styled, { css } from 'styled-components';

const StyledToastList = styled.div.attrs((props) => ({}))`
  ${(props) => {
    return css`
      position: fixed;
      bottom: 0;
      width: 100%;
      right: -100%;

      ul {
        width: 30%;
        padding-bottom: 3%;
      }
    `;
  }};
`;

export default StyledToastList;
