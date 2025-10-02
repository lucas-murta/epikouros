import React from 'react';
import styles from './ep-button.module.scss';
import { EpButtonProps } from './ep-button.types';

export const EpButton: React.FC<EpButtonProps> = ({
  variant = 'solid',
  size = 'medium',
  color = 'primary',
  disabled = false,
  className,
  children,
  onClick,
  ...props
}) => {
  const classes = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`color-${color}`],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button className={classes} disabled={disabled} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default EpButton;