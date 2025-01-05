import { combineSlices } from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';

export interface LazyLoadedSlices {}

export const rootReducer = combineSlices({
  counter: counterReducer,
  user: userReducer,
}).withLazyLoadedSlices<LazyLoadedSlices>();
