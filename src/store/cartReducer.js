import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";

export const addProductToCart = createAsyncThunk(
  "ADD_PRODUCT_TO_CART",
  ({ gameId, userId }) => {
    // const { cart } = thunkApi.getState();
    // console.log('CART REDUCER : CART ', cart);
    return axios
      .post(`http://localhost:3001/api/cart/addCart/${gameId}/${userId}`, {
        quantity: 1,
      })
      .then((response) => {
        // console.log('RESP DATA', response);
        return response.data;
      })
      .catch((e) => {
        console.log("catch", e);
      });
  }
);

export const cartView = createAsyncThunk("CART_VIEW", ({ cartId, userId }) => {
  console.log("cartView", cartId, userId);
  return axios
    .get(`http://localhost:3001/api/cart/singleCart/${cartId}/${userId}`)
    .then((response) => {
      // console.log('CART VIEW AXIO ', response.data);
      return response.data;
    })
    .catch((e) => {
      console.log("catch", e);
    });
});
export const deleteFromCart = createAsyncThunk(
  "DELETE_FROM_CART",
  ({ gameId, userId }) => {
    return axios
      .delete(
        `http://localhost:3001/api/cart/deleteProduct/${gameId}/${userId}`
      )
      .then((response) => {
        // console.log('CART VIEW AXIO ', response.data);
        return response.data;
      })
      .catch((e) => {
        console.log("catch", e);
      });
  }
);

export const increaseProductCart = createAsyncThunk(
  "INCREASE_PRODUCT_CART",
  ({ gameId, userId }) => {
    return axios
      .put(`http://localhost:3001/api/cart/increaseProduct/${gameId}/${userId}`)
      .then((response) => {
        // console.log('CART VIEW AXIO ', response.data);
        return response.data;
      })
      .catch((e) => {
        console.log("catch", e);
      });
  }
);
export const decreaseProductCart = createAsyncThunk(
  "DECREASE_PRODUCT_CART",
  ({ gameId, userId }) => {
    return axios
      .put(`http://localhost:3001/api/cart/decreaseProduct/${gameId}/${userId}`)
      .then((response) => {
        // console.log('CART VIEW AXIO ', response.data);
        return response.data;
      })
      .catch((e) => {
        console.log("catch", e);
      });
  }
);
const initialState = {
  cartData: {},
  singleCart: {},
};

const cartReducer = createReducer(initialState, {
  [addProductToCart.fulfilled]: (state, action) => {
    return (state.cartData = action.payload);
    /* message.success("Product added to cart", 3); */
  },
  [cartView.fulfilled]: (state, action) => {
    // console.log('payload view ', action.payload);
    state.singleCart = action.payload;
  },
  [deleteFromCart.fulfilled]: (state, action) => {
    state.cartData = action.payload;
    /* message.success("Cart updated...", 3); */
  },
  [increaseProductCart.fulfilled]: (state, action) => {
    state.singleCart = action.payload;
    /*     message.success("Cart updated...", 3); */
  },
  [decreaseProductCart.fulfilled]: (state, action) => {
    state.singleCart = action.payload;
    /*     message.success("Cart updated...", 3); */
  },
});

export default cartReducer;
