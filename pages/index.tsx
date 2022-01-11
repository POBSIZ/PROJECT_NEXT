import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Pages, { Home } from 'src/components/pages';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>PROJECT</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
