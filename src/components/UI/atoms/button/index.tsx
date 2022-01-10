import ButtonComponent from './button_component';
import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonParamsType {
  children: string;
  backColor: 'primary' | 'gradient';
}

const Button: React.FC<ButtonParamsType> = (props, {}: ButtonParamsType) => {
  return (
    <>
      <ButtonComponent {...props} />
    </>
  );
};

export default Button;
