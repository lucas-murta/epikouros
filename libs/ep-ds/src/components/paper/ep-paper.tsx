import { forwardRef } from 'react';
import { EpPaperProps } from './ep-paper.types';
import styles from './ep-paper.module.scss';
import { buildPaperClasses } from '../../utils/paper.utils';

/**
 * Componente Paper para aplicar fundos de cores, bordas e elevação
 *
 * @example
 * ```tsx
 * // Paper básico
 * <EpPaper>Conteúdo</EpPaper>
 *
 * // Paper com cor primária e elevação
 * <EpPaper variant="surface-primary" elevation={2}>
 *   Conteúdo destacado
 * </EpPaper>
 *
 * // Paper interativo com borda
 * <EpPaper
 *   variant="surface-2"
 *   border="1"
 *   borderRadius="2"
 *   interactive
 * >
 *   Card clicável
 * </EpPaper>
 * ```
 */
export const EpPaper = forwardRef<HTMLDivElement, EpPaperProps>(
  (
    {
      children,
      variant = 'surface-1',
      border = 'none',
      borderRadius = '1',
      elevation = 1,
      interactive = false,
      width,
      height,
      margin,
      marginSm,
      marginMd,
      marginLg,
      padding,
      paddingSm,
      paddingMd,
      paddingLg,
      className = '',
      as: Component = 'div',
      ...rest
    },
    ref
  ) => {
    // Construir classes CSS usando o utilitário
    const paperClasses = buildPaperClasses(
      {
        variant,
        border,
        borderRadius,
        elevation,
        interactive,
        width,
        height,
        padding,
        paddingSm,
        paddingMd,
        paddingLg,
        margin,
        marginSm,
        marginMd,
        marginLg,
        className,
      },
      styles
    );

    return (
      <Component ref={ref} className={paperClasses} {...rest}>
        {children}
      </Component>
    );
  }
);

EpPaper.displayName = 'EpPaper';
