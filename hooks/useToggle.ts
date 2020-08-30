import React from 'react';

export function useToggle(initVal = false): [boolean, () => void] {
  const [state, setState] = React.useState<boolean>(initVal);

  function toggle(): void {
    setState(s => !s);
  }

  return [state, toggle];
}
