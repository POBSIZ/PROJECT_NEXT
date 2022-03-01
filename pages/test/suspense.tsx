import React, { useState, Suspense } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';

import Pages, { Test } from 'UIpages';
import { Loader } from 'Bases';

const SuspensePage: NextPage<any> = (props, {}) => {
  const TestPage = React.lazy(() => import('UIpages/test'));
  return (
    <>
      <Head>
        <title>Suspense</title>
      </Head>
      <Suspense fallback={<Loader />}>
        <TestPage />
      </Suspense>
    </>
  );
};

export default SuspensePage;
