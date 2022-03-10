import React, { useEffect, useState, useRef, ReactElement } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { Beforeunload } from 'react-beforeunload';

interface BlockChangePageProps {
  exitFunc: () => {} | void;
  condFunc: () => {} | void;
  children: ReactElement;
}

const BlockChangePage: React.FC<BlockChangePageProps> = (props, {}) => {
  const router = useRouter();

  const dFunc = (e) => {
    router.events.emit('routeChangeError');
    const inputData = confirm('게임을 나가시겠습니까?');
    if (inputData) {
      props.exitFunc();
      return;
    } else {
      throw `routeChange aborted.`;
    }
  };

  useEffect(() => {
    props.condFunc();
    router.events.on('routeChangeStart', dFunc);
    return () => {
      router.events.off('routeChangeStart', dFunc);
    };
  }, []);

  return (
    <>
      <Beforeunload
        onBeforeunload={(event) => {
          event.preventDefault();
        }}
      >
        {props.children}
      </Beforeunload>
    </>
  );
};

export default BlockChangePage;
