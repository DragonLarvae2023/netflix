import { createSlice } from "@reduxjs/toolkit";
const gptSLice = createSlice({
  name: "gpt",
  initialState: false,
  reducers: {
    toggle: (state, actions) => {
     const r= actions.payload
      return !state;
    },
  },
});
export default gptSLice.reducer;
export const { toggle } = gptSLice.actions;
