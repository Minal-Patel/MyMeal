import { createSlice } from "@reduxjs/toolkit";

// Slice
const slice = createSlice({
  name: "user",
  initialState: {
    userdetail: {},
  },
  reducers: {
    userdetail: (state, action) => {
      state.userdetail = action.payload;
    },
   
  },
});
export default slice.reducer;
// Actions
export const {
  userdetail,
} = slice.actions;

