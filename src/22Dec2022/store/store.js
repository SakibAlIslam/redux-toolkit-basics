import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducers } from "./rootReducers";

export const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware()
});