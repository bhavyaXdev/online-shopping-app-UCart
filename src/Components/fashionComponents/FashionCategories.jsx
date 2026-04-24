import React from "react";
import CategoryGrid from "../CategoryGrid";

const categoriesData = [
  // Col 1
  {
    name: "Wedding Store",
    img: "https://i.pinimg.com/1200x/68/1b/66/681b66ff7290c386f5b87b2818f05ba5.jpg",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Trends",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  // Col 2
  {
    name: "Shirts, Tshirts",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Kurta sets",
    img: "https://i.pinimg.com/736x/5c/4a/09/5c4a099371e637991dbc4603ad4b85cb.jpg",
    bg: "bg-[#fae6e3]",
  },
  // Col 3
  {
    name: "Jeans",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Dresses, Co-ords",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  // Col 4
  {
    name: "Sports Shoes",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Casual footwear",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  // Col 5
  {
    name: "Watches",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Backpacks",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  // Col 6
  {
    name: "Kids' clothing",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Jewellery",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  // Col 7
  {
    name: "Luggage",
    img: "https://images.unsplash.com/photo-1551524164-687a55dd1126?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Sarees",
    img: "https://i.pinimg.com/736x/e0/06/d1/e006d152d089001b98eba0c83bdbfdf1.jpg",
    bg: "bg-[#fae6e3]",
  },
  // Col 8
  {
    name: "Kurtas..",
    img: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Jeans,trousers",
    img: "https://i.pinimg.com/736x/2d/9f/f2/2d9ff26ec322cb54efec35a5d6abaff2.jpg",
    bg: "bg-[#fae6e3]",
  },
  // Col 9
  {
    name: "Trunk, Vests",
    img: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Kurtis",
    img: "https://i.pinimg.com/736x/99/f1/03/99f1031363b879610dc0f8713d09cc1e.jpg",
    bg: "bg-[#fae6e3]",
  },
  // Col 10
  {
    name: "Summer Wear",
    img: "https://i.pinimg.com/736x/e4/e7/9b/e4e79bfd23512d941cde631530140e85.jpg",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Sports Shoes",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  // Col 11
  {
    name: "Sports Wear",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Nightsuits",
    img: "https://i.pinimg.com/1200x/0f/fb/c3/0ffbc39e4e49a2fb3825b89dbe67f2c8.jpg",
    bg: "bg-[#fae6e3]",
  },
];

const FashionCategories = () => {
  return (
    <CategoryGrid
      title="Shop By Category"
      categories={categoriesData}
      titleClass="text-xl md:text-2xl font-black text-pink-500 tracking-tight flex items-center"
    />
  );
};

export default FashionCategories;
