import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { LoginPageComponent } from 'UIpages/index';

const LoginPage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title>PROJECT | 로그인</title>
      </Head>
      <LoginPageComponent />
    </>
  );
};

LoginPage.getInitialProps = () => {};

export default LoginPage;
