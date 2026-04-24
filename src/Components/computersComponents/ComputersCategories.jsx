import React from 'react';
import CategoryGrid from '../CategoryGrid';

const computersCategoriesData = [
  { name: "Laptops", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=200&fit=crop", bg: "bg-[#e2f1f8]" },
  { name: "Desktops", img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=200&fit=crop", bg: "bg-[#f3e5f5]" },
  { name: "Monitors", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=200&fit=crop", bg: "bg-[#e8f5e9]" },
  { name: "Keyboards", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=200&fit=crop", bg: "bg-[#ffebee]" },
  { name: "Mice", img: "https://images.unsplash.com/photo-1527814050087-379381547969?q=80&w=200&fit=crop", bg: "bg-[#e0f7fa]" },
  { name: "Components", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=200&fit=crop", bg: "bg-[#fff3e0]" },
  { name: "Storage", img: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=200&fit=crop", bg: "bg-[#eceff1]" },
  { name: "Networking", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=200&fit=crop", bg: "bg-[#fbe9e7]" },
  { name: "Printers", img: "https://images.unsplash.com/photo-1612815154858-60aa4f5e8bd8?q=80&w=200&fit=crop", bg: "bg-[#fff8e1]" },
  { name: "Audio", img: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=200&fit=crop", bg: "bg-[#e3f2fd]" },
  { name: "Webcams", img: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=200&fit=crop", bg: "bg-[#f5f5f5]" },
  { name: "Software", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=200&fit=crop", bg: "bg-[#e1f5fe]" }
];

const ComputersCategories = () => {
  return (
    <CategoryGrid 
      title="Shop By Category"
      categories={computersCategoriesData}
      cardClass="w-[90px] md:w-[100px]"
      imageClass="rounded-xl"
    />
  );
};

export default ComputersCategories;
