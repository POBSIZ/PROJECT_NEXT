import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import HighStock from 'highcharts/highstock';
import Highcharts, { Color, ColorString } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { random } from 'nanoid';

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

const ChartComponent: React.FC<any> = ({}) => {
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
    console.log(count);
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

  return (
    <>
      <Layout.Container>
        <HighchartsReact
          highcharts={HighStock}
          constructorType="stockChart"
          options={options}
        />
        <button onClick={changeLineType}>차트 모양 변경</button>
        <button
          onClick={async () => {
            await requestData();
            setLoadState(true);
          }}
        >
          시작
        </button>
      </Layout.Container>
    </>
  );
};

export default ChartComponent;
