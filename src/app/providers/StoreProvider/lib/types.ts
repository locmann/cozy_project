import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { createReduxStore } from './store';

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;
  login: LoginSchema;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
