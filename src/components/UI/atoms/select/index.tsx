import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import SelectComponent from './select_component';

export interface SelectParamsType {
  item: string[];
  placeholder: string;
  name?: string;
  isFail?: boolean;
  required?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
}

const Select: React.FC<SelectParamsType> = (
  props,
  {
    item,
    placeholder,
    isFail,
    name,
    required,
    isSuccess,
    isWarning,
  }: SelectParamsType,
) => {
  return (
    <>
      <SelectComponent {...props} />
    </>
  );
};

export default Select;
