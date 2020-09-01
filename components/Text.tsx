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

  const classN = className ?? '';

  return React.createElement(
    as || 'span',
    { className: isDark ? `light-text ${classN}` : `dark-text ${classN}`, ...other },
    children,
  )
}

export default Text;
