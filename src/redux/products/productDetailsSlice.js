import { createSlice } from "@reduxjs/toolkit";
import { apiRequestProductsDetailsById } from "./operations.js";

const INITIAL_STATE = {
  products: null,
  isLoading: false,
  isError: false
};

const detailsSlice = createSlice({
  name: "products",  
  initialState: INITIAL_STATE,  
 extraReducers: (builder) => builder
 .addCase(apiRequestProductsDetailsById.pending, (state) =>{
    state.isLoading = true
    state.isError = false
 })
 .addCase(apiRequestProductsDetailsById.fulfilled, (state, action) => {
    state.isLoading = false
    state.products = action.payload
 })
 .addCase(apiRequestProductsDetailsById.rejected, (state) => {
    state.isLoading = false,
    state.isError = true
 })
});



export const detailsReducer = detailsSlice.reducer;



