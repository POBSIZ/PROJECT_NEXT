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
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { random } from 'nanoid';

import Layout from 'Layouts';

const ChartComponent: React.FC<any> = ({}) => {
  const initialOptions: any = {
    title: { text: 'Test' },
    // chart: { type: 'pie' },
    series: [
      {
        name: 'Samsung',
        data: [],
      },
    ], // 데이터가 처음엔 비어았다.
  };
  const [options, setOptions] = useState<any>(initialOptions);

  const getInitData = async () => {
    const result = [
      {
        name: 'Samsung',
        data: [],
      },
    ];

    let tempSeries: any = [];
    result.forEach((item) => tempSeries.push(item));

    setOptions({
      ...initialOptions,
      series: tempSeries,
    });
  };

  const asyncRequest = useCallback(async () => {
    let tempSeries: any = Object.assign([], options.series);

    const dataSet = await tempSeries.map((item) => {
      const randNum = Math.floor(
        Math.random() * Math.floor(Math.random() * 1000),
      );
      const itemData = Object.assign({}, item);
      const currDate = new Date().getTime();
      itemData.data.push([currDate, randNum]);
      return itemData;
    });
    setOptions({
      ...initialOptions,
      series: dataSet,
    });
  }, []);

  useEffect(() => {
    // getInitData();
    setInterval(function () {
      asyncRequest();
    }, 1000);
    return () => {
      setOptions(initialOptions);
    };
  }, []);

  return (
    <>
      <Layout.Container>
        <HighchartsReact
          highcharts={HighStock}
          constructorType={'stockChart'}
          options={options}
        />
        <button onClick={asyncRequest}>TEST</button>
      </Layout.Container>
    </>
  );
};

export default ChartComponent;
