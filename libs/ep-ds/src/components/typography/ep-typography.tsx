import React from 'react';
import { EpTypographyProps } from './ep-typography.types';
import styles from './ep-typography.module.scss';

export const EpTypography: React.FC<EpTypographyProps> = ({
  variant = 'body-medium',
  as: Component = 'p',
  size,
  weight,
  family,
  lineHeight,
  letterSpacing,
  align,
  italic = false,
  underline = false,
  strikethrough = false,
  uppercase = false,
  lowercase = false,
  capitalize = false,
  truncate = false,
  maxLines,
  className,
  children,
  ...props
}) => {
  const classes = [
    styles.typography,
    styles[`variant-${variant}`],
    size && styles[`size-${size}`],
    weight && styles[`weight-${weight}`],
    family && styles[`family-${family}`],
    lineHeight && styles[`line-height-${lineHeight}`],
    letterSpacing && styles[`letter-spacing-${letterSpacing}`],
    align && styles[`align-${align}`],
    italic && styles.italic,
    underline && styles.underline,
    strikethrough && styles.strikethrough,
    uppercase && styles.uppercase,
    lowercase && styles.lowercase,
    capitalize && styles.capitalize,
    truncate && styles.truncate,
    maxLines && styles['line-clamp'],
    maxLines && styles[`lines-${maxLines}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default EpTypography;
