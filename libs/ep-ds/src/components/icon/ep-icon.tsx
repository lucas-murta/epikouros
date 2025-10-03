import React from 'react';
import * as FaIcons from 'react-icons/fa';
import styles from './ep-icon.module.scss';
import { EpIconProps } from './ep-icon.types';

const getFaIconComponent = (name: string) => {
  const key = `Fa${name}` as keyof typeof FaIcons;
  return FaIcons[key] as React.ComponentType<any> | undefined;
};

export const EpIcon: React.FC<EpIconProps> = ({
  name,
  lib = 'fa',
  size = 'md',
  color = 'default',
  className,
  ...rest
}) => {
  let IconComponent: React.ComponentType<any> | undefined;

  if (lib === 'fa') {
    IconComponent = getFaIconComponent(name);
  }

  const classes = [styles.icon, styles[`size-${size}`], styles[`color-${color}`], className]
    .filter(Boolean)
    .join(' ');

  if (!IconComponent) {
    return <span className={classes} {...rest} />;
  }

  return <IconComponent className={classes} {...rest} />;
};

EpIcon.displayName = 'EpIcon';

export default EpIcon;