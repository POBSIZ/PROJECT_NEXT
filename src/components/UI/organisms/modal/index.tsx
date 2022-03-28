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

const Modal: React.FC<any> = (props) => {
  return (
    <>
      <ModalComponent {...props}></ModalComponent>
    </>
  );
};

export default Modal;
