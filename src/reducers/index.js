import { configureStore } from '@reduxjs/toolkit';
import findReducer from './findSlice';

export default configureStore({
  reducer: {
    houses: findReducer,
  },
});
