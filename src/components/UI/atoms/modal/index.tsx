import React, {
  useEffect,
  useState,
  useRef,
  ReactNode,
  ReactFragment,
  MouseEvent,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import ModalComponent from './modal_component';

export interface ModalParamsType {
  children: ReactNode | ReactFragment;
  isShow?: boolean;
  width: string;
  backColor: 'primary' | 'gradient' | 'black' | 'white';
  handleShow: (event: MouseEvent) => {} | void;
}

const Modal: React.FC<ModalParamsType> = (
  props,
  { children, isShow, backColor, width, handleShow }: ModalParamsType,
) => {
  return (
    <>
      <ModalComponent {...props}></ModalComponent>
    </>
  );
};

export default Modal;
