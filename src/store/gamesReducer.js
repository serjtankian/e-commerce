import axios from 'axios';
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from '@reduxjs/toolkit';
import { message } from 'antd';

const clearGames = createAction('CLEAR_GAMES');

export const getAllGames = createAsyncThunk('GET_ALL_GAMES', () => {
  return axios.get('http://localhost:3001/api/videoGames').then((r) => r.data);
});

export const getSingleGame = createAsyncThunk('GET_SINGLE_GAME', (gameId) => {
  return axios
    .get(`http://localhost:3001/api/videoGames/${gameId}`)
    .then((r) => r.data);
});

export const searchGames = createAsyncThunk('SEARCH_GAMES', (searchInput) => {
  return axios
    .get(`http://localhost:3001/api/search?search=${searchInput}`)
    .then((r) => r.data);
});

const allGamesReducer = createReducer(
  { allGames: [], singleGame: {} },
  {
    [clearGames]: (state, action) => {
      state.allGames = action.payload;
    },
    [getAllGames.fulfilled]: (state, action) => {
      state.allGames = action.payload;
      // console.log(state.games);
    },
    [getAllGames.pending]: (state, action) => {
      message.loading({
        content: 'Loading products...',
        className: 'custom-class',
        style: {
          marginTop: '30vh',
        },
        duration: 1,
      });
    },
    [getSingleGame.fulfilled]: (state, action) => {
      state.singleGame = action.payload;
    },
    [searchGames.fulfilled]: (state, action) => {
      state.allGames = action.payload;
    },
    [searchGames.pending]: (state, action) => {
      message.loading({
        content: 'Loading games...',
        className: 'custom-class',
        style: {
          marginTop: '30vh',
        },
        duration: 3,
      });
    },
    [searchGames.rejected]: (state, action) => state,
  }
);

export default allGamesReducer;
