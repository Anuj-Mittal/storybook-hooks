import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import mdx from "./useCounter.mdx";
import { Comp } from "./Comp";
export default {
  title: "Hooks/useCounter",
  component: Comp,
  argTypes: {
    initialValue: {
      description: "Initial value of counter",
      control: "number",
    },
    min: { description: "Minimum value of counter", control: "number" },

    max: {
      description: "Maximum value of counter",
      control: "number",
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Usage = Template.bind({});
Usage.args = {
  initialValue: 0,
};
