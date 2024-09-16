import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.user = null;
      state.loading = false;
      state.error = false;
    },
    
  },
});
export const {
  signInStart,
  signInFailure,
  signInSuccess,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;
