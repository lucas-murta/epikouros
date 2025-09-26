import { ReactNode, HTMLAttributes } from 'react';

// Typography variants based on _typography.scss
export type TypographyVariant = 
  | 'heading-1' 
  | 'heading-2' 
  | 'heading-3' 
  | 'heading-4'
  | 'highlight-large' 
  | 'highlight-medium'
  | 'body-large' 
  | 'body-medium' 
  | 'body-small';

// Font sizes based on _typography.scss
export type FontSize = 
  | 'xs'    // 0.75rem
  | 'sm'    // 0.875rem
  | 'base'  // 1rem
  | 'lg'    // 1.125rem
  | 'xl'    // 1.25rem
  | '2xl'   // 1.5rem
  | '3xl'   // 1.875rem
  | '4xl'   // 2.25rem
  | '5xl'   // 3rem
  | '6xl';  // 3.75rem

// Font weights based on _typography.scss
export type FontWeight = 
  | 'light'     // 300
  | 'normal'    // 400
  | 'medium'    // 500
  | 'semibold'  // 600
  | 'bold';     // 700

// Font families based on _typography.scss
export type FontFamily = 
  | 'body'     // Raleway
  | 'heading'  // Crimson Text
  | 'display'; // Jost

// Line heights based on _typography.scss
export type LineHeight = 
  | 'tight'   // 1.25
  | 'snug'    // 1.375
  | 'normal'  // 1.5
  | 'relaxed' // 1.625
  | 'loose';  // 2

// Letter spacings based on _typography.scss
export type LetterSpacing = 
  | 'tighter' // -0.05em
  | 'tight'   // -0.025em
  | 'normal'  // 0em
  | 'wide'    // 0.025em
  | 'wider'   // 0.05em
  | 'widest'; // 0.1em

// Text alignment
export type TextAlign = 
  | 'left'
  | 'center'
  | 'right'
  | 'justify';

// HTML elements that can be used for typography
export type TypographyElement = 
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'div';

export interface EpTypographyProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  /**
   * Typography variant that applies predefined styles
   */
  variant?: TypographyVariant;
  
  /**
   * HTML element to render
   * @default 'p'
   */
  as?: TypographyElement;
  
  /**
   * Font size override
   */
  size?: FontSize;
  
  /**
   * Font weight override
   */
  weight?: FontWeight;
  
  /**
   * Font family override
   */
  family?: FontFamily;
  
  /**
   * Line height override
   */
  lineHeight?: LineHeight;
  
  /**
   * Letter spacing override
   */
  letterSpacing?: LetterSpacing;
  
  /**
   * Text alignment
   */
  align?: TextAlign;
  
  /**
   * Apply italic style
   */
  italic?: boolean;
  
  /**
   * Apply underline decoration
   */
  underline?: boolean;
  
  /**
   * Apply strikethrough decoration
   */
  strikethrough?: boolean;
  
  /**
   * Transform text to uppercase
   */
  uppercase?: boolean;
  
  /**
   * Transform text to lowercase
   */
  lowercase?: boolean;
  
  /**
   * Capitalize first letter of each word
   */
  capitalize?: boolean;
  
  /**
   * Truncate text with ellipsis
   */
  truncate?: boolean;
  
  /**
   * Maximum number of lines before truncating (requires line-clamp support)
   */
  maxLines?: number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Content to render
   */
  children: ReactNode;
}
