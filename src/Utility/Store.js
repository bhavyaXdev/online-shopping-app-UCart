import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productSlice.js";
import HomeSlice from "./HomeSlice.js";
import womensFashionReducer from "./womensFashionSlice.js";
import mensFashionReducer from "./mensFashionSlice.js";
import electronicsReducer from "./electronicsSlice.js";
import homeLifestyleReducer from "./homeLifestyleSlice.js";
import beautyReducer from "./beautySlice.js";
import sportsReducer from "./sportsSlice.js";
import kidsReducer from "./kidsSlice.js";
import watchesReducer from "./watchesSlice.js";
import groceryReducer from "./grocerySlice.js";
import booksReducer from "./booksSlice.js";
import automotiveReducer from "./automotiveSlice.js";
import mobilesReducer from "./mobilesSlice.js";
import computersReducer from "./computersSlice.js";

const store = configureStore({
  reducer: {
    products: ProductSlice,
    home: HomeSlice,
    womensFashion: womensFashionReducer,
    mensFashion: mensFashionReducer,
    electronics: electronicsReducer,
    homeLifestyle: homeLifestyleReducer,
    beauty: beautyReducer,
    sports: sportsReducer,
    kids: kidsReducer,
    watches: watchesReducer,
    grocery: groceryReducer,
    books: booksReducer,
    automotive: automotiveReducer,
    mobiles: mobilesReducer,
    computers: computersReducer,
  },
});

export default store;
