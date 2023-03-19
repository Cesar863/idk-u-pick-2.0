import { configureStore } from '@reduxjs/toolkit';
import reducers from './components/reducers';

export const store = configureStore({
  reducer: {
    storedInfo: reducers
  },
});