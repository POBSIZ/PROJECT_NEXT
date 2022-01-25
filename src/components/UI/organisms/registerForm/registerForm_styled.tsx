import styled, { css } from 'styled-components';

import { RegisterFormParamsType } from '.';

const StyledRegisterForm = styled.form.attrs((props) => ({
  vaild: props.vaild,
}))<RegisterFormParamsType>`
  ${(props) => {
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const colorRed = props.theme.palette.$color_failure;
    const name =
      props.vaild.first_name === true
        ? colorRed
        : props.vaild.last_name === true
        ? colorRed
        : colorBaseBlack;
    const gendercolor = props.vaild.gender === true ? colorRed : colorBaseBlack;
    const username = props.vaild.username === true ? colorRed : colorBaseBlack;
    const password = props.vaild.password === true ? colorRed : colorBaseBlack;
    const password_check =
      props.vaild.password_check === true ? colorRed : colorBaseBlack;
    const email = props.vaild.email === true ? colorRed : colorBaseBlack;
    return css`
      .warnning {
        color: ${colorRed};
        margin-left: 30%;
        text-align: start;
        font-size: 15px;
        margin-bottom: 10px;
      }
      .name {
        color: ${name};
      }
      .gender {
        color: ${gendercolor};
      }
      .username {
        color: ${username};
      }
      .password {
        color: ${password};
      }
      .password_check {
        color: ${password_check};
      }
      .email {
        color: ${email};
      }

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
        .warnning {
          color: ${colorRed};
          margin-left: 0%;
          text-align: start;
          font-size: 15px;
          margin-bottom: 10px;
        }
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
