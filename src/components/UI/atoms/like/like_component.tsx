import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyleLike from './like_styled';

import { LikeParamsType } from '.';

const LikeComponent: React.FC<LikeParamsType> = (props) => {
  const [LikeState, setLikeState] = useState(
    props.isLike ? props.isLike : false,
  );

  const handleLikeState = async () => {
    LikeState ? setLikeState(false) : setLikeState(true);
    props.onClick ? null : props.onClick;
    // console.log(`Like:${LikeState ? false : true}`);
  };

  return (
    <>
      <StyleLike {...props} isLike={LikeState}>
        <FontAwesomeIcon
          className={`Icon ${props.className}`}
          onClick={handleLikeState}
          icon={faHeart as IconProp}
        />
      </StyleLike>
    </>
  );
};

export default LikeComponent;
