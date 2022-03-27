import React, { useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';
import document from 'global/document';

interface Modal {
  children?: ReactNode;
  visible: boolean;
  position?: 'top' | 'bottom';
  width: number | string;
  height: number | string;
}

interface ModalHeaderLayout {
  title: string;
  onClick?: () => void;
}

interface ModalContentLayout {
  children?: ReactNode;
  row?: boolean;
  paddingLess?: boolean;
  backgroundColor?: string;
}

interface ModalWrapper {
  children?: ReactNode;
  width: number | string;
  height: number | string;
}

const styles = {
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

    font-family: NotoSansCJKkr;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.87;
    letter-spacing: -3px;
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
  ModalContentLayout: styled.div<ModalContentLayout>`
    height: ${(props) =>
      props.paddingLess ? 'calc(100% - 72px)' : 'calc(100% - 108px)'};
    max-height: 540px;
    display: flex;
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    background-color: ${(props) =>
      props.backgroundColor === undefined ? '#f6f6fa' : props.backgroundColor};
    padding: ${(props) => (props.paddingLess ? '0px' : '18px')};
    overflow-y: auto;
    overflow-x: hidden;
  `,
  ModalWrapper: styled.div<ModalWrapper>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: white;
    z-index: 11;
    border: solid 1px #ebebf6;
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.056);
    border-radius: 8px;
    overflow: hidden;
  `,
};

const Modal = ({ children, visible, position, width, height }: Modal) => {
  const fadeTransition = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const slideUpTransition = useTransition(visible, null, {
    from: {
      transform: 'translateY(200px) scale(0.8)',
      opacity: 0,
    },
    enter: {
      transform: 'translateY(0px) scale(1.0)',
      opacity: 1,
    },
    leave: {
      transform: 'translateY(200px) scale(0.8)',
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 25,
    },
  });

  const slideDownTransition = useTransition(visible, null, {
    from: {
      transform: 'translateY(-200px) scale(0.8)',
      opacity: 0,
    },
    enter: {
      transform: 'translateY(0px) scale(1.0)',
      opacity: 1,
    },
    leave: {
      transform: 'translateY(-200px) scale(0.8)',
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 25,
    },
  });

  useEffect(() => {
    function handleTouchMove(event) {
      if (visible) {
        event.preventDefault();
      }
    }
    function disableScroll() {
      if (visible) {
        document.querySelector('html').scrollTop = window.scrollY;
        document.body.style.overflow = 'hidden';
      }
    }
    window.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });
    window.addEventListener('scroll', disableScroll);
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', disableScroll);
      document.body.style.overflow = 'visible';
    };
  }, [visible]);

  return (
    <>
      {fadeTransition.map(({ item, key, props }) =>
        item ? <styles.ModalDarkLayout style={props} key={key} /> : null,
      )}
      {position === 'top'
        ? slideDownTransition.map(({ item, key, props }) =>
            item ? (
              <styles.ModalLayout key={key} style={props}>
                <styles.ModalWrapper width={width} height={height}>
                  {children}
                </styles.ModalWrapper>
              </styles.ModalLayout>
            ) : null,
          )
        : slideUpTransition.map(({ item, key, props }) =>
            item ? (
              <styles.ModalLayout key={key} style={props}>
                <styles.ModalWrapper width={width} height={height}>
                  {children}
                </styles.ModalWrapper>
              </styles.ModalLayout>
            ) : null,
          )}
    </>
  );
};

Modal.defaultProps = {
  position: 'bottom',
};

const ModalHeaderLayout = ({ title, onClick }: ModalHeaderLayout) => {
  return (
    <styles.ModalHeaderLayout>
      <styles.ModalHeader>{title}</styles.ModalHeader>
      <styles.ModalCloseLayout>
        <styles.ModalCloseButton onClick={onClick}>X</styles.ModalCloseButton>
      </styles.ModalCloseLayout>
    </styles.ModalHeaderLayout>
  );
};

const ModalContentLayout = ({
  children,
  row,
  paddingLess,
  backgroundColor,
}: ModalContentLayout) => {
  return (
    <styles.ModalContentLayout
      row={row}
      paddingLess={paddingLess}
      backgroundColor={backgroundColor}
    >
      {children}
    </styles.ModalContentLayout>
  );
};

ModalContentLayout.defaultProps = {
  row: false,
  paddingLess: false,
  backgroundColor: 'white',
};

export { ModalHeaderLayout, ModalContentLayout };

export default Modal;
