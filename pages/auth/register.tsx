import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import Head from 'next/head';

import RegisterComponent from 'UIpages/auth/register';

const RegisterPage: React.FC<any> = ({}) => {
  return (
    <>
      <Head>
        <title>PROJECT | 회원가입</title>
      </Head>
      <RegisterComponent />
    </>
  );
};

export default RegisterPage;
