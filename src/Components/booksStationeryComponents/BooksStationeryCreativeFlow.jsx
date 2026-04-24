import React from 'react';
import { useSelector } from 'react-redux';
import { PenTool } from 'lucide-react';
import ProductCarousel from '../ProductCarousel';

const BooksStationeryCreativeFlow = () => {
  const { products, loading } = useSelector((state) => state.books);
  
  // Filter for Stationery
  const stationeryProducts = products.filter(p => p.category === 'Stationery').slice(0, 8);

  return (
    <div className="py-8 bg-stone-50">
      <ProductCarousel 
        title="Premium Stationery" 
        subtitle="Fine tools for your creative journey"
        icon={<PenTool className="text-blue-400" size={24} />}
        products={stationeryProducts} 
        loading={loading}
      />
    </div>
  );
};

export default BooksStationeryCreativeFlow;
