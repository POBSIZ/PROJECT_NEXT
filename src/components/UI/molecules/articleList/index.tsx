import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ArticleListComponent from './articleList_component';

export interface ArticleListParamsType {}

const ArticleList: React.FC<any> = (props, {}) => {
  return (
    <>
      <ArticleListComponent {...props} />
    </>
  );
};

export default ArticleList;
