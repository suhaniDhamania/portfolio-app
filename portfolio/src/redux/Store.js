import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./Slice.js";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});
