import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import Head from 'next/head';

import { LoginPageComponent } from 'UIpages/index';

const LoginPage: React.FC<any> = ({}) => {
  return (
    <>
      <Head>
        <title>PROJECT | 로그인</title>
      </Head>
      <LoginPageComponent />
    </>
  );
};

export default LoginPage;
