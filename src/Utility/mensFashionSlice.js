import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock API Data for Men's Fashion
const MENS_PRODUCTS = [
  {
    id: 101,
    name: "Classic Linen Shirt",
    category: "Western Wear",
    price: "₹1,899",
    originalPrice: "₹2,499",
    rating: 4.5,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=400&auto=format&fit=crop",
    discount: "24% OFF",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 102,
    name: "Slim Fit Chinos",
    category: "Western Wear",
    price: "₹2,199",
    originalPrice: "₹3,499",
    rating: 4.3,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1473966968600-fa804b86d9b4?q=80&w=400&auto=format&fit=crop",
    discount: "37% OFF",
    sizes: ["30", "32", "34", "36"],
  },
  {
    id: 103,
    name: "Embroidered Kurta",
    category: "Ethnic Wear",
    price: "₹2,799",
    originalPrice: "₹4,999",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=400&auto=format&fit=crop",
    discount: "44% OFF",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 104,
    name: "Leather Chelsea Boots",
    category: "Footwear",
    price: "₹4,499",
    originalPrice: "₹6,999",
    rating: 4.8,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=400&auto=format&fit=crop",
    discount: "35% OFF",
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 105,
    name: "Cotton Bomber Jacket",
    category: "Western Wear",
    price: "₹3,299",
    originalPrice: "₹4,999",
    rating: 4.6,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=400&auto=format&fit=crop",
    discount: "34% OFF",
    sizes: ["M", "L", "XL"],
  },
  {
    id: 106,
    name: "Sherwani Set",
    category: "Ethnic Wear",
    price: "₹12,499",
    originalPrice: "₹18,999",
    rating: 4.9,
    reviews: 35,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400&auto=format&fit=crop",
    discount: "34% OFF",
    sizes: ["M", "L", "XL"],
  },
  {
    id: 107,
    name: "Aviator Sunglasses",
    category: "Accessories",
    price: "₹1,499",
    originalPrice: "₹2,199",
    rating: 4.4,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1511499767390-91f1976bb400?q=80&w=400&auto=format&fit=crop",
    discount: "32% OFF",
    sizes: ["FS"],
  },
  {
    id: 108,
    name: "Denim Trucker Jacket",
    category: "Western Wear",
    price: "₹2,899",
    originalPrice: "₹4,299",
    rating: 4.6,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?q=80&w=400&auto=format&fit=crop",
    discount: "32% OFF",
    sizes: ["S", "M", "L", "XL"],
  }
];

// Async thunk to simulate API call
export const fetchMensProducts = createAsyncThunk(
  "mensFashion/fetchProducts",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MENS_PRODUCTS);
      }, 800);
    });
  }
);

const mensFashionSlice = createSlice({
  name: "mensFashion",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMensProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMensProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchMensProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mensFashionSlice.reducer;
