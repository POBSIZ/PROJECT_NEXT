import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import Select from './select_component';

export interface SelectParamsType {}

const Name: React.FC<SelectParamsType> = (props, {}) => {
  return (
    <>
      <Select {...props} />
    </>
  );
};

export default Name;
