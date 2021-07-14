import React from 'react';

import { RadioButton } from './RadioButton';

export default {
  title: 'Design System/Components/RadioButton',
  component: RadioButton,
  argTypes: {
    primaryColor: { control: 'color' },
    tickColor: { control: 'color' },
  },
};

const Template = (args) => <RadioButton {...args} />;

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