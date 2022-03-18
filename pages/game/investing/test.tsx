import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import { NextPage } from 'next';
import Head from 'next/head';
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
import { Chart, BlockChangePage } from 'Hoc';

const Name: NextPage<any> = ({}) => {
  const testFunc = () => {
    console.log('Page Out');
  };

  return (
    <>
      <Head>
        <title>PROJECT | 모의투자 TEST</title>
      </Head>
      <BlockChangePage exitFunc={testFunc} condFunc={() => {}}>
        <div
          style={{
            paddingTop: '100px',
          }}
        >
          <Chart />
        </div>
      </BlockChangePage>
    </>
  );
};

export default Name;
