import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { setToast } from 'Actions/toastAction';

import ToastListComponent from './toastList_component';

import { ToastParamsTypes } from 'Atoms/toast';

export interface ToastListPropsTypes {
  toast_list: ToastParamsTypes[];
}

const ToastList: React.FC<any> = (props, {}) => {
  const dispatch = useDispatch();
  const toast_state = useSelector(
    (state: RootStateOrAny) => state.toastReducer,
  );

  const setToastList = () => {
    const toast_list = Object.assign([], toast_state.toast_stack);
    const toast = toast_list.map((item) => {
      item.is_pop = true;
      return item;
    });
    dispatch(setToast(toast));
  };

  useEffect(() => {
    setToastList();
    return () => {};
  }, []);

  console.log(toast_state.toast_stack);

  return (
    <>
      <ToastListComponent {...props} toast_list={toast_state.toast_stack} />
    </>
  );
};

export default ToastList;
