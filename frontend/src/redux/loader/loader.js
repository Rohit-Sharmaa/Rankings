import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  laoding: false,
};
const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.laoding = true;
    },
    hideLoading: (state) => {
      state.laoding = false;
    },
  },
});
export const { showLoading, hideLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
