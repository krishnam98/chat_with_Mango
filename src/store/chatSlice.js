import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: [],
  reducers: {
    addUserMessage: (state, action) => {
      // console.log(action.payload);
      state.push(action.payload);
    },
    addBotMessage: (state, action) => {
      state[state?.length - 1].bot = action.payload.msg;
      //   console.log(state.messages);
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice;
