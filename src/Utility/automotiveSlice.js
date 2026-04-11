import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const AUTOMOTIVE_PRODUCTS = [
  { id: 1001, name: "Car Vacuum Cleaner", category: "Cleaning", price: "₹1,899", originalPrice: "₹2,999", rating: 4.5, reviews: 890, image: "https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=400&auto=format&fit=crop", discount: "37% OFF" },
  { id: 1002, name: "Leather Seat Covers", category: "Interior", price: "₹5,499", originalPrice: "₹8,999", rating: 4.7, reviews: 320, image: "https://images.unsplash.com/photo-1549399542-7ec3af8315eb?q=80&w=400&auto=format&fit=crop", discount: "39% OFF" },
  { id: 1003, name: "Dash Cam 1080P", category: "Electronics", price: "₹3,799", originalPrice: "₹5,999", rating: 4.6, reviews: 156, image: "https://images.unsplash.com/photo-1593361414434-b97c0c17aee2?q=80&w=400&auto=format&fit=crop", discount: "37% OFF" },
  { id: 1004, name: "Foam Polish Wax", category: "Cleaning", price: "₹499", originalPrice: "₹799", rating: 4.4, reviews: 1240, image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=400&auto=format&fit=crop", discount: "38% OFF" },
];

export const fetchAutomotiveProducts = createAsyncThunk("automotive/fetchProducts", async () => {
  return new Promise((resolve) => setTimeout(() => resolve(AUTOMOTIVE_PRODUCTS), 800));
});

const automotiveSlice = createSlice({
  name: "automotive",
  initialState: { products: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAutomotiveProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchAutomotiveProducts.fulfilled, (state, action) => { state.loading = false; state.products = action.payload; })
      .addCase(fetchAutomotiveProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});
export default automotiveSlice.reducer;
