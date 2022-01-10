import styled, { css } from 'styled-components';

const StyledLoginForm = styled.form.attrs((props) => ({}))`
  ${(props) => {
    const colorLineBlack = props.theme.palette.$color_line_black;
    return css`
      .info {
        margin-bottom: 20px;
        h1 {
          font-size: 40px;
        }
        span {
          font-size: 16px;
        }
      }

      @media screen and (max-width: 1000px) {
        .info {
          span {
            font-size: 14px;
          }
        }
      }
    `;
  }};
`;

export default StyledLoginForm;
