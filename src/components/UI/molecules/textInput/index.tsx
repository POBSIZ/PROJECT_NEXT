import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import TextInputComponent from './textInput_component';

export interface TextInputParamsType {
  isFail: boolean;
  warnning?: boolean;
  type: string;
  first_name?: boolean;
  last_name?: boolean;
}
const TextInput: React.FC<any> = (props, {}) => {
  return (
    <>
      <TextInputComponent {...props}></TextInputComponent>
    </>
  );
};

export default TextInput;
