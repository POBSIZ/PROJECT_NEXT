import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from '../src/redux/reducer/configureStore';
import { composeWithDevTools } from 'redux-devtools-extension';
import StoryRouter from 'storybook-react-router';
// import GlobalStyle from "../src/assets/GlobalStyles";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Helmet } from 'react-helmet';
import Head from 'next/head';

import GlobalStyle from '../styles/global_styles';

import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import '../styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const store: any = configureStore();
const persistor = persistStore(store);

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={GlobalStyle}>
          <Head>
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
              rel="stylesheet"
            />
            <link rel="stylesheet" href="../styles/init.css" />
          </Head>
          <Story />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  ),
];
