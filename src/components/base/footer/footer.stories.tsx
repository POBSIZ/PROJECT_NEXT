import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import FooterComponent from './footer_component';

export default {
    title: 'Base/Footer',
    component: FooterComponent,
    parameters: {},
} as Meta;

const Template: Story<any> = (args) => <FooterComponent {...args} />;

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};