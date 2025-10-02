import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'solid' | 'outline' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'positive'
  | 'negative'
  | 'warning';

export interface EpButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'color'> {
  /**
   * Variação de estilo do botão
   * @default 'solid'
   */
  variant?: ButtonVariant;

  /**
   * Tamanho do botão
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Cor do botão baseada em tokens globais
   * @default 'primary'
   */
  color?: ButtonColor;

  /**
   * Conteúdo do botão
   */
  children: ReactNode;

  /**
   * Classes CSS adicionais
   */
  className?: string;

  /**
   * Desabilita o botão
   * @default false
   */
  disabled?: boolean;
}
