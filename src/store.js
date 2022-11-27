import { configureStore } from '@reduxjs/toolkit';
import reducers from './features/reducers';

export const store = configureStore({
  reducer: {
    storedInfo: reducers
  },
});