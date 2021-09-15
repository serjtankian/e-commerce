import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, byCategory } from "./actions/categoryActions";

const initialState = {
  categories: [],
};

const categoryReducer = createReducer(initialState, {
  [getCategories.fulfilled]: (state, action) => {
    state.categories = action.payload;
  },
});

export default categoryReducer;
