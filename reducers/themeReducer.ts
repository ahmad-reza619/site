import { TOGGLE_ISDARK, ToggleIsDarkAction } from '../actions';

interface Theme {
  isDark: boolean;
};

export const initialState: Theme= {
  isDark: true,
};

type ActionType = ToggleIsDarkAction

export default function themeReducer(state: Theme = initialState, action: ActionType){
  switch(action.type) {
    case TOGGLE_ISDARK:
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
}
