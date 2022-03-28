import React, {
  useEffect,
  useState,
  useRef,
  CSSProperties,
  ReactNode,
} from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import StoiesLayoutComponent from './layout_component';

export interface StoriesLayoutParamsType {
  title: string;
  style?: CSSProperties;
  children: ReactNode;
}

const StoriesLayout: React.FC<StoriesLayoutParamsType> = (
  props,
  { title, style, children }: StoriesLayoutParamsType,
) => {
  return (
    <>
      <StoiesLayoutComponent {...props} />
    </>
  );
};

export default StoriesLayout;
