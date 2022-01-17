import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ToastComponent from './toast_component';

const Toast: React.FC<any> = (props, {}) => {
  const toastState = useSelector((state: RootStateOrAny) => state.toast);

  return (
    <>
      <ToastComponent {...props} />
    </>
  );
};

export default Toast;
