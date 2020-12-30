// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import CityCard, { CityCardProps } from "@/components/CityCard";
import "@/components/CityCard/style/index.less";
import { Meta, Story } from "@storybook/react/types-6-0";
import * as React from "react";

export default {
  title: "Self/CityCard",
  component: CityCard,
  argTypes: {},
} as Meta;

const Template: Story<CityCardProps> = (args) => <CityCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  pageSize: 20,
  data: ["ada", "asdasdas"],
};
