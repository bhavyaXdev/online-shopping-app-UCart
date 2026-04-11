import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock API Data
const WOMENS_PRODUCTS = [
  {
    id: 1,
    name: "Embroidered Silk Saree",
    category: "Ethnic Wear",
    price: "₹4,999",
    originalPrice: "₹8,999",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&auto=format&fit=crop",
    discount: "44% OFF",
    sizes: ["FS"], // Free Size
  },
  {
    id: 2,
    name: "Floral Print Maxi Dress",
    category: "Western Wear",
    price: "₹2,499",
    originalPrice: "₹3,999",
    rating: 4.5,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1572804013307-f9615c12d96e?q=80&w=400&auto=format&fit=crop",
    discount: "38% OFF",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 3,
    name: "Designer Anarkali Suit",
    category: "Ethnic Wear",
    price: "₹3,799",
    originalPrice: "₹6,499",
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1583391733956-6c782839d92e?q=80&w=400&auto=format&fit=crop",
    discount: "42% OFF",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    name: "Pastel Kurta Set",
    category: "Ethnic Wear",
    price: "₹1,899",
    originalPrice: "₹2,999",
    rating: 4.4,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1599421142430-b3f19179d724?q=80&w=400&auto=format&fit=crop",
    discount: "37% OFF",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Denim Jacket with Embroidery",
    category: "Western Wear",
    price: "₹1,599",
    originalPrice: "₹2,499",
    rating: 4.6,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1544441893-675973e31d35?q=80&w=400&auto=format&fit=crop",
    discount: "36% OFF",
    sizes: ["XS", "S", "M"],
  },
  {
    id: 6,
    name: "Silk Blend Dupatta",
    category: "Accessories",
    price: "₹799",
    originalPrice: "₹1,299",
    rating: 4.3,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1617175548993-479cd1db389c?q=80&w=400&auto=format&fit=crop",
    discount: "39% OFF",
    sizes: ["FS"],
  },
  {
    id: 7,
    name: "Cotton Chikankari Kurti",
    category: "Ethnic Wear",
    price: "₹1,299",
    originalPrice: "₹1,999",
    rating: 4.5,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=400&auto=format&fit=crop",
    discount: "35% OFF",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Velvet Evening Gown",
    category: "Western Wear",
    price: "₹5,499",
    originalPrice: "₹9,999",
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=400&auto=format&fit=crop",
    discount: "45% OFF",
    sizes: ["S", "M", "L"],
  }
];

// Async thunk to simulate API call
export const fetchWomensProducts = createAsyncThunk(
  "womensFashion/fetchProducts",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(WOMENS_PRODUCTS);
      }, 800);
    });
  }
);

const womensFashionSlice = createSlice({
  name: "womensFashion",
  initialState: {
    products: [], // Starts empty, populated by API
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWomensProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWomensProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchWomensProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default womensFashionSlice.reducer;
