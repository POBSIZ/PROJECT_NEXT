import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import StoiesLayoutComponent from './layout_component';

export interface StoriesLayoutParamsType {
  title: string;
}

const StoriesLayout: React.FC<StoriesLayoutParamsType> = (
  props,
  { title }: StoriesLayoutParamsType,
) => {
  return (
    <>
      <StoiesLayoutComponent {...props} />
    </>
  );
};

export default StoriesLayout;
