import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const HOME_PRODUCTS = [
  {
    id: 301,
    name: "Abstract Canvas Art",
    category: "Decor",
    price: "₹2,499",
    originalPrice: "₹4,999",
    rating: 4.7,
    reviews: 88,
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400&auto=format&fit=crop",
    discount: "50% OFF",
  },
  {
    id: 302,
    name: "Modern Ceramic Vase",
    category: "Decor",
    price: "₹899",
    originalPrice: "₹1,499",
    rating: 4.5,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=400&auto=format&fit=crop",
    discount: "40% OFF",
  },
  {
    id: 303,
    name: "Velvet Accent Chair",
    category: "Furniture",
    price: "₹12,499",
    originalPrice: "₹18,999",
    rating: 4.9,
    reviews: 56,
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400&auto=format&fit=crop",
    discount: "34% OFF",
  },
  {
    id: 304,
    name: "Smart Aroma Diffuser",
    category: "Lifestyle",
    price: "₹1,899",
    originalPrice: "₹2,999",
    rating: 4.6,
    reviews: 1450,
    image:
      "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=400&auto=format&fit=crop",
    discount: "37% OFF",
  },
];

export const fetchHomeProducts = createAsyncThunk(
  "homeLifestyle/fetchProducts",
  async () => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(HOME_PRODUCTS), 800),
    );
  },
);

const homeLifestyleSlice = createSlice({
  name: "homeLifestyle",
  initialState: { products: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchHomeProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default homeLifestyleSlice.reducer;
