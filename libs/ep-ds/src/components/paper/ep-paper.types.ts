import { ReactNode, HTMLAttributes, ElementType } from 'react';
import { SizeValue } from '../../utils/paper.utils';

export type PaperVariant =
  | 'surface-0'
  | 'surface-1'
  | 'surface-2'
  | 'surface-3'
  | 'surface-4'
  | 'surface-info'
  | 'surface-system'
  | 'surface-warning'
  | 'surface-positive'
  | 'surface-negative'
  | 'surface-primary';

export type PaperBorder =
  | 'none'
  | '1'
  | '2'
  | '3'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'system'
  | 'warning'
  | 'positive'
  | 'negative';

export type PaperBorderRadius = 'none' | '1' | '2';

export type PaperElevation = 0 | 1 | 2 | 3 | 4;

export type PaperPadding = '1' | '2' | '3' | '4';

export interface EpPaperProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  children: ReactNode;

  variant?: PaperVariant;

  border?: PaperBorder;

  borderRadius?: PaperBorderRadius;

  elevation?: PaperElevation;

  interactive?: boolean;

  width?: SizeValue;

  height?: SizeValue;

  padding?: string;

  paddingSm?: string;

  paddingMd?: string;

  paddingLg?: string;

  margin?: string;

  marginSm?: string;

  marginMd?: string;

  marginLg?: string;

  className?: string;

  as?: ElementType;
}
