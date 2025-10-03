export function processSpacingShorthand(
  value: string | undefined,
  prefix: string,
  styles: Record<string, string>
): string[] {
  if (!value) return [];

  const values = value.trim().split(/\s+/);
  const rules = getSpacingRules(values.length, prefix, values);
  return rules.map((r) => styles[r]).filter(Boolean);
}

const getSpacingRules = (
  len: number,
  prefix: string,
  values: string[]
): string[] => {
  const rules: string[] = [];
  if (len === 1) rules.push(`${prefix}-${values[0]}`);
  if (len === 2) {
    rules.push(`${prefix}y-${values[0]}`, `${prefix}x-${values[1]}`);
  }
  if (len === 3) {
    rules.push(
      `${prefix}t-${values[0]}`,
      `${prefix}x-${values[1]}`,
      `${prefix}b-${values[2]}`
    );
  }
  if (len === 4) {
    rules.push(
      `${prefix}t-${values[0]}`,
      `${prefix}r-${values[1]}`,
      `${prefix}b-${values[2]}`,
      `${prefix}l-${values[3]}`
    );
  }
  return rules;
};
