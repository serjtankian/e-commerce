import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { message } from "antd";

export const postReview = createAsyncThunk(
  "POST_REVIEW",
  ({ gameName, gameId, userId, reviewInput, gameRating }) => {
    return axios
      .post(`http://localhost:3001/api/reviews/addreview/${gameId}/${userId}`, {
        videogameName: gameName,
        text: reviewInput,
        rate: gameRating,
      })
      .then((r) => r.data);
  }
);

export const getReview = createAsyncThunk("GET_REVIEW", (videogameId) => {
  return axios
    .get(`http://localhost:3001/api/reviews/vgreviews/${videogameId}`)
    .then((r) => r.data);
});

const initialState = {};

const reviewReducer = createReducer(initialState, {
  [postReview.fulfilled]: (state, action) => {
    state = action.payload;
    // message.success("Review added to game", 1);
  },
  [getReview.fulfilled]: (state, action) => {
    state = action.payload;
  },
});

export default reviewReducer;
