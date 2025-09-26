import { ReactNode } from 'react';

// Tipo unificado para espaçamentos e colunas (1-12)
export type GridSpacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps {
  /**
   * Número de colunas (1-12)
   */
  cols?: GridSpacing;

  /**
   * Espaçamento entre os itens (usando tokens de espaçamento)
   */
  gap?: GridSpacing;

  /**
   * Espaçamento horizontal entre os itens
   */
  gapX?: GridSpacing;

  /**
   * Espaçamento vertical entre os itens
   */
  gapY?: GridSpacing;

  /**
   * Número de colunas em telas pequenas (max-width: 640px)
   */
  smCols?: GridSpacing;

  /**
   * Número de colunas em telas médias (max-width: 768px)
   */
  mdCols?: GridSpacing;

  /**
   * Número de colunas em telas grandes (max-width: 1024px)
   */
  lgCols?: GridSpacing;

  /**
   * Padding no formato CSS shorthand (top right bottom left)
   * Exemplos: "2" (todos os lados), "2 4" (vertical horizontal), "2 4 3" (top horizontal bottom), "2 4 3 1" (top right bottom left)
   */
  padding?: string;

  /**
   * Padding para telas pequenas (max-width: 640px)
   */
  smPadding?: string;

  /**
   * Padding para telas médias (max-width: 768px)
   */
  mdPadding?: string;

  /**
   * Padding para telas grandes (max-width: 1024px)
   */
  lgPadding?: string;

  /**
   * Margin no formato CSS shorthand (top right bottom left)
   * Exemplos: "2" (todos os lados), "2 4" (vertical horizontal), "2 4 3" (top horizontal bottom), "2 4 3 1" (top right bottom left)
   */
  margin?: string;

  /**
   * Margin para telas pequenas (max-width: 640px)
   */
  smMargin?: string;

  /**
   * Margin para telas médias (max-width: 768px)
   */
  mdMargin?: string;

  /**
   * Margin para telas grandes (max-width: 1024px)
   */
  lgMargin?: string;

  /**
   * Classe CSS adicional
   */
  className?: string;

  /**
   * Elementos filhos
   */
  children: ReactNode;
}
