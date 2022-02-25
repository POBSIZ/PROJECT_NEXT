import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ContainerComponent from './container_component';

const Container: React.FC<any> = (props, {}) => {
  return(
    <>
      <ContainerComponent {...props} />
    </>
  );
};

export default Container;