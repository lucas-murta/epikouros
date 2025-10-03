import { HTMLAttributes } from 'react';

export type EpIconLibrary = 'fa';

export type EpIconSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface EpIconProps
  extends Omit<HTMLAttributes<HTMLElement>, 'className' | 'aria-label'> {
  name: string;
  lib?: EpIconLibrary;
  size?: EpIconSize;
  ariaLabel?: string;
  className?: string;
}