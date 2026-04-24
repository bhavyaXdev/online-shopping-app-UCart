  import React from 'react';
import CategoryGrid from '../CategoryGrid';

const lifestyleCategories = [
  // Col 1
  { id: 1, name: "Luxury Sofas", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200&fit=crop", bg: "bg-[#f5f5f4]" },
  { id: 2, name: "Vases", img: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=200&fit=crop", bg: "bg-[#fafaf9]" },
  // Col 2
  { id: 3, name: "Dining Sets", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=200&fit=crop", bg: "bg-[#f5f5f4]" },
  { id: 4, name: "Wall Art", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=200&fit=crop", bg: "bg-[#fafaf9]" },
  // Col 3
  { id: 5, name: "Bedding", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=200&fit=crop", bg: "bg-[#f5f5f4]" },
  { id: 6, name: "Cushions", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=200&fit=crop", bg: "bg-[#fafaf9]" },
  // Col 4
  { id: 7, name: "Lighting", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=200&fit=crop", bg: "bg-[#f5f5f4]" },
  { id: 8, name: "Planters", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=200&fit=crop", bg: "bg-[#fafaf9]" },
  // Col 5
  { id: 9, name: "Storage", img: "https://images.unsplash.com/photo-1594404410182-31c70c8268f5?q=80&w=200&fit=crop", bg: "bg-[#f5f5f4]" },
  { id: 10, name: "Kitchenware", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&fit=crop", bg: "bg-[#fafaf9]" },
  // Col 6
  { id: 11, name: "Rugs", img: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=200&fit=crop", bg: "bg-[#f5f5f4]" },
  { id: 12, name: "Bath Decor", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&fit=crop", bg: "bg-[#fafaf9]" },
];

const HomeLifestyleCategories = () => {
  return (
    <CategoryGrid
      title="Shop By Category"
      categories={lifestyleCategories}
      titleClass="text-xl md:text-2xl font-black text-gray-900 tracking-tight flex items-center"
    />
  );
};

export default HomeLifestyleCategories;
