import React from "react";
import { MultiSelect } from "./MultiSelect";

export default {
  title: "Design System/Components/MultiSelect",
  component: MultiSelect,
  argTypes: {},
};

const randomAlert = ["Hell yeah 😉", "Violla!! 😀", "Awesome 😎", ""];

const dummyList = [
  {
    vehicleid: 32049,
    vehicleno: "BC-091",
  },
  {
    vehicleid: 49850,
    vehicleno: "BC-900",
  },
  {
    vehicleid: 32554,
    vehicleno: "BC-345",
  },
  {
    vehicleid: 12546,
    vehicleno: "BC-123",
  },
  {
    vehicleid: 95867,
    vehicleno: "BC-342",
  },
  {
    vehicleid: 45064,
    vehicleno: "BC-456",
  },
];
const Template = (args) => <MultiSelect {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  data: dummyList,
  selectedItem: [95867],
  onSelect: (item) => {
    console.log(item);
  },
  displayKey: "vehicleno",
  operationKey: "vehicleid",
  SelectionType: "Single",
};
