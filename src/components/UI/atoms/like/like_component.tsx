import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyleLike from './like_styled';

const LikeComponent: React.FC<any> = (props) => {
  const [LikeState, setLikeState] = useState(false);

  const handleLikeState = () => {
    LikeState ? setLikeState(false) : setLikeState(true);
  };

  return (
    <>
      <StyleLike isLike={LikeState} {...props}>
        <FontAwesomeIcon
          className="Icon"
          onClick={handleLikeState}
          icon={faHeart}
        />
      </StyleLike>
    </>
  );
};

export default LikeComponent;
