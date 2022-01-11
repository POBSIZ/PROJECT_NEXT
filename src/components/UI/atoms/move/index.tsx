// crd
import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import MoveComponent from './move_component';

export interface MoveParamsType {
  href: string;
}

const Move: React.FC<MoveParamsType> = (props, { href }: MoveParamsType) => {
  return (
    <>
      <MoveComponent {...props} />
    </>
  );
};

export default Move;
