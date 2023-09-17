import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from 'shared/ui/Select/ui/Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Input value',
  options: [
    { value: '1', content: 'first' },
    { value: '2', content: 'second' },
    { value: '3', content: 'third' },
  ],
};
