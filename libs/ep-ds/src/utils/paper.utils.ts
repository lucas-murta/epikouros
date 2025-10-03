import { processSpacingShorthand } from './spacing.utils';

export type SizeValue =
  | 'auto'
  | 'full'
  | 'fit-content'
  | 'min-content'
  | 'max-content'
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
  | '12'
  | '16'
  | '20'
  | '24'
  | '32'
  | '40'
  | '48'
  | '56'
  | '64'
  | '72'
  | '80'
  | '96';

export function buildPaperClasses(
  props: {
    variant?: string;
    border?: string;
    borderRadius?: string;
    elevation?: number;
    interactive?: boolean;
    width?: SizeValue;
    height?: SizeValue;
    padding?: string;
    paddingSm?: string;
    paddingMd?: string;
    paddingLg?: string;
    margin?: string;
    marginSm?: string;
    marginMd?: string;
    marginLg?: string;
    className?: string;
  },
  styles: Record<string, string>
): string {
  const {
    variant = 'surface-1',
    border = 'none',
    borderRadius = '1',
    elevation = 1,
    interactive = false,
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
    className = '',
  } = props;

  const paddingClasses = processSpacingShorthand(padding, 'p', styles);
  const smPaddingClasses = processSpacingShorthand(paddingSm, 'sm-p', styles);
  const mdPaddingClasses = processSpacingShorthand(paddingMd, 'md-p', styles);
  const lgPaddingClasses = processSpacingShorthand(paddingLg, 'lg-p', styles);

  const marginClasses = processSpacingShorthand(margin, 'm', styles);
  const smMarginClasses = processSpacingShorthand(marginSm, 'sm-m', styles);
  const mdMarginClasses = processSpacingShorthand(marginMd, 'md-m', styles);
  const lgMarginClasses = processSpacingShorthand(marginLg, 'lg-m', styles);

  const paperClasses = [
    styles.paper,
    styles[variant],
    styles[`border-${border}`],
    styles[`radius-${borderRadius}`],
    styles[`elevation-${elevation}`],
    interactive && styles.interactive,

    width && styles[`w-${width}`],
    height && styles[`h-${height}`],

    ...paddingClasses,
    ...smPaddingClasses,
    ...mdPaddingClasses,
    ...lgPaddingClasses,
    ...marginClasses,
    ...smMarginClasses,
    ...mdMarginClasses,
    ...lgMarginClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return paperClasses;
}
