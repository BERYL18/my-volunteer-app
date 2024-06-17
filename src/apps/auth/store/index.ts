import { configureStore } from '@reduxjs/toolkit';
import AuthReducers from "./reducers/reducer"

export const store = configureStore({
  reducer: {
    AuthReducer: AuthReducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;