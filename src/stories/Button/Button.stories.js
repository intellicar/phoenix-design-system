import React from 'react';

import { Button } from './Button';

export default {
  title: 'Design System/Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Click Me!',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Click Me!',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Click Me!',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Click Me!',
};

export const Stretched = Template.bind({});
Stretched.args = {
  stretched: true,
  label: 'Click Me!',
};