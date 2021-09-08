import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import productsReducer from "./productsReducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    cart: cartReducer,
    user: userReducer,
    product: productReducer,
    products: productsReducer,
  },
});

export default store;
