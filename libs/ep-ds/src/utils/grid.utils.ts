import { processSpacingShorthand } from './spacing.utils';
import { GridSpacing } from '../components/grid/ep-grid.types';

/**
 * Constrói as classes CSS para o componente Grid
 */
export function buildGridClasses(
  props: {
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
  },
  styles: Record<string, string>
): string {
  const {
    cols = 1,
    gap,
    gapX,
    gapY,
    smCols,
    mdCols,
    lgCols,
    padding,
    smPadding,
    mdPadding,
    lgPadding,
    margin,
    smMargin,
    mdMargin,
    lgMargin,
    className = '',
  } = props;

  // Processar padding e margin
  const paddingClasses = processSpacingShorthand(padding, 'p', styles);
  const smPaddingClasses = processSpacingShorthand(smPadding, 'sm-p', styles);
  const mdPaddingClasses = processSpacingShorthand(mdPadding, 'md-p', styles);
  const lgPaddingClasses = processSpacingShorthand(lgPadding, 'lg-p', styles);

  const marginClasses = processSpacingShorthand(margin, 'm', styles);
  const smMarginClasses = processSpacingShorthand(smMargin, 'sm-m', styles);
  const mdMarginClasses = processSpacingShorthand(mdMargin, 'md-m', styles);
  const lgMarginClasses = processSpacingShorthand(lgMargin, 'lg-m', styles);

  // Construir as classes CSS
  const gridClasses = [
    styles.grid,
    styles[`cols-${cols}`],
    gap !== undefined && styles[`gap-${gap}`],
    gapX !== undefined && styles[`gap-x-${gapX}`],
    gapY !== undefined && styles[`gap-y-${gapY}`],
    smCols !== undefined && styles[`sm-cols-${smCols}`],
    mdCols !== undefined && styles[`md-cols-${mdCols}`],
    lgCols !== undefined && styles[`lg-cols-${lgCols}`],
    ...paddingClasses,
    ...smPaddingClasses,
    ...mdPaddingClasses,
    ...lgPaddingClasses,
    ...marginClasses,
    ...smMarginClasses,
    ...mdMarginClasses,
    ...lgMarginClasses,
    className
  ].filter(Boolean).join(' ');

  return gridClasses;
}
