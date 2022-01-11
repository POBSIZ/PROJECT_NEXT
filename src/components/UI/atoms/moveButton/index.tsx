// crd
import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import MoveComponent from './moveButton_component';

export interface MoveParamsType {
  children: string;
  href: string;
  radius: 'none' | '4' | '8' | '16' | '32' | '64';
  height: string;
  width: string;
}

const MoveButton: React.FC<MoveParamsType> = (
  props,
  { children, href, radius, height, width }: MoveParamsType,
) => {
  return (
    <>
      <MoveComponent {...props} />
    </>
  );
};

export default MoveButton;
