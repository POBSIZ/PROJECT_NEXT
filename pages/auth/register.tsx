import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';

// import RegisterComponent from 'UIpages/auth/register/index';
import { RegisterComponent } from 'UIpages/index';

const RegisterPage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title>PROJECT | 회원가입</title>
      </Head>
      <RegisterComponent />
    </>
  );
};

// RegisterPage.getInitialProps = () => {};

export default RegisterPage;
