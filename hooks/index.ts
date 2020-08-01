import { useSelector, useDispatch } from 'react-redux';

import { toggleIsDark, ToggleIsDarkAction } from '../actions';
import { RootState } from '../store';

export function useIsDark(): [boolean, () => ToggleIsDarkAction ] {
  const isDark = useSelector((state: RootState) => state.theme.isDark)
  const dispatch = useDispatch();

  const toggle = () => dispatch(toggleIsDark());
  return [isDark, toggle]
}
