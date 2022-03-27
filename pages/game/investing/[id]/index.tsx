import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { NextPage } from 'next';
import * as StompJs from '@stomp/stompjs';
import { useRouter } from 'next/router';

import HighStock from 'highcharts/highstock';
import Highcharts, { color, Color, ColorString } from 'highcharts';
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

const colorMap: ColorString[] = [
  '#f2632c',
  '#f37f36',
  '#fbc252',
  '#f9f44f',
  '#8cefab',
  '#7caee1',
  '#9a82c0',
];

const GameReadyPage: NextPage<any> = (props) => {
  const router = useRouter();
  const client = useRef<any>({});
  const [currentUser, setCurrentUser] = useState<any>({});
  const [users, setUsers] = useState<any>({});
  const [initialOptions, setInitialOptions] = useState<ChartOption>({
    title: { text: '모의 투자 게임' },
    colors: [],
    series: [],
  });
  const [chartType, setChartType] = useState<'candlestick' | 'line'>('line');
  const [options, setOptions] = useState<ChartOption>(initialOptions);

  const subscribe = useCallback(
    (user: any) => {
      client.current.subscribe(`/sub/game/channel/${props.id}`, (res) => {
        // 여기서 데이터 오는 것들을 받을 수 있음.
        const result = JSON.parse(
          Buffer.from(res._binaryBody, 'base64').toString(),
        );
        if (result.type === 'RENEWAL') {
          setUsers(result.users);
        } else if (result.type === 'INIT') {
          const colors: ColorString[] = [];
          const series: Series[] = [];
          for (let i = 0; i < result.companyIds.length; i++) {
            colors.push(colorMap[i]);
            series.push({
              type: chartType,
              name: result.companyIds[i].toString(),
              data: [],
            });
          }
          setInitialOptions({
            title: { text: '모의 투자 게임' },
            colors,
            series,
          });
          setOptions({
            title: { text: '모의 투자 게임' },
            colors,
            series,
          });
        } else if (result.type === 'STOCK') {
          // 데이터 업데이트
          for (let i = 0; i < result.stockInfoMessageList.length; i++) {
            const item = result.stockInfoMessageList[i];
            console.log('options', options);
            console.log('initialOptions', initialOptions);
            if (options.series.length > 0) {
              if (chartType === 'line') {
                updateChart([item.close], item.companyId);
              } else {
                updateChart(
                  [item.date, item.open, item.hight, item.low, item.close],
                  item.companyId,
                );
              }
            }
          }
        } else if (result.type === 'CLOSE') {
        } else if (result.type === 'NOTICE') {
        }
      });
      client.current.publish({
        destination: `/pub/game/channel`,
        body: JSON.stringify({
          type: 'ENTER',
          channelId: props.id,
          senderId: user.userId,
          senderName: user.userName,
        }),
      });
    },
    [options, initialOptions],
  );

  const connect = useCallback(
    (user: any) => {
      client.current = new StompJs.Client({
        brokerURL: 'ws://172.30.1.32:8080/ws-stomp', // 웹소켓 서버로 직접 접속
        connectHeaders: {
          'auth-token': 'spring-chat-auth-token',
        },
        debug: function (str) {
          // console.log(str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: () => {
          subscribe(user);
        },
      });
      client.current.activate();
    },
    [options, initialOptions],
  );

  const disconnect = () => {
    client.current.publish({
      destination: `/pub/game/channel`,
      body: JSON.stringify({
        type: 'EXIT',
        channelId: props.id,
        senderId: currentUser.userId,
        senderName: currentUser.userName,
      }),
    });
    client.current.deactivate();
  };

  // 차트 내용 업데이트
  const updateChart = useCallback(
    async (inputData, inputName) => {
      const dataSet = await options.series.map((item: Series) => {
        if (item.name === inputName.toString()) {
          const itemData: any = item.data;
          itemData.push(inputData);
          item.data = [...new Set(itemData)];
          item.type = chartType;
          return item;
        } else {
          item.type = chartType;
          return item;
        }
      });
      setOptions({
        ...initialOptions,
        series: dataSet,
      });
    },
    [options],
  );

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

  useEffect(() => {
    axios
      .post(
        `http://172.30.1.32:8000/api/v1/investment/channel/${props.id}`,
        {},
        { withCredentials: true },
      )
      .then((res) => {
        if (res.status === 200) {
          if (res.data[0].type === 'SUCCESS') {
            setCurrentUser({
              userId: res.data[0].userId,
              userName: res.data[0].userName,
            });
            connect({
              userId: res.data[0].userId,
              userName: res.data[0].userName,
            });
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
              destination: `/pub/game/channel`,
              body: JSON.stringify({
                type: 'READY',
                channelId: props.id,
                senderId: currentUser.userId,
                senderName: currentUser.userName,
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
