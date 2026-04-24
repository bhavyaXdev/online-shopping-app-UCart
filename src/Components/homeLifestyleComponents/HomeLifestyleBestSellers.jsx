import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import CarouselScroller from '../CarouselScroller';
import ProductCard from '../ProductCard';

const signaturePieces = [
  { id: 601, name: "Handcrafted Ceramic Vase", price: "₹2,499", rating: 4.9, reviews: 320, discount: "SIGNATURE", image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=400&fit=crop" },
  { id: 602, name: "Premium Egyptian Cotton Sheet", price: "₹6,990", rating: 5.0, reviews: 145, discount: "LUXURY", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400&fit=crop" },
  { id: 603, name: "Italian Leather Sofa", price: "₹1,89,900", rating: 5.0, reviews: 32, discount: "PREMIUM", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&fit=crop" },
  { id: 604, name: "Solid Teak Dining Table", price: "₹84,999", rating: 4.8, reviews: 67, discount: "SIGNATURE", image: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=400&fit=crop" }
];

const HomeLifestyleBestSellers = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-10 md:py-16">
      <div className="bg-[#FAF9F6] rounded-[50px] p-8 md:p-12 border border-stone-100 shadow-inner overflow-hidden relative">
        {/* Abstract decor element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 relative z-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-stone-400" size={18} />
              <span className="text-stone-400 text-xs font-bold tracking-[0.3em] uppercase">The Curator's Choice</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif italic text-stone-800">
               Signature <span className="text-stone-500 font-normal not-italic">Living Pieces</span>
            </h2>
          </div>
          
          <button className="mt-6 md:mt-0 px-8 py-4 bg-stone-800 text-white rounded-full font-bold hover:bg-black transition-all flex items-center gap-3 self-start group">
            Explore Collection
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
          </button>
        </div>

        <CarouselScroller containerClass="!p-0 !py-0 !mx-0 overflow-y-visible">
          {signaturePieces.map((product, index) => (
            <div key={product.id || index} className="snap-start shrink-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px]">
              <ProductCard 
                product={product} 
                variant="offer" 
                cardProps={{
                    // Injecting stone-themed offer background override
                }}
              />
              {/* Note: In a production app, we'd pass custom background colors through cardProps */}
            </div>
          ))}
        </CarouselScroller>
      </div>
    </section>
  );
};

export default HomeLifestyleBestSellers;
