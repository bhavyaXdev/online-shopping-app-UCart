import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const ELECTRONICS_PRODUCTS = [
  { id: 201, name: "Noise Cancelling Headphones", category: "Audio", price: "₹12,999", originalPrice: "₹19,999", rating: 4.8, reviews: 456, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop", discount: "35% OFF" },
  { id: 202, name: "Smart Watch Series 7", category: "Wearables", price: "₹24,999", originalPrice: "₹29,999", rating: 4.7, reviews: 890, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop", discount: "17% OFF" },
  { id: 203, name: "Ultra-Thin Laptop Pro", category: "Computers", price: "₹89,999", originalPrice: "₹99,999", rating: 4.9, reviews: 120, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&auto=format&fit=crop", discount: "10% OFF" },
  { id: 204, name: "Mechanical Gaming Keyboard", category: "PC Gaming", price: "₹4,599", originalPrice: "₹6,999", rating: 4.6, reviews: 234, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400&auto=format&fit=crop", discount: "34% OFF" },
  { id: 205, name: "4K Mirrorless Camera", category: "Photography", price: "₹65,999", originalPrice: "₹74,999", rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop", discount: "12% OFF" },
  { id: 206, name: "Portable Bluetooth Speaker", category: "Audio", price: "₹2,499", originalPrice: "₹3,999", rating: 4.4, reviews: 1560, image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?q=80&w=400&auto=format&fit=crop", discount: "38% OFF" },
];

export const fetchElectronicsProducts = createAsyncThunk("electronics/fetchProducts", async () => {
  return new Promise((resolve) => setTimeout(() => resolve(ELECTRONICS_PRODUCTS), 800));
});

const electronicsSlice = createSlice({
  name: "electronics",
  initialState: { products: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchElectronicsProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchElectronicsProducts.fulfilled, (state, action) => { state.loading = false; state.products = action.payload; })
      .addCase(fetchElectronicsProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});
export default electronicsSlice.reducer;
