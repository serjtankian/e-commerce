import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import allGamesReducer from './gamesReducer';
import usersReducer from './usersReducer';
import cartReducer from './cartReducer';
import orderReducer from './ordersReducer'


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    games: allGamesReducer,
    users: usersReducer,
    // login: logginsReducer,
    cart: cartReducer,
    orders: orderReducer,
  },
});

export default store;
