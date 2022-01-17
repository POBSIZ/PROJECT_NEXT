import styled, { css } from 'styled-components';

const StyledIconInput = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const colorD3Blue = props.theme.palette.$color_d3_blue;
    const colorBaseBlack = props.theme.palette.$color_base_black;
    return css`
      width: 100%;
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;

      .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        .icon {
          font-size: 20px;
          color: ${colorBaseBlack};
        }
      }

      input:focus + .icon-wrapper > .icon {
        color: ${colorD3Blue} !important;
      }
    `;
  }};
`;

export default StyledIconInput;
