// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { Button as AntdButton } from "antd";
import { ButtonProps } from "antd/lib/button";
import React from "react";

export default {
  title: "Antd/AntdButton",
  component: AntdButton,
  argTypes: {
    type: {
      name: "type", // 参数名称
      type: { name: "string", required: false }, // 参数类型
      defaultValue: "default", // 在story中的默认值
      table: {
        // docs表格中的对应字段值
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
      description: "这是按钮类型", //docs-description
      // 参数名
      control: {
        type: "select", // 表单类型
        options: [
          //取值范围
          "primary",
          "ghost",
          "dashed",
          "link",
          "text",
          "default",
        ],
      },
    },
  },
  // parameters: {
  //   docs: {
  //     page: () => <span>这是当前组件的文档</span>,
  //   },
  // },
} as Meta;

const Template: Story<ButtonProps> = (args) => <AntdButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
} as ButtonProps;
