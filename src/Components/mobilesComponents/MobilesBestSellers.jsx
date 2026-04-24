import React from 'react';
import { ChevronRight } from 'lucide-react';
import CarouselScroller from '../CarouselScroller';
import ProductCard from '../ProductCard';

const bestSellers = [
  {
    id: 11,
    name: "Samsung Galaxy S23 FE 5G",
    price: "₹54,999",
    originalPrice: "₹79,999",
    discount: "31% OFF",
    rating: 4.8,
    reviews: 5432,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 12,
    name: "Apple iPhone 14",
    price: "₹58,999",
    originalPrice: "₹69,900",
    discount: "15% OFF",
    rating: 4.7,
    reviews: 12450,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 13,
    name: "OnePlus Nord CE 3 Lite",
    price: "₹19,999",
    originalPrice: "₹21,999",
    discount: "9% OFF",
    rating: 4.6,
    reviews: 8900,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1706606991536-e39d424b94c4?auto=format&fit=crop&q=80&w=400" 
  },
  {
    id: 14,
    name: "Redmi Note 13 Pro",
    price: "₹25,999",
    originalPrice: "₹29,999",
    discount: "13% OFF",
    rating: 4.5,
    reviews: 6512,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1696446700622-5444ca93ca0a?auto=format&fit=crop&q=80&w=400" 
  },
  {
    id: 15,
    name: "Poco X6 Pro 5G",
    price: "₹26,999",
    originalPrice: "₹30,999",
    discount: "12% OFF",
    rating: 4.4,
    reviews: 3245,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1688582046429-1a6ec46a5127?auto=format&fit=crop&q=80&w=400" 
  }
];

const MobilesBestSellers = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-6 md:py-10">
      <div className="bg-[#0f172a] rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl">
        
        {/* Custom Header */}
        <div className="flex justify-between items-end mb-6 md:mb-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-[2px] bg-cyan-400"></div>
              <span className="text-cyan-400 text-[9px] md:text-xs font-black tracking-[0.2em] uppercase">Premium Tech</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white">
              Best Sellers &amp; <span className="text-blue-500 lg:text-cyan-400">Smartphones</span>
            </h2>
          </div>
          
          <button className=" flex items-center gap-3 text-white text-xs md:text-sm font-bold transition-all bg-[#1e293b]/80 hover:bg-[#1e293b] px-4 py-2 md:px-5 md:py-2.5 rounded-[14px] group shadow-sm">
           <span className='text-cyan-400 hidden md:block'> View All Tech</span>
            <span className="bg-white/10 rounded-full p-2 md:p-1  group-hover:bg-cyan-500 transition-colors">
              <ChevronRight size={16} />
            </span>
          </button>
        </div>

        {/* Custom Scroller Body */}
        <CarouselScroller 
          containerClass="!p-0 !py-0 !mx-0" 
        >
          {bestSellers.map((product, index) => (
            <div key={product.id || index} className="snap-start shrink-0 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]">
              <ProductCard 
                product={product} 
                reviewsAtBottom={false} 
              />
            </div>
          ))}
        </CarouselScroller>

       
      </div>
    </section>
  );
};

export default MobilesBestSellers;
