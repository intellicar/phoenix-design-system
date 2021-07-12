import React from 'react';

import { Textarea } from './Textarea';

export default {
  title: 'Design System/Components/Textarea',
  component: Textarea
};

const Template = (args) => <Textarea {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Stretched = Template.bind({});
Stretched.args = {
  stretched: true
};