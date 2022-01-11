import styled, { css } from 'styled-components';

const StyledLike = styled.header.attrs((props) => ({}))`
  ${(props) => {
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const colorKeyGradient = props.theme.palette.$color_key_gradient;

    return css`
      width: 100%;
      height: 100%;
      .Icon {
        width: 100%;
        height: 100%;
      }
    `;
  }};
`;

export default StyledLike;
