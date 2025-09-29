import type { Meta, StoryObj } from '@storybook/react';
import { EpPaper } from './ep-paper';
import { EpTypography } from '../typography/ep-typography';

const meta: Meta<typeof EpPaper> = {
  title: 'Components/Paper',
  component: EpPaper,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: 'select',
      options: ['surface-0', 'surface-1', 'surface-2', 'surface-3', 'surface-4', 'primary', 'secondary'],
    },
    border: {
      control: 'select',
      options: ['none', '1', '2', '3', 'primary', 'secondary'],
    },
    borderRadius: {
      control: 'select',
      options: ['none', '1', '2'],
    },
    elevation: {
      control: 'select',
      options: [0, 1, 2, 3, 4],
    },
    interactive: {
      control: 'boolean',
    },
    width: {
      control: 'select',
      options: ['auto', 'full', 'fit-content', 'min-content', 'max-content', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96'],
    },
    height: {
      control: 'select',
      options: ['auto', 'full', 'fit-content', 'min-content', 'max-content', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96'],
    },
    padding: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1 2', '2 4', '3 6', '1 2 3', '2 4 6', '1 2 3 4'],
    },
    paddingSm: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1 2', '2 4', '3 6', '1 2 3', '2 4 6', '1 2 3 4'],
    },
    paddingMd: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1 2', '2 4', '3 6', '1 2 3', '2 4 6', '1 2 3 4'],
    },
    paddingLg: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1 2', '2 4', '3 6', '1 2 3', '2 4 6', '1 2 3 4'],
    },
    margin: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1 2', '2 4', '3 6', '1 2 3', '2 4 6', '1 2 3 4'],
    },
    marginSm: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1 2', '2 4', '3 6', '1 2 3', '2 4 6', '1 2 3 4'],
    },
    marginMd: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1 2', '2 4', '3 6', '1 2 3', '2 4 6', '1 2 3 4'],
    },
    marginLg: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1 2', '2 4', '3 6', '1 2 3', '2 4 6', '1 2 3 4'],
    },
    className: {
      control: 'text',
    },
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'aside', 'main', 'header', 'footer', 'nav'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const { ...paperProps } = args;
    const text = 'Paper content';
    return (
      <EpPaper {...paperProps}>
        <EpTypography>{text}</EpTypography>
      </EpPaper>
    );
  },
};
