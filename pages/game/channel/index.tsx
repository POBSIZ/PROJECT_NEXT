import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';

import { ChannelPage } from 'UIpages';

const NextChannelPage: NextPage<any> = (props, { data }) => {
  return (
    <>
      <Head>
        <title>PROJECT|채널 목록</title>
      </Head>
      <ChannelPage channelList={props.data} />
    </>
  );
};

NextChannelPage.getInitialProps = async () => {
  const { data } = await axios.get('api/list/channel');
  return {
    data,
  };
};

export default NextChannelPage;
