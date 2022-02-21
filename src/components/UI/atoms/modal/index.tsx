import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import ModalComponent from './modal_component';

export interface ModalParamsType {
  children: string;
  title: string;
  width: string;
  height: string;
  backColor: 'primary' | 'gradient' | 'black';
}

const Modal: React.FC<ModalParamsType> = (
  props,
  { width, title, height, backColor }: ModalParamsType,
) => {
  return (
    <>
      <ModalComponent {...props}></ModalComponent>
    </>
  );
};

export default Modal;
