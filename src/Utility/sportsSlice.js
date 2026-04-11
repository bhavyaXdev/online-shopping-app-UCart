import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const SPORTS_PRODUCTS = [
  { id: 501, name: "Resistance Band Set", category: "Fitness", price: "₹1,499", originalPrice: "₹2,299", rating: 4.7, reviews: 1560, image: "https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=400&auto=format&fit=crop", discount: "35% OFF" },
  { id: 502, name: "Pro Basketball", category: "Sports Gear", price: "₹2,499", originalPrice: "₹3,999", rating: 4.8, reviews: 320, image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=400&auto=format&fit=crop", discount: "38% OFF" },
  { id: 503, name: "Running Performance Shorts", category: "Activewear", price: "₹1,299", originalPrice: "₹1,999", rating: 4.6, reviews: 890, image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=400&auto=format&fit=crop", discount: "35% OFF" },
  { id: 504, name: "Smart Skipping Rope", category: "Fitness", price: "₹1,899", originalPrice: "₹2,999", rating: 4.5, reviews: 240, image: "https://images.unsplash.com/photo-1518611012118-2969c6a2c7a7?q=80&w=400&auto=format&fit=crop", discount: "37% OFF" },
];

export const fetchSportsProducts = createAsyncThunk("sports/fetchProducts", async () => {
  return new Promise((resolve) => setTimeout(() => resolve(SPORTS_PRODUCTS), 800));
});

const sportsSlice = createSlice({
  name: "sports",
  initialState: { products: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSportsProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchSportsProducts.fulfilled, (state, action) => { state.loading = false; state.products = action.payload; })
      .addCase(fetchSportsProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});
export default sportsSlice.reducer;
