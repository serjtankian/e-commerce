import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

export const createOrder = createAsyncThunk('CREATE_ORDER', ({ userId }) => {
  
  return axios
      .post(`http://localhost:3001/api/orders/${userId}`, {})
    .then((response) => {
      console.log('RESP DATA ORDER', response);
      return response.data;
    })
    .catch((e) => {
      console.log('catch', e);
    });
});

const initialState = {};

const ordersReducer = createReducer(initialState, {
  [createOrder.fulfilled]: (state, action) => {
    state = action.payload;
    //    message.success("Product added to cart", 1);
  },
});

export default ordersReducer;
