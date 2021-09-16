import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, byCategory, newCategory } from "./actions/categoryActions";

const initialState = {
  categories: [],
  newCategory: ''
};

const categoryReducer = createReducer(initialState, {
  [getCategories.fulfilled]: (state, action) => {
    state.categories = action.payload;
  },
  [newCategory.fulfilled]: (state, action)=> {
    state.newCategory = action.payload
  }
});

export default categoryReducer;
