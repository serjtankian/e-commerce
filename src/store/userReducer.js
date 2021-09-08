import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getUserRequest = createAsyncThunk("USER", () => {
  return axios.get("/api/user").then((r) => r.data);
});

const userReducer = createReducer([], {
  [getUserRequest.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
