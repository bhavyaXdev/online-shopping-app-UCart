import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const KIDS_PRODUCTS = [
  { id: 601, name: "Cotton Baby Sleepsuit", category: "Infant Wear", price: "₹899", originalPrice: "₹1,499", rating: 4.8, reviews: 234, image: "https://images.unsplash.com/photo-1522771935876-2497116a7a9e?q=80&w=400&auto=format&fit=crop", discount: "40% OFF" },
  { id: 602, name: "Remote Control Car", category: "Toys", price: "₹1,599", originalPrice: "₹2,499", rating: 4.6, reviews: 890, image: "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=400&auto=format&fit=crop", discount: "36% OFF" },
  { id: 603, name: "Educational Puzzle Set", category: "Toys", price: "₹699", originalPrice: "₹999", rating: 4.7, reviews: 450, image: "https://images.unsplash.com/photo-1515488442202-6acd6da816b9?q=80&w=400&auto=format&fit=crop", discount: "30% OFF" },
  { id: 604, name: "Graphic T-Shirt", category: "Boys Wear", price: "₹599", originalPrice: "₹899", rating: 4.4, reviews: 120, image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=400&auto=format&fit=crop", discount: "33% OFF" },
];

export const fetchKidsProducts = createAsyncThunk("kids/fetchProducts", async () => {
  return new Promise((resolve) => setTimeout(() => resolve(KIDS_PRODUCTS), 800));
});

const kidsSlice = createSlice({
  name: "kids",
  initialState: { products: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchKidsProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchKidsProducts.fulfilled, (state, action) => { state.loading = false; state.products = action.payload; })
      .addCase(fetchKidsProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});
export default kidsSlice.reducer;
