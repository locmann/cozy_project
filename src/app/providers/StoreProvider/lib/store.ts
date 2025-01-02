import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreSchema } from './types';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { loginReducer } from '@/features/AuthByUsername';

export function createReduxStore(initialState?: StoreSchema) {
  const rootReducer: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
  };

  return configureStore<StoreSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
