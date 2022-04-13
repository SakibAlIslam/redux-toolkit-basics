import { combineReducers } from "@reduxjs/toolkit";
import {authSlice} from "../redux/slice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const rootReducer = combineReducers({
    auth: authSlice.reducer
})


const persistConfig = {
    key: 'root',
    storage,
  };

export const persistedReducer = persistReducer(persistConfig, rootReducer);