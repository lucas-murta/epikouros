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
    size: { control: 'select', options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'AddressBook',
    lib: 'fa',
    size: 6,
  },
};