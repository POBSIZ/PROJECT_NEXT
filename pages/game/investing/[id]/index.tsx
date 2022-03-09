import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { NextPage } from 'next';
// import { SocketClient } from 'Utils';
import * as StompJs from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useRouter } from 'next/router';

const GameReadyPage: NextPage<any> = (props) => {
  const router = useRouter();
  const client = useRef<any>({});
  // const socketClient = SocketClient({
  //   heartbeatIncoming: 1000 * 1,
  //   onConnectFunc: () => {},
  //   onErrorFunc: () => {},
  // });
  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    client.current.subscribe(`/sub/game/channel/${props.id}`, (res) => {
      console.log(res);
    });
    axios
      .post(
        `http://172.30.1.36:8000/api/v1/investment/channel/start/${props.id}`,
        {},
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: 'ws://172.30.1.56:8080/ws-stomp', // 웹소켓 서버로 직접 접속
      // webSocketFactory: () => new SockJS('http://172.30.1.56:8080/ws-stomp'), // proxy를 통한 접속
      connectHeaders: {
        'auth-token': 'spring-chat-auth-token',
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.current.activate();
  };

  // const handleRouteChange = async () => {
  //   if (window.location.pathname.startsWith('/game/investing/')) {
  //     // await client.current.unsubscribe();
  //     await client.current.deactivate();
  //   }
  // };

  // useEffect(() => {
  //   router.events.on('routeChangeStart', handleRouteChange);
  //   return () => {};
  // }, []);

  useEffect(() => {
    axios
      .post(
        `http://172.30.1.36:8000/api/v1/investment/channel/${props.id}`,
        {},
        { withCredentials: true },
      )
      .then((res) => {
        if (res.status === 200) {
          if (res.data[0].type === 'SUCCESS') {
            connect();
          } else {
            router.back();
          }
        }
      });
    return () => disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>PROJECT | 게임홈</title>
      </Head>
    </>
  );
};

GameReadyPage.getInitialProps = async ({ query }) => {
  return {
    id: query.id,
  };
};

export default GameReadyPage;
