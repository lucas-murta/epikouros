/**
 * Processa valores de padding e margin no formato CSS shorthand
 * @param value - Valor no formato shorthand (ex: "2", "2 4", "2 4 3", "2 4 3 1")
 * @param prefix - Prefixo da classe CSS (ex: "p", "m", "sm-p", "md-m")
 * @param styles - Objeto de estilos CSS modules
 * @returns Array de classes CSS processadas
 */
export function processSpacingShorthand(
  value: string | undefined,
  prefix: string,
  styles: Record<string, string>
): string[] {
  if (!value) return [];

  const values = value.trim().split(/\s+/);
  const classes: string[] = [];

  if (values.length === 1) {
    // Todos os lados (p-2)
    const className = styles[`${prefix}-${values[0]}`];
    if (className) classes.push(className);
  } else if (values.length === 2) {
    // Vertical e horizontal (py-2 px-4)
    const verticalClass = styles[`${prefix}y-${values[0]}`];
    const horizontalClass = styles[`${prefix}x-${values[1]}`];
    if (verticalClass) classes.push(verticalClass);
    if (horizontalClass) classes.push(horizontalClass);
  } else if (values.length === 3) {
    // Top, horizontal e bottom (pt-2 px-4 pb-3)
    const topClass = styles[`${prefix}t-${values[0]}`];
    const horizontalClass = styles[`${prefix}x-${values[1]}`];
    const bottomClass = styles[`${prefix}b-${values[2]}`];
    if (topClass) classes.push(topClass);
    if (horizontalClass) classes.push(horizontalClass);
    if (bottomClass) classes.push(bottomClass);
  } else if (values.length === 4) {
    // Top, right, bottom, left (pt-2 pr-4 pb-3 pl-1)
    const topClass = styles[`${prefix}t-${values[0]}`];
    const rightClass = styles[`${prefix}r-${values[1]}`];
    const bottomClass = styles[`${prefix}b-${values[2]}`];
    const leftClass = styles[`${prefix}l-${values[3]}`];
    if (topClass) classes.push(topClass);
    if (rightClass) classes.push(rightClass);
    if (bottomClass) classes.push(bottomClass);
    if (leftClass) classes.push(leftClass);
  }

  return classes;
}
