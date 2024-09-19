import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};
const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});
export const { showLoading, hideLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
