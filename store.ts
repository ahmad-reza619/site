import { useMemo } from 'react';
import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { initialState as themeState } from './reducers/themeReducer'; 

const initialState: RootState = {
  theme: themeState,
}

export interface RootState {
  theme: {
    isDark: boolean;
  }
}

interface BaseActionType {
  type: string;
}

let store: Store<RootState, BaseActionType>;

function initStore(preloadedState: RootState = initialState) {
  return createStore(
    rootReducer,
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
