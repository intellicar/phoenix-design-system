import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { Chip } from "./Chip";

export default {
  title: "Design System/Components/Chip",
  component: Chip,
  argTypes: {},
};

const randomAlert = ["Hell yeah 😉", "Violla!! 😀", "Awesome 😎", ""];

const Template = (args) => <Chip {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Basic",
  size: "medium",
};

export const Clickable = Template.bind({});
Clickable.args = {
  label: "Clickable",
  size: "medium",
  onClick: () => {
    alert(randomAlert[Math.floor(Math.random() * (2 + 1))]);
  },
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  size: "medium",
  onDelete: () => {
    alert("Deleted " + randomAlert[Math.floor(Math.random() * (2 + 1))]);
  },
  deleteIcon: <FaTimesCircle />,
  color: "primary",
  variant: "filled",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  size: "medium",
  onDelete: () => {
    alert("Deleted " + randomAlert[Math.floor(Math.random() * (2 + 1))]);
  },
  deleteIcon: <FaTimesCircle />,
  color: "secondary",
  variant: "filled",
};

export const Deletable = Template.bind({});
Deletable.args = {
  label: "Deletable",
  size: "medium",
  onDelete: () => {
    alert("Deleted " + randomAlert[Math.floor(Math.random() * (2 + 1))]);
  },
  deleteIcon: <FaTimesCircle />,
};

export const Avatar = Template.bind({});
Avatar.args = {
  label: "Avatar",
  size: "medium",
  avatar:
    "https://i.ibb.co/r42M6XX/Whats-App-Image-2021-10-20-at-2-58-51-PM.jpg",
};

export const Interactive = Template.bind({});
Interactive.args = {
  label: "Interactive",
  size: "medium",
  onClick: () => {
    console.log("interactive animation");
  },
  interactive: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  size: "medium",
  deleteIcon: <FaTimesCircle />,
  disabled: true,
};
export const Elevation = Template.bind({});
Elevation.args = {
  label: "Elevation",
  size: "medium",
  deleteIcon: <FaTimesCircle />,
  elevation: 4,
};
