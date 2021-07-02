import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useCounter } from "./useCounter";
import mdx from "./useCounter.mdx";
interface CounterProps {
  initialValue: number;
  max?: number | null;
  min?: number | null;
}
const Comp = ({ initialValue, max = null, min = null }: CounterProps) => {
  const [current, actions] = useCounter(initialValue, max, min);

  return (
    <div>
      <h1>Max : {max}</h1>
      <h1>Min : {min}</h1>
      <button onClick={() => actions.dec()}>-</button>
      {current}
      <button onClick={() => actions.inc()}>+</button>
      <button onClick={() => actions.reset()}>reset</button>
    </div>
  );
};
export default {
  title: "Hooks/useCounter",
  component: Comp,
  argTypes: {
    max: {
      control: "number",
    },
    min: { control: "number" },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  initialValue: 0,
};
