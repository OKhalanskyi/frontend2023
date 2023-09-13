import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'lorem ipsum doolarc lorem ipsum doolarclorem ipsum doolarc lorem ipsum doolarc lorem ipsum doolarc lorem ipsum doolarc lorem ipsum doolarc lorem ipsum doolarc',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'lorem ipsum doolarc lorem ipsum doolarclorem ipsum doolarc lorem ipsum doolarc lorem ipsum doolarc lorem ipsum doolarc lorem ipsum doolarc lorem ipsum doolarc',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
