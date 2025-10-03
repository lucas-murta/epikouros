import React from 'react';
import * as FaIcons from 'react-icons/fa';
import styles from './ep-icon.module.scss';
import { EpIconProps } from './ep-icon.types';

const getFaIconComponent = (name: string) => {
  const key = `Fa${name}` as keyof typeof FaIcons;
  return FaIcons[key] as React.ComponentType<React.HTMLAttributes<HTMLElement>> | undefined;
};

export const EpIcon: React.FC<EpIconProps> = ({
  name,
  lib = 'fa',
  size,
  ariaLabel,
  className,
  ...rest
}) => {
  let IconComponent: React.ComponentType<React.HTMLAttributes<HTMLElement>> | undefined;

  if (lib === 'fa') {
    IconComponent = getFaIconComponent(name);
  }

  const classes = [styles.icon, size && styles[`size-${size}`], className]
    .filter(Boolean)
    .join(' ');

  if (!IconComponent) {
    return <span className={classes} aria-label={ariaLabel} {...rest} />;
  }

  return <IconComponent className={classes} aria-label={ariaLabel} {...rest} />;
};

EpIcon.displayName = 'EpIcon';

export default EpIcon;