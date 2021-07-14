import React, {useEffect} from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories } from '@storybook/addon-docs';


import { Tabs } from './Tabs';

const {TabPane} = Tabs;

export default {
    title: 'Design System/Components/Tabs',
    component: Tabs,
    argTypes: {
        primaryColor: { control: 'color' },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <h2>Usage</h2>
                    <code>{"import { Tabs } from '@intellicar/phoenix-design-system';"}</code>
                    <br />
                    <code>{"const { TabPane } = Tabs;"}</code>
                    <Subtitle />
                    <Description />
                    <Primary />
                    <ArgsTable />
                    <Stories />
                </>
            )
        }
    }

};

const Template = (args) => {
    return  <Tabs defaultActiveKey="1" onTabChange={() => {}} {...args}>
                <TabPane tab="Tab 1" key="1">
                    Content for First Pane goes here
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content for Second Pane goes here
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content for Third Pane goes here
                </TabPane>
            </Tabs>
};

export const Regular = Template.bind({});
Regular.args = {
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Centered = Template.bind({});
Centered.args = {
    centered: true
};

export const Left = Template.bind({});
Left.args = {
    position: 'left'
};

export const Top = Template.bind({});
Top.args = {
    position: 'top'
};

export const Right = Template.bind({});
Right.args = {
    position: 'right'
};

export const Bottom = Template.bind({});
Bottom.args = {
    position: 'bottom'
};

const callback = (val, evt) => {
    console.log("newval", val)
    console.log("newevt", evt)
}

export const Disabled = (args) => {
    return  <Tabs defaultActiveKey="1" onTabChange={() => {}} {...args}>
                <TabPane tab="Tab 1" key="1">
                    Content for First Pane goes here
                </TabPane>
                <TabPane tab="Tab 2" key="2" disabled>
                    Content for Second Pane goes here
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content for Third Pane goes here
                </TabPane>
            </Tabs>
};