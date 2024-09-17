import { combineReducers, createStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsReducer.js";

const rootReducer = combineReducers({
products: productsReducer
})

export const store = createStore(rootReducer)