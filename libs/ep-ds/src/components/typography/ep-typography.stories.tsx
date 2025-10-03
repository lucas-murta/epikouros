import type { Meta, StoryObj } from '@storybook/react';
import { EpTypography } from './ep-typography';

const meta: Meta<typeof EpTypography> = {
  title: 'Components/Typography',
  component: EpTypography,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to be displayed',
    },
    variant: {
      control: 'select',
      options: [
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'highlight-large',
        'highlight-medium',
        'body-large',
        'body-medium',
        'body-small',
      ],
      description: 'Typography variant that applies predefined styles',
    },
    as: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div'],
      description: 'HTML element to render',
    },
    size: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: 'Font size based on spacing tokens (1-12)',
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight override',
    },
    family: {
      control: 'select',
      options: ['body', 'heading', 'display'],
      description: 'Font family override',
    },
    lineHeight: {
      control: 'select',
      options: ['tight', 'snug', 'normal', 'relaxed', 'loose'],
      description: 'Line height override',
    },
    letterSpacing: {
      control: 'select',
      options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      description: 'Letter spacing override',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    italic: {
      control: 'boolean',
      description: 'Apply italic style',
    },
    underline: {
      control: 'boolean',
      description: 'Apply underline decoration',
    },
    strikethrough: {
      control: 'boolean',
      description: 'Apply strikethrough decoration',
    },
    uppercase: {
      control: 'boolean',
      description: 'Transform text to uppercase',
    },
    lowercase: {
      control: 'boolean',
      description: 'Transform text to lowercase',
    },
    capitalize: {
      control: 'boolean',
      description: 'Capitalize first letter of each word',
    },
    truncate: {
      control: 'boolean',
      description: 'Truncate text with ellipsis',
    },
    maxLines: {
      control: 'number',
      description: 'Maximum number of lines before truncation',
      min: 1,
      max: 10,
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a typography component with default styling.',
  },
};
