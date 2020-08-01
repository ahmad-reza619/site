export const TOGGLE_ISDARK = 'TOGGLE_ISDARK';

export interface ToggleIsDarkAction {
  type: typeof TOGGLE_ISDARK;
}

export function toggleIsDark(): ToggleIsDarkAction {
  return {
    type: TOGGLE_ISDARK,
  };
}
