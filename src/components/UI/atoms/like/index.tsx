import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import LikeComponent from './like_component';

export interface LikeParamsType {
  className: string;
  isLike?: boolean;
  onClick?: () => {};
}

const Like: React.FC<LikeParamsType> = (
  props,
  { className, isLike }: LikeParamsType,
) => {
  return (
    <>
      <LikeComponent {...props}></LikeComponent>
    </>
  );
};

export default Like;
