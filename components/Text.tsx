import React from 'react';
import { useIsDark } from '../hooks';

interface TextProps {
  as?: React.ElementType | React.ComponentType
  children: any
  [other: string]: any
}

function Text(props: TextProps) {
  const [isDark] = useIsDark();

  const { as, children, className, ...other } = props;

  return React.createElement(
    as || 'span',
    { className: isDark ? `light-text ${className}` : `dark-text ${className}`, ...other },
    children,
  )
}

export default Text;
