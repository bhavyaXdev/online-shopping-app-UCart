import React from "react";
import CategoryGrid from "../CategoryGrid";

const kidsCategoriesData = [
  {
    name: "Girls Wear",
    img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Boys Wear",
    img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Infant Wear",
    img: "https://images.unsplash.com/photo-1519689680058-324335c75eba?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Toys & Games",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Baby Gear",
    img: "https://images.unsplash.com/photo-1522771930-78848d92871d?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "School Supplies",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Kids Footwear",
    img: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Accessories",
    img: "https://images.unsplash.com/photo-1587823527237-775c74291f03?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Ethnic Wear",
    img: "https://images.unsplash.com/photo-1602484323382-7dc014dafa49?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Winter Wear",
    img: "https://images.unsplash.com/photo-1544413660-299165566b1d?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Party Wear",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=200&fit=crop",
    bg: "bg-[#fcf5cd]",
  },
  {
    name: "Night Wear",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Night Wear",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Night Wear",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Night Wear",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Night Wear",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Night Wear",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },{
    name: "Night Wear",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Night Wear",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Night Wear",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
  {
    name: "Night Wear",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop",
    bg: "bg-[#fae6e3]",
  },
];

const KidsCategories = () => {
  return (
    <CategoryGrid 
      title="Shop By Category"
      categories={kidsCategoriesData}
      containerClass="py-4 md:py-8"
      cardClass="w-[90px] md:w-[100px]"
      imageClass="rounded-xl"
    />
  );
};

export default KidsCategories;
