import React from 'react';
import CategoryGrid from '../CategoryGrid';

const BooksStationeryCategories = () => {
  const categories = [
    { id: 1, name: "Fiction", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&fit=crop", bg: "bg-blue-50" },
    { id: 2, name: "Non-Fiction", img: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=400&fit=crop", bg: "bg-amber-50" },
    { id: 3, name: "Stationery", img: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?q=80&w=400&fit=crop", bg: "bg-green-50" },
    { id: 4, name: "Art Supplies", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&fit=crop", bg: "bg-rose-50" },
    { id: 5, name: "Education", img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400&fit=crop", bg: "bg-cyan-50" },
    { id: 6, name: "Children", img: "https://images.unsplash.com/photo-1512413911193-3dec5e02528b?q=80&w=400&fit=crop", bg: "bg-purple-50" }
  ];

  return <CategoryGrid categories={categories} title="Explore Categories" />;
};

export default BooksStationeryCategories;
