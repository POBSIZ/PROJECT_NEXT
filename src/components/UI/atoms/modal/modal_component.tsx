import React, { useEffect } from 'react';
import { useTransition } from 'react-spring';
import document from 'global/document';

import StyledModals from './modal_styled';
import {
  ModalType,
  ModalHeaderLayoutType,
  ModalContentLayoutType,
} from './modal_types';

const ModalComponent = ({
  children,
  visible,
  position = 'bottom',
  width,
  height,
}: ModalType) => {
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
        item ? <StyledModals.ModalDarkLayout style={props} key={key} /> : null,
      )}
      {position === 'top'
        ? slideDownTransition.map(({ item, key, props }) =>
            item ? (
              <StyledModals.ModalLayout key={key} style={props}>
                <StyledModals.ModalWrapper width={width} height={height}>
                  {children}
                </StyledModals.ModalWrapper>
              </StyledModals.ModalLayout>
            ) : null,
          )
        : slideUpTransition.map(({ item, key, props }) =>
            item ? (
              <StyledModals.ModalLayout key={key} style={props}>
                <StyledModals.ModalWrapper width={width} height={height}>
                  {children}
                </StyledModals.ModalWrapper>
              </StyledModals.ModalLayout>
            ) : null,
          )}
    </>
  );
};

const ModalHeaderLayout = ({ title, onClick }: ModalHeaderLayoutType) => {
  return (
    <StyledModals.ModalHeaderLayout>
      <StyledModals.ModalHeader>{title}</StyledModals.ModalHeader>
      <StyledModals.ModalCloseLayout>
        <StyledModals.ModalCloseButton onClick={onClick}>
          X
        </StyledModals.ModalCloseButton>
      </StyledModals.ModalCloseLayout>
    </StyledModals.ModalHeaderLayout>
  );
};

const ModalContentLayout = ({
  children,
  row = false,
  paddingLess = false,
  backgroundColor = 'white',
}: ModalContentLayoutType) => {
  return (
    <StyledModals.ModalContentLayout
      row={row}
      paddingLess={paddingLess}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledModals.ModalContentLayout>
  );
};

export { ModalHeaderLayout, ModalContentLayout };

export default ModalComponent;
