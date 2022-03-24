import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';

import { ChannelPage } from 'UIpages';

const NextChannelPage: NextPage<any> = (props) => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://172.30.1.53:8000/api/v1/investment/channel')
      .then((res) => {
        setData(res.data[0].channels);
      });
  }, []);
  return (
    <>
      <Head>
        <title>PROJECT | 채널 목록</title>
      </Head>
      <ChannelPage channelList={props.data} />
    </>
  );
};

NextChannelPage.getInitialProps = async () => {
  // const { data } = await axios.get('api/list/channel');
  // const { data } = await axios.get('http://localhost:3000/api/list/channel/');
  const { data } = await axios.get('http://localhost:8888/api/list/channel/');
  return {
    data,
  };
};

export default NextChannelPage;
