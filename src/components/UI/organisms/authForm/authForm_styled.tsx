import styled, { css } from 'styled-components';

const StyledAuthForm = styled.section.attrs((props) => ({}))`
  ${(props) => {
    return css`
      text-align: center;
      margin: auto;
      margin-top: 100px;
      width: 500px;

      @media screen and (max-width: 1000px) {
        width: 90%;
      }
    `;
  }};
`;

export default StyledAuthForm;
