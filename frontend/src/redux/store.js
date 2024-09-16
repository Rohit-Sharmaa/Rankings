import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "./user/userSlice.js";
import loaderSlice from "./loader/loader.js";

const rootReducer = combineReducers({
  user: userSlice,
  loader: loaderSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

