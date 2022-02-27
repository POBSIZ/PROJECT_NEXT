import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import { NextPage } from 'next';
import Link from 'next/link';

import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import {
  getCheckSessionAsync,
  getTestAsync,
  increment,
} from 'Actions/testAction';
import { LoginAsync } from 'Actions/authAction';
import { pushToastAsync } from 'Actions/toastAction';

import Bases, { Loader } from 'Bases';
import { ChannelBox } from 'Molecules';
import Organisms, { ListView, ChannelList } from 'Organisms';

const Name: NextPage<any> = ({}) => {
  const storeTest = useSelector((state: RootStateOrAny) => state.test);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const generate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data: any = 1;
    dispatch(getTestAsync.request(data));
  };

  const getName = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data: any = 1;
    dispatch(getCheckSessionAsync.request(data));
  };

  const setLogin = () => {
    const data = {
      username: 'project',
      password: 'plan0531@',
    };
    dispatch(LoginAsync.request(data));
  };

  const popToast = () => {
    const randNum = Math.floor(Math.random() * 100);
    dispatch(
      pushToastAsync.request({
        status: 'success',
        message: String(randNum),
      }),
    );
  };

  useEffect(() => {
    const getData = async () => {
      // const { data } = await axios.get('http://localhost:3000/api/list');
      const { data } = await axios.get(
        'http://localhost:3000/api/list/channel',
      );
      console.log(data);
      setData(data);
    };
    getData();
    return () => {};
  }, []);

  return (
    <>
      <div
        style={{
          paddingTop: '100px',
          // textAlign: 'center',
        }}
      >
        {/* <div>
            <h2>List</h2>
            <button onClick={getName}>GetName</button>
            <button onClick={generate}>Generate</button>
            <h3>{storeTest?.test}</h3>
            <h1>
              <button onClick={setLogin}>LOGIN</button>
            </h1>
            <h1>
              <button onClick={popToast}>TOAST</button>
            </h1>
          </div> */}
        {/* <ListView item_list={data} with_imgs={false} /> */}
        {/* <div style={{ width: '300px', margin: 'auto' }}>
            <ChannelBox
              is_private={true}
              title="Title"
              time="12:30 ~ 13:30"
              point={100}
              curr_user={3}
              max_user={5}
              info="Nasdaq-100 Random"
              creator="John Doe"
            />
          </div> */}
        <ChannelList channel_list={data} />
      </div>
    </>
  );
};

// Name.getInitialProps = async () => {
//   const { data } = await axios.get('http://localhost:3000/api/list');
//   return {
//     data,
//   };
// };

export default Name;
