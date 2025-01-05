import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema.ts';
import { loginByUsername } from '@/features/AuthByUsername/model/services/loginByUsername.ts';

import { rootReducer } from '@/app/providers/StoreProvider';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginByUsername.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginByUsername.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
  },
  selectors: {
    selectLoginUsername: (state) => state.username,
    selectLoginPassword: (state) => state.password,
    selectIsLoading: (state) => state.isLoading,
  },
});

export const { actions: loginActions } = loginSlice;

declare module 'src/app/providers/StoreProvider/lib/reducer.ts' {
  export interface LazyLoadedSlices extends WithSlice<typeof loginSlice> {}
}
const injectedLoginSlice = loginSlice.injectInto(rootReducer);

export const { selectLoginUsername, selectLoginPassword, selectIsLoading } =
  injectedLoginSlice.selectors;
