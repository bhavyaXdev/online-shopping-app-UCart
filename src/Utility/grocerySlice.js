import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const GROCERY_PRODUCTS = [
  { id: 801, name: "Organic Honey", category: "Pantry", price: "₹599", originalPrice: "₹899", rating: 4.8, reviews: 1240, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400&auto=format&fit=crop", discount: "33% OFF" },
  { id: 802, name: "Premium Dog Food", category: "Pets", price: "₹1,899", originalPrice: "₹2,499", rating: 4.7, reviews: 560, image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=400&auto=format&fit=crop", discount: "24% OFF" },
  { id: 803, name: "Fresh Herb Kit", category: "Pantry", price: "₹299", originalPrice: "₹499", rating: 4.6, reviews: 156, image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=400&auto=format&fit=crop", discount: "40% OFF" },
  { id: 804, name: "Cat Climbing Tower", category: "Pets", price: "₹4,599", originalPrice: "₹6,999", rating: 4.9, reviews: 88, image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400&auto=format&fit=crop", discount: "34% OFF" },
];

export const fetchGroceryProducts = createAsyncThunk("grocery/fetchProducts", async () => {
  return new Promise((resolve) => setTimeout(() => resolve(GROCERY_PRODUCTS), 800));
});

const grocerySlice = createSlice({
  name: "grocery",
  initialState: { products: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroceryProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchGroceryProducts.fulfilled, (state, action) => { state.loading = false; state.products = action.payload; })
      .addCase(fetchGroceryProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});
export default grocerySlice.reducer;
