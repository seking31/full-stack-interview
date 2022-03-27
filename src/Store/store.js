import { configureStore } from '@reduxjs/toolkit';
import robotReducer from './robotSlice';

export default configureStore({
  reducer: {
    robots: robotReducer
  }
})