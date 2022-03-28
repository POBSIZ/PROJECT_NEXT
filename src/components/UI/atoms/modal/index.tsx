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
  visible: boolean;
  children: string;
  title: string;
  width: string;
  backColor: 'primary' | 'gradient' | 'black' | 'white';
  handleShow: (event: MouseEvent) => {} | void;
}

const Modal: React.FC<ModalParamsType> = (
  props,
  { visible, width, title, height, backColor }: ModalParamsType,
) => {
  return (
    <>
      <ModalComponent {...props}></ModalComponent>
    </>
  );
};

export default Modal;
