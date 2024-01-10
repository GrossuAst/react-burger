// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createStore } from "redux"
import { rootReducer } from './reducers'

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});
