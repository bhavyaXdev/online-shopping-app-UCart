import React from 'react';
import CategoryGrid from '../CategoryGrid';

const mobilesCategoriesData = [
  {
    name: "Smartphones",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=200&fit=crop",
    bg: "bg-[#e2f1f8]",
  },
  {
    name: "Tablets & iPads",
    img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=200&fit=crop",
    bg: "bg-[#f3e5f5]",
  },
  {
    name: "Smartwatches",
    img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=200&fit=crop",
    bg: "bg-[#e8f5e9]",
  },
  {
    name: "TWS Earbuds",
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=200&fit=crop",
    bg: "bg-[#ffebee]",
  },
  {
    name: "Headphones",
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=200&fit=crop",
    bg: "bg-[#e0f7fa]",
  },
  {
    name: "Power Banks",
    img: "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=200&fit=crop",
    bg: "bg-[#fff3e0]",
  },
  {
    name: "Cases & Covers",
    img: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?q=80&w=200&fit=crop",
    bg: "bg-[#eceff1]",
  },
  {
    name: "Cables",
    img: "https://images.unsplash.com/photo-15338356111053-748ab2b144bc?q=80&w=200&fit=crop",
    bg: "bg-[#fbe9e7]",
  },
  {
    name: "Chargers",
    img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=200&fit=crop",
    bg: "bg-[#fff8e1]",
  },
  {
    name: "Gaming Phones",
    img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=200&fit=crop",
    bg: "bg-[#e3f2fd]",
  },
  {
    name: "Refurbished",
    img: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=200&fit=crop",
    bg: "bg-[#f5f5f5]",
  },
  {
    name: "Screen Guards",
    img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=200&fit=crop",
    bg: "bg-[#e1f5fe]",
  }
];

const MobilesCategories = () => {
  return (
    <CategoryGrid 
      title="Shop By Category"
      categories={mobilesCategoriesData}
      cardClass="w-[90px] md:w-[100px]"
      imageClass="rounded-xl"
    />
  );
};

export default MobilesCategories;
