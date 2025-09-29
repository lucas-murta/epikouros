import { ReactNode, HTMLAttributes, ElementType } from 'react';
import { SizeValue } from '../../utils/paper.utils';

export type PaperVariant = 
  | 'surface-0' 
  | 'surface-1' 
  | 'surface-2' 
  | 'surface-3' 
  | 'surface-4' 
  | 'primary' 
  | 'secondary';

export type PaperBorder = 
  | 'none' 
  | '1' 
  | '2' 
  | '3' 
  | 'primary' 
  | 'secondary';

export type PaperBorderRadius = 
  | 'none' 
  | '1' 
  | '2';

export type PaperElevation = 
  | 0 
  | 1 
  | 2 
  | 3 
  | 4;

export type PaperPadding = 
  | '1' 
  | '2' 
  | '3' 
  | '4';

export interface EpPaperProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /**
   * Conteúdo do Paper
   */
  children: ReactNode;
  
  /**
   * Variante de cor de fundo do Paper
   * @default 'surface-1'
   */
  variant?: PaperVariant;
  
  /**
   * Tipo de borda do Paper
   * @default 'none'
   */
  border?: PaperBorder;
  
  /**
   * Border radius do Paper
   * @default '1'
   */
  borderRadius?: PaperBorderRadius;
  
  /**
   * Nível de elevação (sombra) do Paper
   * @default 1
   */
  elevation?: PaperElevation;
  

  
  /**
   * Se o Paper deve ter comportamento interativo (hover effects)
   * @default false
   */
  interactive?: boolean;

  // Propriedades de tamanho
  /**
   * Largura do Paper
   */
  width?: SizeValue;

  /**
   * Altura do Paper
   */
  height?: SizeValue;



  // Propriedades de spacing (novo formato)
  /**
   * Padding no formato CSS shorthand (top right bottom left)
   * Exemplos: "2" (todos os lados), "2 4" (vertical horizontal), "2 4 3" (top horizontal bottom), "2 4 3 1" (top right bottom left)
   */
  padding?: string;

  /**
   * Padding para telas pequenas (max-width: 640px)
   */
  paddingSm?: string;

  /**
   * Padding para telas médias (max-width: 768px)
   */
  paddingMd?: string;

  /**
   * Padding para telas grandes (max-width: 1024px)
   */
  paddingLg?: string;

  /**
   * Margin no formato CSS shorthand (top right bottom left)
   * Exemplos: "2" (todos os lados), "2 4" (vertical horizontal), "2 4 3" (top horizontal bottom), "2 4 3 1" (top right bottom left)
   */
  margin?: string;

  /**
   * Margin para telas pequenas (max-width: 640px)
   */
  marginSm?: string;

  /**
   * Margin para telas médias (max-width: 768px)
   */
  marginMd?: string;

  /**
   * Margin para telas grandes (max-width: 1024px)
   */
  marginLg?: string;
  
  /**
   * Classes CSS adicionais
   */
  className?: string;
  
  /**
   * Elemento HTML a ser renderizado
   * @default 'div'
   */
  as?: ElementType;
}