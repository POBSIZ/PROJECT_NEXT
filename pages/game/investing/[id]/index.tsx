import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { NextPage } from 'next';
import * as StompJs from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useRouter } from 'next/router';

<<<<<<< HEAD
import { Chart } from 'Hoc';
=======
import HighStock from 'highcharts/highstock';
import Highcharts, { Color, ColorString } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Layout from 'Layouts';

interface Series {
  type: 'candlestick' | 'line';
  name: string;
  data: any[];
}

interface ChartOption {
  title: {
    text: string;
  };
  chart?: {
    type?: string;
  };
  colors?: ColorString[];
  series: Series[];
}
>>>>>>> 36b725122e558ce168300775b2e96b68e47fea5f

const GameReadyPage: NextPage<any> = (props) => {
  const router = useRouter();
  const client = useRef<any>({});
  const [users, setUsers] = useState({});
  const initialOptions: ChartOption = {
    title: { text: 'Test' },
    colors: ['#7bb4ec'],
    series: [
      {
        type: 'line',
        name: 'Samsung',
        data: [],
      },
    ],
  };
  const [preLoadData, setPreLoadData] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const [loadState, setLoadState] = useState<boolean>(false);
  const [chartType, setChartType] = useState<'candlestick' | 'line'>('line');
  const [options, setOptions] = useState<ChartOption>(initialOptions);

  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    client.current.subscribe(`/sub/game/channel/${props.id}`, (res) => {
      // 여기서 데이터 오는 것들을 받을 수 있음.
      const result = JSON.parse(
        Buffer.from(res._binaryBody, 'base64').toString(),
      );
      if (result.type === 'RENEWAL') {
        setUsers(result.users);
      } else if (result.type === 'DATA') {
        console.log(result);
      }
    });
    client.current.publish({
      destination: `/pub/game/message`,
      body: JSON.stringify({
        type: 'ENTER',
        channelId: props.id,
        senderId: 2,
        senderName: 'Test',
      }),
    });
  };

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: 'ws://172.30.1.11:8080/ws-stomp', // 웹소켓 서버로 직접 접속
      // webSocketFactory: () => new SockJS('http://172.30.1.11:8080/ws-stomp'), // proxy를 통한 접속
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
        // console.error(frame);
      },
    });

    client.current.activate();
  };

  // 차트 내용 업데이트
  const updateChart = async (inputData) => {
    const tempSeries: Series[] = Object.assign([], options.series);

    const dataSet = await tempSeries.map((item: Series) => {
      const itemData: any = item.data;
      itemData.push(inputData);
      item.data = [...new Set(itemData)];
      return item;
    });
    setOptions({
      ...initialOptions,
      series: dataSet,
    });
  };

  // 차트 모양 변경
  async function changeLineType() {
    const tempSeries: any = Object.assign([], options.series);
    if (chartType === 'line') {
      const dataSet = await tempSeries.map((item: Series) => {
        item.type = 'candlestick';
        return item;
      });
      setChartType('candlestick');
      setOptions({
        ...initialOptions,
        series: dataSet,
      });
    } else {
      const dataSet = await tempSeries.map((item: Series) => {
        item.type = 'line';
        return item;
      });
      setChartType('line');
      setOptions({
        ...initialOptions,
        series: dataSet,
      });
    }
  }

  function sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }

  // 데이터 요청(depressed)
  function requestData() {
    return new Promise((resolve) => {
      const loadData: any = [];
      for (let i = 0; i < 30; i++) {
        const randNum = Math.floor(
          Math.random() * Math.floor(Math.random() * 10000),
        );
        const currDate = new Date().getTime() - i * 1000;
        loadData.push([
          currDate,
          randNum,
          randNum + 15,
          randNum - 15,
          randNum + 4,
        ]);
      }
      setPreLoadData(preLoadData.concat(loadData));
      resolve(preLoadData.concat(loadData));
    });
  }

  useEffect(() => {
    // console.log(count);
  }, [count]);

  async function asyncUpdateChart() {
    for (let i = 0; i < 30; i++) {
      const randNum = Math.floor(
        Math.random() * Math.floor(Math.random() * 10000),
      );
      const currDate = new Date().getTime() - i * 1000;
      updateChart([currDate, randNum, randNum + 15, randNum - 15, randNum + 4]);
      await sleep(1000);
      setCount((count) => count + 1);
    }
  }

  useEffect(() => {
    if (loadState) {
      asyncUpdateChart();
      setLoadState(false);
    }
  }, [loadState]);

  useEffect(() => {
    axios
      .post(
        `http://172.30.1.53:8000/api/v1/investment/channel/${props.id}`,
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
      <Layout.Container>
        <HighchartsReact
          highcharts={HighStock}
          constructorType="stockChart"
          options={options}
        />
        <button onClick={changeLineType}>차트 모양 변경</button>
        <button
          onClick={async () => {
            client.current.publish({
              destination: `/pub/game/start`,
              body: JSON.stringify({
                type: 'ENTER',
                channelId: props.id,
                senderId: 2,
                senderName: 'Test',
              }),
            });
          }}
        >
          시작
        </button>
      </Layout.Container>
    </>
  );
};

GameReadyPage.getInitialProps = async ({ query }) => {
  return {
    id: query.id,
  };
};

export default GameReadyPage;
