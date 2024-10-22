import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counnterSlice.jsx'

export const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  })