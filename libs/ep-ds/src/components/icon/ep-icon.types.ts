import { HTMLAttributes } from 'react';

export type EpIconLibrary = 'fa';

export type EpIconName = string;

export type EpIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type EpIconColor =
  | 'default'
  | 'info'
  | 'system'
  | 'warning'
  | 'positive'
  | 'negative'
  | 'primary'
  | 'secondary';

export interface EpIconProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  name: EpIconName;
  lib?: EpIconLibrary;
  size?: EpIconSize;
  color?: EpIconColor;
  className?: string;
}