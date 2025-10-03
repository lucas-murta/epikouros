import { InputHTMLAttributes } from 'react';

export type EpInputRef = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  setInvalidity: () => void;
  setValidity: () => void;
  reportValidity: () => void;
};

export interface EpInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  value?: string | number;
  icon?: string;
  label?: string;
  messageInfo?: string;
  messageDanger?: string;
  messageSuccess?: string;
  className?: string;
}
