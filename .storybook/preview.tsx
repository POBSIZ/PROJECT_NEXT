import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import GlobalStyle from '../styles/global_styles';
import * as NextImage from 'next/image';

import '../styles/globals.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={GlobalStyle}>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
        />
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <Story />
    </ThemeProvider>
  ),
];
