import styled, { css } from 'styled-components';

const StyledMain = styled.main.attrs((props) => {})`
  ${(props) => {
    const headerDesktopHeight = props.theme.size.$header_desktop_line_height;
    const headerMobileHeight = props.theme.size.$header_mobile_line_height;
    return css`
      min-height: 100vh;
      padding-top: ${headerDesktopHeight};

      @media screen and (max-width: 1000px) {
        padding-top: ${headerMobileHeight};
      }
    `;
  }}
`;

export default StyledMain;
