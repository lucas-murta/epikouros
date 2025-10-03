import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'solid' | 'outline' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'positive' | 'negative';

export interface EpButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'color'> {
  variant?: ButtonVariant;

  size?: ButtonSize;

  color?: ButtonColor;

  children: ReactNode;

  className?: string;

  disabled?: boolean;
}
