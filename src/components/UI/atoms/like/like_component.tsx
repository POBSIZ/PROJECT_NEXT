import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyleLike from './like_styled';

const LikeComponent: React.FC<any> = (props) => {
  const Redheart = '#d62839';
  return (
    <>
      <StyleLike onClick={props.onClick} {...props}>
        {props.isLike == true ? (
          <FontAwesomeIcon
            style={{ color: Redheart }}
            className="Icon"
            icon={faHeart}
          />
        ) : (
          <FontAwesomeIcon className="Icon" icon={faHeart} />
        )}
      </StyleLike>
    </>
  );
};

export default LikeComponent;
