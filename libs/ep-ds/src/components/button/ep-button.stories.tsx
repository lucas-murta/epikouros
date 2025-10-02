import type { Meta, StoryObj } from '@storybook/react';
import { EpButton } from './ep-button';

const meta: Meta<typeof EpButton> = {
  title: 'Components/Button',
  component: EpButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Conteúdo do botão',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'text'],
      description: 'Variação de estilo do botão',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do botão',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Cor baseada em tokens globais',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback de clique',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    size: 'medium',
    color: 'primary',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12 }}>
      <EpButton {...args} variant="solid">Solid</EpButton>
      <EpButton {...args} variant="outline">Outline</EpButton>
      <EpButton {...args} variant="text">Text</EpButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12 }}>
      <EpButton {...args} size="small">Small</EpButton>
      <EpButton {...args} size="medium">Medium</EpButton>
      <EpButton {...args} size="large">Large</EpButton>
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12 }}>
      <EpButton {...args} color="primary">Primary</EpButton>
      <EpButton {...args} color="secondary">Secondary</EpButton>
    </div>
  ),
};