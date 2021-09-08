import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getProductsRequest = createAsyncThunk("PRODUCTS", () => {
  return axios.get("/api/products").then((r) => r.data);
});

const airportReducer = createReducer([], {
  [getProductsRequest.fulfilled]: (state, action) => action.payload,
});

export default airportReducer;
