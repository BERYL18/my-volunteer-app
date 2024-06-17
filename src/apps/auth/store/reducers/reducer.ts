import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import LocalStorage from '../../../../helpers/storage';


interface AuthState {
  value: number;
  app: string;
}

const initialState: AuthState = {
  value: 0,
  app: LocalStorage.getApp() || 'auth',
};

const AuthReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setApp: (state, action: PayloadAction<string>) => {
      state.app = action.payload;
      LocalStorage.setApp(action.payload);
    },
  },extraReducers(builder) {
      builder
  },
});

export const { increment, decrement, incrementByAmount, setApp  } = AuthReducer.actions;
export default AuthReducer.reducer;