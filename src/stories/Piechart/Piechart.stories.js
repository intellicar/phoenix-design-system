import React from "react";
import styled from "styled-components";

import { PieChart } from "./Piechart";

export default {
  title: "Design System/Widgets/Piechart",
  component: PieChart,
  argTypes: {},
};

const ChartContainer = styled.div`
  width: 40%;
  height: 10rem;
`;

export const Default = (args) => (
  <ChartContainer>
    <PieChart {...args} />
  </ChartContainer>
);
