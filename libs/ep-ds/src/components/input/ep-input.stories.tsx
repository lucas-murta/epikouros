import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EpInput } from './ep-input';
import type { EpInputRef } from './ep-input.types';

const ImperativeDemo: React.FC<React.ComponentProps<typeof EpInput>> = (p) => {
  const ref = useRef<EpInputRef>(null);
  const [val, setVal] = useState('');
  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <EpInput
        ref={ref}
        {...p}
        value={val}
        onChange={(e) => {
          setVal(e.currentTarget.value);
          p.onChange?.(e);
        }}
      />
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => ref.current?.focus()}>focus()</button>
        <button onClick={() => ref.current?.blur()}>blur()</button>
        <button onClick={() => ref.current?.clear()}>clear()</button>
        <button onClick={() => ref.current?.setInvalidity()}>
          setInvalidity()
        </button>
        <button onClick={() => ref.current?.setValidity()}>
          setValidity()
        </button>
        <button onClick={() => ref.current?.reportValidity()}>
          reportValidity()
        </button>
      </div>
    </div>
  );
};

const meta: Meta<typeof EpInput> = {
  title: 'Components/Input',
  component: EpInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text', description: 'Nome do ícone (ex: User, Home)' },
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
    onChange: { action: 'onChange' },
    onFocus: { action: 'onFocus' },
    onBlur: { action: 'onBlur' },
    onKeyDown: { action: 'onKeyDown' },
    onClick: { action: 'onClick' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    icon: 'User',
    placeholder: 'Type your username',
    messageInfo: 'Use 4-20 characters',
  },
};

export const ValidationStates: Story = {
  args: {
    label: 'Code',
    placeholder: 'Only numbers allowed',
    pattern: '^[0-9]+$',
    messageInfo: 'Somente números são aceitos',
    messageDanger: 'Valor inválido: use apenas números',
    messageSuccess: 'Valor válido!',
    required: true,
  },
};

export const MessagesWithIcons: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    messageInfo: 'Informe um e-mail válido',
    messageDanger: 'E-mail inválido',
    messageSuccess: 'Tudo certo!',
  },
};

export const ImperativeMethods: Story = {
  render: (args) => {
    return <ImperativeDemo {...args} />;
  },
  args: {
    label: 'Controlled Input',
    placeholder: 'Try the methods above',
    required: true,
  },
};
