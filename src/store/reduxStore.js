import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
});

export default store;
