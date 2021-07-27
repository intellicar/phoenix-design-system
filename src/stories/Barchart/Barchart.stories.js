import React from 'react';
import styled from 'styled-components';

import { Barchart } from './Barchart';

export default {
  title: 'Design System/Widgets/Barchart',
  component: Barchart,
  argTypes: {
    primaryColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

const ChartContainer = styled.div`
    width:40%;
    height:10rem;
`

export const Default = (args) => <ChartContainer><Barchart {...args} /></ChartContainer>;