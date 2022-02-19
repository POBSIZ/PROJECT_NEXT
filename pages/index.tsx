import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Pages, { Home } from 'src/components/pages';

const HomePage: NextPage<any> = ({ data }) => {
  return (
    <>
      <Head>
        <title>PROJECT</title>
      </Head>
      <Home />
    </>
  );
};

HomePage.getInitialProps = async () => {
  const data = undefined;
  return { data };
};

export default HomePage;
