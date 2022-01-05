import React from 'react';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from 'src/redux/reducer/configureStore';

import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from 'styled-components';
import GlobalStyle from 'StyleVars';

import Head from 'next/head';

import Layout from 'src/components/layout';

const store: any = configureStore();

const persistor = persistStore(store);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={GlobalStyle}>
            <Head>
              <link rel="icon" href="/favicon.png" />
              <meta property="og:image" content="/banner.jpg" />
              <meta
                property="og:title"
                content="PROJECT - 부산 연합 IT 동아리"
              />
              <meta property="og:description" content="부산 연합 IT 동아리" />
              <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
              />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </CookiesProvider>
  );
};

export default MyApp;
