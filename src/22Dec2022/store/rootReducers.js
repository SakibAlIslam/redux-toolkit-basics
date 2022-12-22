import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../redux/slice";

export const rootReducers = combineReducers({
    auth: authSlice.reducer
});
