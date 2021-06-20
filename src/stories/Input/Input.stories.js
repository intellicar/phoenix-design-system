import React from 'react';

import { Input } from './Input';

export default {
  title: 'Design System/Components/Input',
  component: Input
};

const Template = (args) => <Input {...args} />;

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

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  label: 'Label'
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  label: 'Email',
  placeholder: 'Type email here'
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  label: 'Password',
  placeholder: 'Type password here'
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  label: 'Number',
  placeholder: 'Type Number here'
};