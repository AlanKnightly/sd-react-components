// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button/index";
import React from "react";

export default {
  title: "Example/Button",
  component: Button,
  // https://ithelp.ithome.com.tw/articles/10246667
  argTypes: {
    // backgroundColor: { control: "color" },
    type: {
      control: {
        type: "select",
        options: ["primary", "ghost", "dashed", "link", "text", "default"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "test",
  type: "primary",
};
