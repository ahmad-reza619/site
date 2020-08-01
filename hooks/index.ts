import { useSelector, useDispatch } from 'react-redux';

import { toggleIsDark } from '../actions';
import { RootState } from '../store';

export function useIsDark() {
  const isDark = useSelector((state: RootState) => state.theme.isDark)
  const dispatch = useDispatch();

  const toggle = () => dispatch(toggleIsDark());
  return [isDark, toggle]
}
