// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import TagCard, { TagCardProps } from "@/components/TagCard";
import "@/components/TagCard/style/index.less";
import { Meta, Story } from "@storybook/react/types-6-0";
import * as React from "react";

// 1. 默认导出meta（主要是component和title）
export default {
  title: "Self/TagCard",
  component: TagCard,
} as Meta;

// 1. 创建template （一个接收入参并返回组件的函数）
const Template: Story<TagCardProps> = (args) => <TagCard {...args} />;
// 2. 导出template
export const Primary = Template.bind({});
// 3. story的初始参数
Primary.args = {
  pageSize: 10,
  data: ["ada", "asdasdas"],
};
