import React from "react";

import { Chip } from "./Chip";

export default {
  title: "Design System/Components/Chip",
  component: Chip,
  argTypes: {},
};

const Template = (args) => <Chip {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Click Me!",
  size: "medium",
};

export const Avatar = Template.bind({});
Avatar.args = {
  label: "Avatar",
  size: "medium",
};

export const Action = Template.bind({});
Action.args = {
  size: "large",
  label: "Action",
  size: "medium",
};
