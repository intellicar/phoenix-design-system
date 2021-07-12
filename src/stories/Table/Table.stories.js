import React from 'react';

import { Table } from './Table';

export default {
    title: 'Design System/Components/Table',
    component: Table
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});

export const HScroll = Template.bind({});
HScroll.args = {
  HScroll: true
};

export const Downloadable = Template.bind({});
Downloadable.args = {
  downloadable: true
};
