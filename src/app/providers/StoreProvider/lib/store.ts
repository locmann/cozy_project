import { configureStore } from '@reduxjs/toolkit';
import { StoreSchema } from './types';
import { rootReducer } from './reducer.ts';

export function createReduxStore(initialState?: StoreSchema) {
  return configureStore<StoreSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
