import type { Meta, StoryObj } from '@storybook/react';
import { EpInput } from './ep-input';

const meta: Meta<typeof EpInput> = {
  title: 'Components/Input',
  component: EpInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    maxLength: { control: 'number' },
    messageInfo: { control: 'text' },
    messageDanger: { control: 'text' },
    messageSuccess: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Type your username',
    messageInfo: 'Use 4-20 characters',
  },
};
