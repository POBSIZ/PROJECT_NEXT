import styled, { css } from 'styled-components';

import { SelectParamsType } from '.';

const StyledSelect = styled.header.attrs((props) => ({}))<SelectParamsType>`
  ${(props) => {
    return css`
      .selectbox {
        width: 100%;
        height: 45px;
        padding: 15px 0px;
      }
    `;
  }};
`;

export default StyledSelect;
