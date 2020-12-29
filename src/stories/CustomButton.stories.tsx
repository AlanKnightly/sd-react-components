// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import Button, { ButtonProps } from "@/components/Button/index";
import { Meta, Story } from "@storybook/react/types-6-0";
import * as React from "react";

export default {
  title: "Self/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
