import React from 'react';
import { useIsDark } from '../hooks';

interface TextProps {
  as: React.ElementType | React.ComponentType
  children: any
  [other: string]: any
}

function Text(props: TextProps) {
  const [isDark] = useIsDark();

  const { as, children, ...other } = props;

  return React.createElement(
    as,
    { className: isDark ? 'light-text' : 'dark-text', ...other },
    children,
  )
}

export default Text;
