import React from 'react';

import { Button } from './Button';

export default {
  title: 'Design System/Components/Button',
  component: Button,
  argTypes: {
    primaryColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Click Me!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click Me!',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Click Me!',
};

export const Regular = Template.bind({});
Regular.args = {
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