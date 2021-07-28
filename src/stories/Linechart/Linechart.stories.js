import React from 'react';
import styled from 'styled-components';

import { Linechart } from './Linechart';

export default {
  title: 'Design System/Widgets/Linechart',
  component: Linechart,
  argTypes: {
    primaryColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

const ChartContainer = styled.div`
    width:40%;
    height:10rem;
`

export const Default = (args) => <ChartContainer><Linechart {...args} /></ChartContainer>;