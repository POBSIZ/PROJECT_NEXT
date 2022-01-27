import styled, { css } from 'styled-components';

import { RegisterFormParamsType } from '.';

const StyledRegisterForm = styled.form.attrs(
  (props) => ({}),
)<RegisterFormParamsType>`
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

      button {
        margin-top: 40px;
        /* border-radius: 5px; */
        margin-bottom: 20px;
      }

      @media screen and (max-width: 1000px) {
        h1 {
          margin-bottom: 20px;
          font-size: 40px;
          font-weight: 600;
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
