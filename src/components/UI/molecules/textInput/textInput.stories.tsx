import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import TextInputComponent from './textInput_component';

export default {
  title: 'Molecules/TextInput',
  component: TextInputComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <TextInputComponent {...args}></TextInputComponent>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
