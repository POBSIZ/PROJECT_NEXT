import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import LikeComponent from './like_component';

export interface LikeParamsType {}

const Like: React.FC<LikeParamsType> = (props: LikeParamsType) => {
  return (
    <>
      <LikeComponent {...props}></LikeComponent>
    </>
  );
};

export default Like;
