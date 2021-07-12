import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Design System/Components/Checkbox',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
    tickColor: { control: 'color' },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};