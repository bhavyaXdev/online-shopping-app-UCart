import React from 'react';
import CategoryGrid from '../CategoryGrid';

const WatchesCategories = () => {
  const categories = [
    { id: 1, name: "Analogue", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400&fit=crop", bg: "bg-amber-50" },
    { id: 2, name: "Digital", img: "https://images.unsplash.com/photo-1508685096489-7a689bd20892?q=80&w=400&fit=crop", bg: "bg-blue-50" },
    { id: 3, name: "Smartwatches", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400&fit=crop", bg: "bg-indigo-50" },
    { id: 4, name: "Luxury", img: "https://images.unsplash.com/photo-1547996160-81dfa63595dd?q=80&w=400&fit=crop", bg: "bg-rose-50" },
    { id: 5, name: "Chronograph", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=400&fit=crop", bg: "bg-emerald-50" },
    { id: 6, name: "Accessories", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=400&fit=crop", bg: "bg-purple-50" },
    { id: 7, name: "Sunglasses", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&fit=crop", bg: "bg-cyan-50" },
    { id: 8, name: "Wallets", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400&fit=crop", bg: "bg-orange-50" },
  ];

  return <CategoryGrid categories={categories} title="Shop by Category" />;
};

export default WatchesCategories;
