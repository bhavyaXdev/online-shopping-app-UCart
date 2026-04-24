import React from 'react';
import CarouselScroller from '../CarouselScroller';
import ProductCard from '../ProductCard';

const WatchesEssentials = () => {
  // Mock products - in a real app these would come from Redux/API
  const products = [
    { id: 1, name: "Gold Chrono", price: 12999, originalPrice: 15999, discount: 20, rating: 4.8, reviews: 124, img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800" },
    { id: 2, name: "Smart Gen 6", price: 18499, originalPrice: 19999, discount: 10, rating: 4.9, reviews: 256, img: "https://images.unsplash.com/photo-1508685096489-7a689bd20892?q=80&w=800" },
    { id: 3, name: "Aviator Black", price: 4499, originalPrice: 5999, discount: 25, rating: 4.7, reviews: 89, img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=800" },
    { id: 4, name: "Leather Wallet", price: 1499, originalPrice: 2499, discount: 40, rating: 4.6, reviews: 112, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800" },
    { id: 5, name: "Luxury Cufflinks", price: 2999, originalPrice: 3999, discount: 25, rating: 4.8, reviews: 45, img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800" },
  ];

  return (
    <div className="py-4">
      <CarouselScroller 
        title="Weekly Essentials" 
        subtitle="Must-have accessories for your daily rotation"
        viewAllLink="/category/watches"
        autoPlay={true}
      >
        {products.map((product) => (
          <div key={product.id} className="snap-start shrink-0 w-[200px] md:w-[280px]">
            <ProductCard product={product} />
          </div>
        ))}
      </CarouselScroller>
    </div>
  );
};

export default WatchesEssentials;
