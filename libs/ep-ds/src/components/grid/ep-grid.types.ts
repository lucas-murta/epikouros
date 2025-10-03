import { ReactNode } from 'react';

export type GridSpacing =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

export interface GridProps {
  cols?: GridSpacing;

  gap?: GridSpacing;

  gapX?: GridSpacing;

  gapY?: GridSpacing;

  smCols?: GridSpacing;

  mdCols?: GridSpacing;

  lgCols?: GridSpacing;

  padding?: string;

  smPadding?: string;

  mdPadding?: string;

  lgPadding?: string;

  margin?: string;

  smMargin?: string;

  mdMargin?: string;

  lgMargin?: string;

  className?: string;

  children: ReactNode;
}
