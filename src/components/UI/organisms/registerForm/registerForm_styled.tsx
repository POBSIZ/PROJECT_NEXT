import styled, { css } from 'styled-components';

const StyledRegisterForm = styled.form.attrs((props) => ({}))`
  ${(props) => {
    return css`
      .header {
        margin: 70px 0px 50px 0px;
      }

      h1 {
        margin-bottom: 40px;
        font-size: 40px;
        font-weight: 600;
      }

      label span {
        font-size: 18px;
      }

      .line {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        align-items: center;
      }

      .line_container {
        display: flex;
        width: 70%;
      }

      button {
        margin-top: 40px;
        border-radius: 5px;
      }
    `;
  }};
`;

export default StyledRegisterForm;
