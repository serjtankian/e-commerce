import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

export const addProductToCart = createAsyncThunk(
  'ADD_PRODUCT_TO_CART',
  ({ gameId, userId }) => {
    // const { cart } = thunkApi.getState();
    // console.log('CART REDUCER : CART ', cart);
    return axios
      .post(`http://localhost:3001/api/cart/addCart/${gameId}/${userId}`, {
        quantity: 1,
      })
      .then((response) => response.data);
  }
);

const initialState = {
  cart: {},
};

const cartReducer = createReducer(initialState, {
  [addProductToCart.fulfilled]: (state, action) => ({
    ...state,
    cart: action.payload,
  }),
});

export default cartReducer;
