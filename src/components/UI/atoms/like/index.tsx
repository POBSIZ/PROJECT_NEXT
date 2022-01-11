import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import LikeComponent from './like_component';

const Like: React.FC<any> = (props, {}) => {
  return (
    <>
      <LikeComponent {...props}></LikeComponent>
    </>
  );
};

export default Like;
