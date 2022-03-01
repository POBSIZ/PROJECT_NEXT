import React, { useEffect, useState, useRef, Suspense } from 'react';
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
import nanoid from 'nanoid';

import { CustomSuspense } from 'Hoc';
import { Loader } from 'Bases';

const Test: React.FC<any> = ({}) => {
  const [listData, setListData]: any = useState([]);

  const getData = async () => {
    const { data } = await axios.get('http://localhost:3000/api/list/channel');
    setTimeout(() => {
      setListData(data);
    }, 3000);
    console.log(data);
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  return (
    <>
      <div>
        {listData.map((item) => {
          return (
            <span
              style={{
                margin: '0 10px',
              }}
            >
              {item.title}
            </span>
          );
        })}
      </div>
      <button onClick={getData}>Get Data</button>
    </>
  );
};

export default Test;
