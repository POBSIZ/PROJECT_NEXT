import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from 'src/components/layout';
import '../styles/globals.css';

import GlobalProvider from 'src/components/layout/globalProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalProvider>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta property="og:image" content="/banner.jpg" />
          <meta property="og:title" content="PROJECT - 부산 연합 IT 동아리" />
          <meta property="og:description" content="부산 연합 IT 동아리" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    </>
  );
};

export default App;
