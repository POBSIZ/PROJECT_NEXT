import React, { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { SocketClient } from 'Utils';

const GameReadyPage: NextPage<any> = () => {
  const socketClient = SocketClient({ heartbeatIncoming: 1000 * 1 });

  useEffect(() => {
    socketClient.activate();
  }, []);

  return (
    <>
      <Head>
        <title>PROJECT | 게임홈</title>
      </Head>
    </>
  );
};

export default GameReadyPage;
