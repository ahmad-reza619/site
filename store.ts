import { useMemo } from 'react';
import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface RootState {
  isDark: boolean;
}

interface BaseActionType {
  type: string;
}

let store: Store<RootState, BaseActionType>;

const initialState: RootState = {
  isDark: true,
};

const reducer = (state = initialState, action: BaseActionType) => {
  switch (action.type) {
    case 'TOGGLE_ISDARK':
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware()
    )
  );
}

export const initializeStore = (preloadedState: RootState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })

    // Reset current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create store once in client
  if (!store) store = _store

  return _store
}

export function useStore() {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
