import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { createReduxStore } from './store';

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;
}

export type RootState = ReturnType<
  ReturnType<typeof createReduxStore>['getState']
>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
