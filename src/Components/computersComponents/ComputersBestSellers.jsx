import React from 'react';
import { ChevronRight } from 'lucide-react';
import CarouselScroller from '../CarouselScroller';
import ProductCard from '../ProductCard';

const bestSellers = [
  { id: 201, name: "Apple Watch Series 9 GPS", price: "₹38,990", originalPrice: "₹41,900", discount: "7% OFF", rating: 4.8, reviews: 1250, badge: "Bestseller", image: "https://images.unsplash.com/photo-1434493789847-2f02bca1c356?auto=format&fit=crop&q=80&w=400" },
  { id: 202, name: "Sony WH-1000XM5 Headphones", price: "₹29,990", originalPrice: "₹34,990", discount: "14% OFF", rating: 4.9, reviews: 843, badge: "Bestseller", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400" },
  { id: 203, name: "MacBook Air M2 Chip", price: "₹1,04,900", originalPrice: "₹1,14,900", discount: "9% OFF", rating: 4.9, reviews: 2100, badge: "Bestseller", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400" },
  { id: 204, name: "Samsung Galaxy S24 Ultra", price: "₹1,29,999", originalPrice: "₹1,34,999", discount: "4% OFF", rating: 4.8, reviews: 654, badge: "Bestseller", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=400" },
  { id: 205, name: "iPad Pro 11-inch M4", price: "₹99,900", originalPrice: "₹1,09,900", discount: "9% OFF", rating: 4.8, reviews: 432, badge: "Bestseller", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400" }
];

const ComputersBestSellers = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-6 md:py-10">
      <div className="bg-gradient-to-br from-[#070b14] via-[#0f172a] to-[#16294d] rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl border border-white/5">
        <div className="flex justify-between items-end mb-6 md:mb-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-[2px] bg-cyan-400"></div>
              <span className="text-cyan-400 text-[9px] md:text-xs font-black tracking-[0.2em] uppercase">Upgrade to Smarter Computing</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white">
            Top Brands
            </h2>
          </div>
          
          <button className="flex items-center gap-3 text-white text-xs md:text-sm font-bold transition-all bg-[#1e293b]/80 hover:bg-[#1e293b] px-4 py-2 md:px-5 md:py-2.5 rounded-[14px] group shadow-sm">
           <span className='text-cyan-400 hidden md:block'> View All Tech</span>
            <span className="bg-white/10 rounded-full p-2 md:p-1 group-hover:bg-cyan-500 transition-colors">
              <ChevronRight size={16} />
            </span>
          </button>
        </div>

        <CarouselScroller containerClass="!p-0 !py-0 !mx-0">
          {bestSellers.map((product, index) => (
            <div key={product.id || index} className="snap-start shrink-0 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]">
              <ProductCard product={product} reviewsAtBottom={false} />
            </div>
          ))}
        </CarouselScroller>
      </div>
    </section>
  );
};

export default ComputersBestSellers;
