import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ToastComponent from './toast_component';

export interface ToastParamsTypes {
  is_pop: boolean;
  status: 'default' | 'error' | 'success' | 'warning';
  message: string;
}

const Toast: React.FC<ToastParamsTypes> = (
  props,
  { is_pop, status, message }: ToastParamsTypes,
) => {
  return (
    <>
      <ToastComponent {...props} />
    </>
  );
};

export default Toast;
