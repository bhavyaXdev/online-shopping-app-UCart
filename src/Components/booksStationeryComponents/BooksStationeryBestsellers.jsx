import React from 'react';
import { useSelector } from 'react-redux';
import { Sparkles } from 'lucide-react';
import ProductCarousel from '../ProductCarousel';

const BooksStationeryBestsellers = () => {
  const { products, loading } = useSelector((state) => state.books);
  
  // Filter for bestseller logic (e.g., category Fiction or just first few products)
  const bestsellerProducts = products.filter(p => p.category === 'Fiction').slice(0, 8);

  return (
    <div className="py-8">
      <ProductCarousel 
        title="Bestselling Books" 
        subtitle="The most loved titles in our collection"
        icon={<Sparkles className="text-blue-400" size={24} />}
        products={bestsellerProducts} 
        loading={loading}
        autoPlay={true}
      />
    </div>
  );
};

export default BooksStationeryBestsellers;
