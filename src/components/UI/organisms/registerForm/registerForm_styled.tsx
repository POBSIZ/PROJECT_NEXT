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
        margin-bottom: 10px;
        align-items: center;
      }

      .line_container {
        display: flex;
        width: 70%;
        gap: 10px;
      }

      button {
        margin-top: 40px;
        border-radius: 5px;
        margin-bottom: 20px;
      }

      @media screen and (max-width: 1000px) {
        h1 {
          margin-bottom: 20px;
          font-size: 40px;
          font-weight: 600;
        }

        label span {
          font-size: 14px;
          margin-bottom: 5px;
          padding-left: 4px;
        }

        .line {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .line_container {
          display: flex;
          width: 100%;
          gap: 10px;
        }

        button {
          margin-top: 0px;
          border-radius: 5px;
          margin-bottom: 20px;
        }
      }
    `;
  }};
`;

export default StyledRegisterForm;
