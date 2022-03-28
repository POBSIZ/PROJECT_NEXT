import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import InputComponent from './input_component';

export interface InputParamsType {
  className?: string;
  placeholder: string;
  type:
    | 'text'
    | 'username'
    | 'password'
    | 'current-password'
    | 'new-password'
    | 'email'
    | 'number'
    | string;
  value: string | number;
  onChange: (e: React.EventHandler<any>) => void;
  name: string;
  required?: boolean;
  disabled?: boolean;
  isFail?: boolean;
}

const Input: React.FC<InputParamsType> = (
  props,
  {
    className,
    value,
    onChange,
    placeholder,
    type,
    name,
    required,
    disabled,
    isFail,
  }: InputParamsType,
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
