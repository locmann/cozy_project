import { createSlice, WithSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/types.ts';
import { rootReducer } from '@/app/providers/StoreProvider';

const initialState: ProfileSchema = {
  error: undefined,
  isLoading: false,
  data: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  selectors: {
    selectIsLoading: (state) => state.isLoading,
  },
});

export const { actions: profileActions } = profileSlice;

declare module 'src/app/providers/StoreProvider/lib/reducer.ts' {
  export interface LazyLoadedSlices extends WithSlice<typeof profileSlice> {}
}

const injectedProfileSlice = profileSlice.injectInto(rootReducer);

export const { selectIsLoading } = injectedProfileSlice.selectors;

export const { reducer: profileReducer } = profileSlice;
