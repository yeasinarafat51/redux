import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counnterSlice'

export const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  })