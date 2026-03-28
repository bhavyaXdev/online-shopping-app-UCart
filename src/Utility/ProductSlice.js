import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    allProducts: [], // Placeholder for eventual full product list
  },
  reducers: {},
});

export default ProductSlice.reducer;
export const {} = ProductSlice.actions;
