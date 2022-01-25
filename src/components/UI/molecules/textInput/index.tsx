import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import TextInputComponent from './textInput_component';

const TextInput: React.FC<any> = ({}) => {
  return (
    <>
      <TextInputComponent></TextInputComponent>
    </>
  );
};

export default TextInput;
