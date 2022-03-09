import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import PlayingFormComponent from './PlayingForm_component';

const PlayingForm: React.FC<any> = (props, {}) => {
  return (
    <>
      <PlayingFormComponent {...props} />
    </>
  );
};

export default PlayingForm;
