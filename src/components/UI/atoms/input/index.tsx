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
    | 'number';
  value: string | number | null;
  onChange: (e: any) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  isFail?: boolean;
  step?: number;
  min?: number;
  max?: number;
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
