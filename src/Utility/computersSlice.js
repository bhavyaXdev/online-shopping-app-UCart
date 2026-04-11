import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const COMPUTER_PRODUCTS = [
  { id: 1201, name: "Premium Ultrabook Pro", category: "Laptops", price: "₹84,999", originalPrice: "₹99,999", rating: 4.9, reviews: 450, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&auto=format&fit=crop", discount: "15% OFF" },
  { id: 1202, name: "High-Performance PC", category: "Computers", price: "₹1,24,999", originalPrice: "₹1,49,999", rating: 4.8, reviews: 120, image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=400&auto=format&fit=crop", discount: "17% OFF" },
  { id: 1203, name: "Business Laptop Air", category: "Laptops", price: "₹59,999", originalPrice: "₹69,999", rating: 4.7, reviews: 890, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&auto=format&fit=crop", discount: "14% OFF" },
  { id: 1204, name: "Gaming Tower Case", category: "Computers", price: "₹74,999", originalPrice: "₹89,999", rating: 4.6, reviews: 320, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=400&auto=format&fit=crop", discount: "17% OFF" },
];

export const fetchComputerProducts = createAsyncThunk("computers/fetchProducts", async () => {
  return new Promise((resolve) => setTimeout(() => resolve(COMPUTER_PRODUCTS), 800));
});

const computersSlice = createSlice({
  name: "computers",
  initialState: { products: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComputerProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchComputerProducts.fulfilled, (state, action) => { state.loading = false; state.products = action.payload; })
      .addCase(fetchComputerProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});
export default computersSlice.reducer;
