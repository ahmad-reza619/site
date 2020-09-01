import React from 'react';
import { useIsDark } from '../hooks';

interface TextProps {
  as?: React.ElementType | React.ComponentType
  children: any
  [other: string]: any
}

const Text = React.forwardRef((props: TextProps, ref) => {
  const [isDark] = useIsDark();

  const { as, children, className, ...other } = props;

  const classN = className ?? '';

  return React.createElement(
    as || 'span',
    {
      className: isDark ? `light-text ${classN}` : `dark-text ${classN}`,
      ref,
      ...other,
    },
    children,
  )
})

export default Text;
