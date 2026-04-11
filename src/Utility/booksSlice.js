import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BOOKS_PRODUCTS = [
  { id: 901, name: "The Great Gatsby", category: "Fiction", price: "₹399", originalPrice: "₹599", rating: 4.8, reviews: 4560, image: "https://images.unsplash.com/photo-1543005123-86ade7104b03?q=80&w=400&auto=format&fit=crop", discount: "33% OFF" },
  { id: 902, name: "Atomic Habits", category: "Self-Help", price: "₹499", originalPrice: "₹799", rating: 4.9, reviews: 15600, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop", discount: "38% OFF" },
  { id: 903, name: "Leather Sketchbook", category: "Stationery", price: "₹899", originalPrice: "₹1,299", rating: 4.7, reviews: 890, image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?q=80&w=400&auto=format&fit=crop", discount: "31% OFF" },
  { id: 904, name: "Professional Pencil Set", category: "Stationery", price: "₹1,199", originalPrice: "₹1,799", rating: 4.6, reviews: 320, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop", discount: "33% OFF" },
];

export const fetchBooksProducts = createAsyncThunk("books/fetchProducts", async () => {
  return new Promise((resolve) => setTimeout(() => resolve(BOOKS_PRODUCTS), 800));
});

const booksSlice = createSlice({
  name: "books",
  initialState: { products: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchBooksProducts.fulfilled, (state, action) => { state.loading = false; state.products = action.payload; })
      .addCase(fetchBooksProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});
export default booksSlice.reducer;
