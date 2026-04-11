import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BEAUTY_PRODUCTS = [
  { id: 401, name: "Premium Skincare Set", category: "Skincare", price: "₹2,899", originalPrice: "₹4,499", rating: 4.8, reviews: 324, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d52d?q=80&w=400&auto=format&fit=crop", discount: "35% OFF" },
  { id: 402, name: "Matte Finish Lipstick", category: "Makeup", price: "₹899", originalPrice: "₹1,299", rating: 4.6, reviews: 1560, image: "https://images.unsplash.com/photo-1586776191368-d399df4a4583?q=80&w=400&auto=format&fit=crop", discount: "30% OFF" },
  { id: 403, name: "Sandalwood Fragrance", category: "Fragrance", price: "₹3,499", originalPrice: "₹4,999", rating: 4.9, reviews: 89, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&auto=format&fit=crop", discount: "30% OFF" },
  { id: 404, name: "Hydrating Facial Mist", category: "Skincare", price: "₹1,199", originalPrice: "₹1,799", rating: 4.5, reviews: 450, image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=400&auto=format&fit=crop", discount: "33% OFF" },
];

export const fetchBeautyProducts = createAsyncThunk("beauty/fetchProducts", async () => {
  return new Promise((resolve) => setTimeout(() => resolve(BEAUTY_PRODUCTS), 800));
});

const beautySlice = createSlice({
  name: "beauty",
  initialState: { products: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBeautyProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchBeautyProducts.fulfilled, (state, action) => { state.loading = false; state.products = action.payload; })
      .addCase(fetchBeautyProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});
export default beautySlice.reducer;
