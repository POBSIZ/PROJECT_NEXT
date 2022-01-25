import styled, { css } from 'styled-components';

import { TextInputParamsType } from '.';

const StyledTextInput = styled.div.attrs((props) => ({}))<TextInputParamsType>`
  ${(props) => {
    const colorBaseBlack = props.theme.palette.$color_base_black;
    const colorRed = props.theme.palette.$color_failure;
    const failColor = props.isFail == true ? colorRed : colorBaseBlack;
    return css`
      width: 100%;
      color: ${failColor};
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
      .warnning {
        margin-left: 30%;
        text-align: start;
        font-size: 15px;
        margin-bottom: 10px;
      }
      @media screen and (max-width: 1000px) {
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

        .warnning {
          margin-left: 0%;
          text-align: start;
          font-size: 15px;
          margin-bottom: 10px;
        }
      }
    `;
  }};
`;

export default StyledTextInput;
