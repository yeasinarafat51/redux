import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counnterSlice.jsx'
import logger from '../redux/midlleware/Logger.js';

export const store = configureStore({
    reducer: {
      taskSlice: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger),
  })