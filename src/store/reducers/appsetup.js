import { createSlice } from "@reduxjs/toolkit";
import { STRING } from "../../constant/strings";

// Slice
const slice = createSlice({
  name: "appsetup",
  initialState: {
    authscreen: STRING.BUTTON.LOGIN,
  },
  reducers: {
    authSetup: (state, action) => {
      state.authscreen = action.payload;
    },
   
  },
});
export default slice.reducer;
// Actions
export const {
    authSetup,
} = slice.actions;

