import React, { useEffect, useState, useRef, MouseEvent } from 'react';
import { Meta, Story } from '@storybook/react';
import ModalComponent from './modal_component';
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

const Template: Story<any> = (args) => {
  const [isShow, setIsShow] = useState(true);
  const handleShow = (e: MouseEvent) => {
    e.stopPropagation;
    if (e.target !== e.currentTarget) return;
    isShow ? setIsShow(false) : setIsShow(true);
  };
  return (
    <StoriesLayout title="Atoms/Modal">
      <div style={{ width: '100%' }}>
        <button onClick={(e) => handleShow(e)}>Toggle Show</button>

        <span className="info">White</span>
        <ModalComponent {...args} isShow={isShow} handleShow={handleShow} />

        <span className="info">Primary</span>
        <ModalComponent
          {...args}
          isShow={isShow}
          handleShow={handleShow}
          backColor="primary"
        />

        <span className="info">Gradient</span>
        <ModalComponent
          {...args}
          isShow={isShow}
          handleShow={handleShow}
          backColor="gradient"
        />

        <span className="info">Black</span>
        <ModalComponent
          {...args}
          isShow={isShow}
          handleShow={handleShow}
          backColor="black"
        />
      </div>
    </StoriesLayout>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <h1 style={{ margin: '0' }}>TEST</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        placeat voluptate repellendus cumque ab ex cum nihil aliquid ratione
        alias? Ad, pariatur. Nulla, eligendi? Enim placeat maxime aperiam ipsum?
        Vitae?
      </p>
    </div>
  ),
  width: '50%',
  backColor: 'white',
};
