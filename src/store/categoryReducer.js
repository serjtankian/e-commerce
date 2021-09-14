import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, ByCategory } from "./actions/categoryActions";

const initialState = {
  categories: [],
  vgsByCategory: []
};

const categoryReducer = createReducer(initialState, {
  [getCategories.fulfilled]: (state, action) => {
    state.categories = action.payload;
  },
  [ByCategory.fulfilled]: (state, action)=> {
      state.vgsByCategory = action.payload
  }
});

export default categoryReducer;
