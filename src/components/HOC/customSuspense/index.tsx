import React, { useEffect, useState, useRef, ReactNode } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import toastAction, { pushToastAsync } from 'Actions/toastAction';

interface CustomSuspensePropsType {
  children: ReactNode;
  fn: () => {};
  fallback: ReactNode;
}

const CustomSuspense: React.FC<CustomSuspensePropsType> = (
  props,
  { children, fn, fallback }: CustomSuspensePropsType,
) => {
  const dispatch = useDispatch();
  const [isLoad, setIsLoad] = useState(false);  

  const getLoadStatus = async () => {
    try {
      await props.fn();
      setIsLoad(true);
    } catch (error) {
      setIsLoad(false);
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '로딩에 실패하였습니다.',
        }),
      );
      console.log(error);
    }
  };

  useEffect(() => {
    getLoadStatus();
    return () => {};
  }, []);

  return <>{isLoad ? props.children : props.fallback}</>;
};

export default CustomSuspense;
