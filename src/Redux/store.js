import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Utility/productSlice";
import homeReducer from "../Utility/HomeSlice";
import womensFashionReducer from "../Utility/womensFashionSlice";
import mensFashionReducer from "../Utility/mensFashionSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    home: homeReducer,
    womensFashion: womensFashionReducer,
    mensFashion: mensFashionReducer,
  },
});
