import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import allGamesReducer from './gamesReducer';

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    games: allGamesReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
