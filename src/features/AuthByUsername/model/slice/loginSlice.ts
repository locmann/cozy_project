import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema.ts';
import { loginByUsername } from '@/features/AuthByUsername/model/services/loginByUsername.ts';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

export const loginSlice = createSlice({
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
      state.isLoading = true;
    });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
