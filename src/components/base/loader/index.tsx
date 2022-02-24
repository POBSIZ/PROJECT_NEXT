import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import LoaderComponent from './loader_component';

const Loader: React.FC<any> = (props, {}) => {
  return(
    <>
      <LoaderComponent {...props} />
    </>
  );
};

export default Loader;