import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestProductsByQuery } from "../../services/api.js";

export const apiRequestProductsDetailsById = createAsyncThunk(
  "productDetails/get",
  async (query, thunkApi) => {
    try {
      const data = await requestProductsByQuery(query);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);