import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const MOBILE_PRODUCTS = [
  { id: 1101, name: "Flagship 5G Smartphone", category: "Mobiles", price: "₹69,999", originalPrice: "₹79,999", rating: 4.8, reviews: 1560, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop", discount: "12% OFF" },
  { id: 1102, name: "Ultra-Light Tablet Pro", category: "Tablets", price: "₹44,999", originalPrice: "₹49,999", rating: 4.7, reviews: 890, image: "https://images.unsplash.com/photo-1544244015-0cd4b3ff6ec4?q=80&w=400&auto=format&fit=crop", discount: "10% OFF" },
  { id: 1103, name: "Mid-Range Powerhouse", category: "Mobiles", price: "₹24,999", originalPrice: "₹29,999", rating: 4.6, reviews: 2340, image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=400&auto=format&fit=crop", discount: "17% OFF" },
  { id: 1104, name: "Budget-Friendly Tablet", category: "Tablets", price: "₹12,499", originalPrice: "₹18,999", rating: 4.4, reviews: 124, image: "https://images.unsplash.com/photo-1561154464-82e9aff32764?q=80&w=400&auto=format&fit=crop", discount: "34% OFF" },
];

export const fetchMobileProducts = createAsyncThunk("mobiles/fetchProducts", async () => {
  return new Promise((resolve) => setTimeout(() => resolve(MOBILE_PRODUCTS), 800));
});

const mobilesSlice = createSlice({
  name: "mobiles",
  initialState: { products: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMobileProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchMobileProducts.fulfilled, (state, action) => { state.loading = false; state.products = action.payload; })
      .addCase(fetchMobileProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});
export default mobilesSlice.reducer;
