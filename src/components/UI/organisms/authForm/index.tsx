import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import AuthFormComponent from './authForm_component';

const AuthForm: React.FC<any> = (props) => {
  return (
    <>
      <AuthFormComponent {...props} />
    </>
  );
};

export default AuthForm;
