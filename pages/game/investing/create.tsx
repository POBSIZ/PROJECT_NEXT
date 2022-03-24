import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { CreatePage } from 'UIpages';

const CreateNextPage: NextPage<any> = (props, {}) => {
  return (
    <>
      <Head>
        <title>PROJECT | 방 생성</title>
      </Head>
      <CreatePage />
    </>
  );
};

// CreateNextPage.getInitialProps = async () => {
//   return {};
// };

export default CreateNextPage;
