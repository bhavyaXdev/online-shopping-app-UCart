import React from 'react';
import CategoryGrid from '../CategoryGrid';

const beautyCategories = [
  // Col 1
  { id: 1, name: "Moisturizers", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=200&fit=crop", bg: "bg-[#fdf2f2]" },
  { id: 2, name: "Perfumes", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=200&fit=crop", bg: "bg-[#f5f3ff]" },
  // Col 2
  { id: 3, name: "Lipsticks", img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=200&fit=crop", bg: "bg-[#fdf2f2]" },
  { id: 4, name: "Hair Care", img: "https://images.unsplash.com/photo-1527799822340-304df160ba03?q=80&w=200&fit=crop", bg: "bg-[#f0f9ff]" },
  // Col 3
  { id: 5, name: "Foundation", img: "https://images.unsplash.com/photo-1596755094514-f87034a3a23c?q=80&w=200&fit=crop", bg: "bg-[#fdf2f2]" },
  { id: 6, name: "Sunscreen", img: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=200&fit=crop", bg: "bg-[#fffbeb]" },
  // Col 4
  { id: 7, name: "Eyeshadow", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=200&fit=crop", bg: "bg-[#fdf2f2]" },
  { id: 8, name: "Essential Oils", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=200&fit=crop", bg: "bg-[#f0fdf4]" },
  // Col 5
  { id: 9, name: "Face Masks", img: "https://images.unsplash.com/photo-1590156221120-090c2943e744?q=80&w=200&fit=crop", bg: "bg-[#fdf2f2]" },
  { id: 10, name: "Makeup Brushes", img: "https://images.unsplash.com/photo-1522338223523-dcac6c90557b?q=80&w=200&fit=crop", bg: "bg-[#faf5ff]" },
  // Col 6
  { id: 11, name: "Bath Salts", img: "https://images.unsplash.com/photo-1564277287253-934c868e54ea?q=80&w=200&fit=crop", bg: "bg-[#fdf2f2]" },
  { id: 12, name: "Wellness", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=200&fit=crop", bg: "bg-[#ecfdf5]" },
];

const HealthBeautyCategories = () => {
  return (
    <CategoryGrid
      title="Shop By Category"
      categories={beautyCategories}
      titleClass="text-xl md:text-2xl font-black text-gray-900 tracking-tight flex items-center"
    />
  );
};

export default HealthBeautyCategories;
