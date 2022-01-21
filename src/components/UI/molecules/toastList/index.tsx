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
  const toast_list = toast_state.toJS('toast_stack').toast_stack;

  const setToastList = () => {
    const toast = toast_list.map((item) => {
      item.is_pop = true;
      return item;
    });
    dispatch(setToast(toast));
  };

  useEffect(() => {
    setToastList();
    return () => {};
  }, [toast_state]);

  return (
    <>
      <ToastListComponent {...props} toast_list={toast_list} />
    </>
  );
};

export default ToastList;
