import styles from './ep-grid.module.scss';
import { GridProps } from './ep-grid.types';
import { buildGridClasses } from '../../utils/grid.utils';

export function Grid({
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
  children,
}: Readonly<GridProps>) {
  const gridClasses = buildGridClasses({
    cols,
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
    className,
  }, styles);

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
}

export default Grid;
