import {  configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsReducer.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
}); 