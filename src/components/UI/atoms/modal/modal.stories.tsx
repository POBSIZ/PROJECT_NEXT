import React, { useEffect, useState, useRef, MouseEvent } from 'react';
import { Meta, Story } from '@storybook/react';
import ModalComponent, {
  ModalHeaderLayout,
  ModalContentLayout,
} from './modal_component';
import StoriesLayout from 'StoriesLayout';

export default {
  title: 'Atoms/Modal',
  component: ModalComponent,
  argTypes: {
    backColor: {
      control: {
        type: 'select',
        options: ['white', 'primary', 'gradient', 'black'],
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <StoriesLayout title="Atoms/Modal">
    <div style={{ width: args.width }}>
      <span className="info">Primary</span>
      <ModalComponent visible={args.isVisible} height={'50%'} width={'50%'}>
        <ModalHeaderLayout title={'Modal Title'} onClick={() => {}} />
        <ModalContentLayout></ModalContentLayout>
      </ModalComponent>

      <span className="info">Gradient</span>

      <ModalComponent visible={args.isVisible} height={'50%'} width={'50%'}>
        <ModalHeaderLayout title={'Modal Title'} onClick={() => {}} />
        <ModalContentLayout backgroundColor="gradient"></ModalContentLayout>
      </ModalComponent>

      <span className="info">Black</span>
      <ModalComponent visible={args.isVisible} height={'50%'} width={'50%'}>
        <ModalHeaderLayout title={'Modal Title'} onClick={() => {}} />
        <ModalContentLayout backgroundColor="black"></ModalContentLayout>
      </ModalComponent>
    </div>
  </StoriesLayout>
);

export const Default = Template.bind({});
Default.args = {
  children: 'test',
  isVisible: false,
  title: 'Modal Title',
  backColor: 'primary',
  width: '400px',
  height: '150px',
};
