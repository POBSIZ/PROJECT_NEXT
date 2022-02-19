import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ToastComponent from './toast_component';

import { initToast } from 'Actions/toastAction';

export interface ToastPropsTypes {
  is_pop: boolean;
  status: 'default' | 'error' | 'success' | 'warning';
  message: string;
}

const Toast: React.FC<any> = (props, {}) => {
  const dispatch = useDispatch();
  const toast_state = useSelector(
    (state: RootStateOrAny) => state.toastReducer,
  );
  const toastProps = toast_state.toJS();

  const [initState, setInitState] = useState(false);
  useEffect(() => {
    if (toastProps.is_pop === true && initState === false) {
      setInitState(true);
      setTimeout(() => {
        dispatch(initToast());
        setInitState(false);
      }, 2000);
    }
    return () => {};
  }, [toastProps]);

  return (
    <>
      <ToastComponent {...props} {...toastProps} />
    </>
  );
};

export default Toast;
