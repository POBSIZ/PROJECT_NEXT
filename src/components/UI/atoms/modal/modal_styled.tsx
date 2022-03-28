import styled, { css, StyleSheetManager } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { animated } from 'react-spring';

import { ModalContentLayoutType, ModalWrapperType } from './modal_types';

const StyledModals = {
  ModalDarkLayout: styled(animated.div)`
    z-index: 9;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.56);
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ModalLayout: styled(animated.div)`
    z-index: 10;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  ModalHeaderLayout: styled.div`
    height: 36px;
    display: flex;
    flex-direction: row;
    padding: 18px;
    background-color: white;
    border-bottom: solid 1px #ebebf6;
  `,
  ModalHeader: styled.div`
    flex: 9;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-size: 20px;
    font-weight: 500;
    text-align: left;
    color: #040433;
  `,
  ModalCloseLayout: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  ModalCloseButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    outline: 0;
    border: 0;
    cursor: pointer;
    background-color: white;
    font-size: 20px;
    color: #757295;
  `,
  ModalContentLayout: styled.div.attrs((props) => ({}))<ModalContentLayoutType>`
    ${(props) => {
      const $height = props.paddingLess
        ? 'calc(100% - 72px)'
        : 'calc(100% - 108px)';
      const $flex_direction = props.row ? 'row' : 'column';
      const $background_color =
        props.backgroundColor === undefined ? '#f6f6fa' : props.backgroundColor;
      const $padding = props.paddingLess ? '0px' : '18px';

      return css`
        height: ${$height};
        max-height: 540px;
        display: flex;
        flex-direction: ${$flex_direction};
        background-color: ${$background_color};
        padding: ${$padding};
        overflow-y: auto;
        overflow-x: hidden;
      `;
    }}
  `,
  ModalWrapper: styled.div.attrs((props) => ({}))<ModalWrapperType>`
    ${(props) => {
      return css`
        width: ${props.width};
        height: ${props.height};
        background-color: white;
        z-index: 11;
        border: solid 1px #ebebf6;
        box-sizing: border-box;
        border-radius: 8px;
        box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.056);
        border-radius: 8px;
        overflow: hidden;
      `;
    }}
  `,
};

export default StyledModals;
