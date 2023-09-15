import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography, TypographyTheme } from 'shared/ui/Typography/ui/Typography';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title text',
  text: 'description text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title text',
  text: 'description text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title text',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title text',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Description text',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Description text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title text',
  text: 'Description text',
  theme: TypographyTheme.ERROR,
};
