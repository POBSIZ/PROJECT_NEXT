import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import InputComponent from './input_component';

export interface InputParamsType {
  placeholder: string;
  type:
    | 'text'
    | 'username'
    | 'password'
    | 'current-password'
    | 'new-password'
    | 'email';
  name: string;
  required?: boolean;
  disabled?: boolean;
  isFail?: boolean;
}

const Input: React.FC<InputParamsType> = (
  props,
  { placeholder, type, name, required, disabled, isFail }: InputParamsType,
) => {
  return (
    <>
      <InputComponent
        required={required}
        disabled={disabled}
        isFail={isFail}
        {...props}
      />
    </>
  );
};

export default Input;