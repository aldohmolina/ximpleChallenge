import {configureStore} from '@reduxjs/toolkit';
import planReducer from './reducers/planReducer';

export const store = configureStore({
  reducer: {
    planReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
