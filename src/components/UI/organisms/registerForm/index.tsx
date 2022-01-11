import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import RegsterFormComponent from './registerForm_component';

const RegisterForm: React.FC<any> = (props, {}) => {
  return (
    <>
      <RegsterFormComponent {...props} />
    </>
  );
};

export default RegisterForm;
