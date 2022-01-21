import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import BadgeComponent from './badge_component';

export interface BadgeParamsType {
  children: string;
  backColor: 'primary' | 'gradient' | 'black' | 'none';
  textColor?: string;
}

const Badge: React.FC<BadgeParamsType> = (props, {}: BadgeParamsType) => {
  return (
    <>
      <BadgeComponent {...props} />
    </>
  );
};

export default Badge;
