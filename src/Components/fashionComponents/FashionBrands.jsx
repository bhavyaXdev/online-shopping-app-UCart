import React from 'react';
import { ArrowRight } from 'lucide-react';

const topBrands = [
  "IVASTRI", "anouk", "dressberry", "Mast & Harbour", "HRX", "KIL", "WROGN", "Puma"
];

const brandProducts = [
  { 
    img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=500&fit=crop", 
    brand: "Roadster", 
    offer: "Min. 70% Off" 
  },
  { 
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500&fit=crop", 
    brand: "HRX", 
    offer: "Min. 70% Off" 
  },
  { 
    img: "https://images.unsplash.com/photo-1583391733958-6c7827818441?q=80&w=500&fit=crop", 
    brand: "anouk", 
    offer: "Under ₹699" 
  },
  { 
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500&fit=crop", 
    brand: "WROGN", 
    offer: "Min. 70% Off" 
  },
  { 
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&fit=crop", 
    brand: "Puma", 
    offer: "Under ₹699" 
  },
];

const FashionBrands = () => {
  return (
    <section className="container mx-auto px-4 md:px-10 py-10 md:py-16">
      
      {/* 1. Logos Strip */}
      <div className="flex justify-between items-center overflow-x-auto gap-6 md:gap-10 pb-4 mb-4 no-scrollbar opacity-70 grayscale hover:grayscale-0 transition-all duration-500 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {topBrands.map((brand, i) => (
          <span 
            key={i} 
            className="text-sm md:text-xl font-bold font-serif whitespace-nowrap text-gray-800 tracking-wide hover:text-orange-600 cursor-pointer transition-colors"
          >
            {brand}
          </span>
        ))}
      </div>

      {/* 2. Hero Banner */}
      <div className="relative w-full border border-[#fbdf70] h-[180px] md:h-[300px] bg-gradient-to-r from-[#fbdf70] via-[#fcf0b1] to-white rounded-xl overflow-hidden mb-6 flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.06)] cursor-pointer group">
        
        {/* Fashion Logos Background (Positioned to the right) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-[60%] z-0">
           <img 
             src="https://i.pinimg.com/736x/7d/d3/43/7dd343368ccdca763a13919df8f584d8.jpg" 
             className="w-full h-full object-cover object-left [mask-image:linear-gradient(to_right,transparent,black)]"
             alt="Brand Logos" 
           />
        </div>

        {/* Banner Text Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16 flex flex-col justify-center">
          <h3 className="text-3xl md:text-[54px] font-serif font-black text-[#0f1118] leading-[1.05] drop-shadow-sm">
            HOUSE OF <br/> BRANDS
          </h3>
          
          <div className="flex items-center gap-3 mt-4 md:mt-5">
             <span className="text-[22px] md:text-4xl font-black text-[#0f1118] tracking-tight">
               60-80% Off
             </span>
             <div className="bg-[#0f1118] text-white p-1.5 md:p-[7px] rounded-full shrink-0 group-hover:scale-105 transition-transform shadow-md">
                <ArrowRight size={20} strokeWidth={3.5} className="w-5 h-5 md:w-6 md:h-6" />
             </div>
          </div>
        </div>
      </div>

      {/* 3. Product Cards Row */}
      <div className="flex gap-3 md:gap-5 overflow-x-auto no-scrollbar pb-6 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {brandProducts.map((item, i) => (
          <div 
            key={i} 
            className="snap-start shrink-0 w-[140px] md:w-[200px] flex flex-col cursor-pointer group"
          >
            <div className="relative w-full aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden mb-3 bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
               
               {/* Product Image */}
               <img 
                 src={item.img} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 alt={item.brand}
               />
               
               {/* Overlay Brand Logo Pill */}
               <div className="absolute bottom-2 md:bottom-3 inset-x-2 md:inset-x-3 bg-white/95 backdrop-blur-sm rounded-md py-1.5 md:py-2 px-2 flex justify-center items-center shadow-sm">
                  <span className="text-[10px] md:text-xs font-black tracking-widest text-gray-800 uppercase flex items-center gap-1">
                     {/* Using a tiny triangle to mimic standard brand logo icons */}
                     <div className="w-2 h-2 bg-gray-800 shrink-0" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                     {item.brand}
                  </span>
               </div>
            </div>
            
            {/* Discount Text */}
            <span className="text-center text-[11px] md:text-sm font-bold text-gray-800 tracking-tight group-hover:text-orange-600 transition-colors">
              {item.offer}
            </span>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default FashionBrands;
