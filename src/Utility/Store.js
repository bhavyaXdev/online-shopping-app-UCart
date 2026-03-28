import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice.js";
import HomeSlice from "./HomeSlice.js";

const store = configureStore({
  reducer: {
    products: ProductSlice,
    home: HomeSlice,
  },
});

export default store;
