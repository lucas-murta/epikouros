import { InputHTMLAttributes } from 'react';

export type EpInputRef = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  setInvalidity: () => void;
  setValidity: () => void;
  reportValidity: () => boolean;
};

export interface EpInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  value?: string | number;
  label?: string;
  messageInfo?: string;
  messageDanger?: string;
  messageSuccess?: string;
  onReportValidity?: (valid: boolean) => void;
  className?: string;
}
