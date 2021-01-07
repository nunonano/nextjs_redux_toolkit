import { combineReducers } from '@reduxjs/toolkit';
import serverReducer from 'features/server/serverSlice';
import countReducer from 'features/count/countSlice';

export const rootReducer = combineReducers({
  server: serverReducer,
  count: countReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
