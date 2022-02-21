import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import DropdownComponent from './dropdown_component';

export interface DropdownParamsType {
  children: string;
}

const Dropdown: React.FC<DropdownParamsType> = (
  props,
  { children }: DropdownParamsType,
) => {
  return (
    <>
      <DropdownComponent {...props} />
    </>
  );
};

export default Dropdown;