import styled, { css } from 'styled-components';

const StyledRegisterForm = styled.form.attrs((props) => ({}))`
  ${(props) => {
    return css`
      .header {
        margin: 70px 0px 50px 0px;
      }
      .line {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        height: 45px;
        width: 100%;
      }
    `;
  }};
`;

export default StyledRegisterForm;
