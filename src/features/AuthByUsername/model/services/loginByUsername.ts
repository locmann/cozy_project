import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserLogin } from '../types/loginSchema.ts';
import { User, userActions } from '@/entities/User';

export const loginByUsername = createAsyncThunk<User, UserLogin>(
  'login/loginByUsername',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', user);

      localStorage.setItem('user', JSON.stringify(response.data));

      thunkAPI.dispatch(userActions.setAuthUser(response.data));

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('error');
    }
  }
);
