import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { faThumbsUp as outfaThumbs } from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyleLike from './like_styled';

const LikeComponent: React.FC<any> = (props) => {
  console.log(props.isLike);
  return (
    <>
      <StyleLike onClick={props.onClick} {...props}>
        {props.isLike == true ? (
          <FontAwesomeIcon className="Icon" icon={faThumbsUp} />
        ) : (
          <FontAwesomeIcon className="Icon" icon={outfaThumbs} />
        )}
      </StyleLike>
    </>
  );
};

export default LikeComponent;
