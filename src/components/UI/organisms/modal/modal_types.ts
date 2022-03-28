import React, { ReactNode } from 'react';

export interface ModalType {
  children?: ReactNode;
  visible: boolean;
  position?: 'top' | 'bottom';
  width: number | string;
  height: number | string;
}

export interface ModalHeaderLayoutType {
  title: string;
  onClick?: () => void;
}

export interface ModalContentLayoutType {
  children?: ReactNode;
  row?: boolean;
  paddingLess?: boolean;
  backgroundColor?: string;
}

export interface ModalWrapperType {
  children?: ReactNode;
  width: number | string;
  height: number | string;
}
