import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import LikeComponent from './like_component';

const Like: React.FC<any> = (props, {}) => {
  const dispatch = useDispatch();
  const like = useSelector((store: RootStateOrAny) => store.like);

  return (
    <>
      <LikeComponent isLike={like.islike} {...props}></LikeComponent>
    </>
  );
};

export default Like;
