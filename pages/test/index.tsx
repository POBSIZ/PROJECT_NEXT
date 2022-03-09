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
import { Chart } from 'Hoc';

const Name: NextPage<any> = ({}) => {
  return (
    <>
      <div
        style={{
          paddingTop: '100px',
          // textAlign: 'center',
        }}
      >
        <Chart />
      </div>
    </>
  );
};

export default Name;
