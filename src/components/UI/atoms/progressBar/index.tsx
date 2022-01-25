import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ProgressBarComponent from './progressBar_component';

export interface ProgressBarParamsType {
  prwidth: string;
  bgcolor: 'black' | 'gradient' | 'blue';
  height: string;
}

const ProgressBar: React.FC<ProgressBarParamsType> = (
  props,
  {}: ProgressBarParamsType,
) => {
  return (
    <>
      <ProgressBarComponent {...props} />
    </>
  );
};

export default ProgressBar;
