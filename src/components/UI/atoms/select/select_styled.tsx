import styled, { css } from 'styled-components';

import { SelectParamsType } from '.';

const StyledSelect = styled.header.attrs((props) => ({}))<SelectParamsType>`
  ${(props) => {
    const propsWidth = props.width;
    const propsHeight = props.height;
    return css`
      .selectbox {
        width: ${propsWidth};
        height: ${propsHeight};
      }
    `;
  }};
`;

export default StyledSelect;
