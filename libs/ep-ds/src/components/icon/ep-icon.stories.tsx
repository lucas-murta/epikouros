import type { Meta, StoryObj } from '@storybook/react';
import { EpIcon } from './ep-icon';

const meta: Meta<typeof EpIcon> = {
  title: 'Components/Icon',
  component: EpIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    lib: { control: 'radio', options: ['fa'] },
    size: { control: 'radio', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color: {
      control: 'radio',
      options: [
        'default',
        'info',
        'system',
        'warning',
        'positive',
        'negative',
        'primary',
        'secondary',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'AddressBook',
    lib: 'fa',
    size: 'md',
    color: 'default',
  },
};