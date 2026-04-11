import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const WATCHES_PRODUCTS = [
  { id: 701, name: "Minimalist Silver Watch", category: "Analogue", price: "₹3,499", originalPrice: "₹5,999", rating: 4.8, reviews: 156, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400&auto=format&fit=crop", discount: "41% OFF" },
  { id: 702, name: "Classic Leather Strap Watch", category: "Analogue", price: "₹2,199", originalPrice: "₹3,499", rating: 4.6, reviews: 89, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=400&auto=format&fit=crop", discount: "37% OFF" },
  { id: 703, name: "Premium Chronograph", category: "Chronograph", price: "₹8,499", originalPrice: "₹12,999", rating: 4.9, reviews: 42, image: "https://images.unsplash.com/photo-1508685096489-7as57e81bbb1?q=80&w=400&auto=format&fit=crop", discount: "35% OFF" },
  { id: 704, name: "Smart Fitness Watch", category: "Smartwatches", price: "₹4,899", originalPrice: "₹6,999", rating: 4.7, reviews: 2450, image: "https://images.unsplash.com/photo-1507764923215-055743a3d582?q=80&w=400&auto=format&fit=crop", discount: "30% OFF" },
];

export const fetchWatchesProducts = createAsyncThunk("watches/fetchProducts", async () => {
  return new Promise((resolve) => setTimeout(() => resolve(WATCHES_PRODUCTS), 800));
});

const watchesSlice = createSlice({
  name: "watches",
  initialState: { products: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWatchesProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchWatchesProducts.fulfilled, (state, action) => { state.loading = false; state.products = action.payload; })
      .addCase(fetchWatchesProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});
export default watchesSlice.reducer;
