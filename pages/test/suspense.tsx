import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';

import { CustomSuspense } from 'Hoc';
import { Loader } from 'Bases';

const Suspense: NextPage<any> = (props, {}) => {
  const getData = async () => {
    const { data } = await axios.get('http://localhost:3000/api/list/channel');
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Suspense</title>
      </Head>
      <CustomSuspense fallback={Loader} fn={getData}>
        Test
      </CustomSuspense>
    </>
  );
};

export default Suspense;
