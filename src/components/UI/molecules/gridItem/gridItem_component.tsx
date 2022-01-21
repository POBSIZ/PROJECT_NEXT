import React, { useEffect, useState, useRef } from 'react';
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
import Banner from './banner.jpg';
import StyledGridList from './gridItem_styled';

import Atoms, { Badge } from 'Atoms/index';
import Image from 'next/image';

const GridItemComponent: React.FC<any> = ({}) => {
  return (
    <>
      <StyledGridList>
        <div className="Image-div">
          <Image
            layout="responsive"
            width="100px"
            height="100px"
            src={Banner}
          ></Image>
        </div>
        <Badge backColor="gradient">test</Badge>
      </StyledGridList>
    </>
  );
};

export default GridItemComponent;