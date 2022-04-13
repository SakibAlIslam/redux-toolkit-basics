import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {persistedReducer, rootReducer} from "./rootReducer";
import thunk from 'redux-thunk';

export const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: [thunk],
        devTools: process.env.NODE_ENV !== 'production' //true
    }
);
