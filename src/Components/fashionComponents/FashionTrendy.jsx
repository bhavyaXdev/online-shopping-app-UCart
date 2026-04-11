import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

const trendyData = [
  { 
    username: "viral_fits", 
    likes: "12.4k", 
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500&fit=crop",
    desc: "Summer essentials dropping soon! ✨ #OOTD"
  },
  { 
    username: "street_hype", 
    likes: "45.8k", 
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=500&fit=crop",
    desc: "City walks in the new denim line. 🔥"
  },
  { 
    username: "chic.daily", 
    likes: "24.1k", 
    img: "https://images.unsplash.com/photo-1434389670869-c41031c50a1a?q=80&w=500&fit=crop",
    desc: "Simplicity is the ultimate sophistication. 🤍"
  },
  { 
    username: "vintage_vibe", 
    likes: "8.9k", 
    img: "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=500&fit=crop",
    desc: "Retro feels for the weekend getaway."
  },
  { 
    username: "lux_style", 
    likes: "32.5k", 
    img: "https://images.unsplash.com/photo-1550614000-4b95f265ecb5?q=80&w=500&fit=crop",
    desc: "Elevating the everyday wardrobe."
  }
];

const FashionTrendy = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth >= 768 ? 320 : 270;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        
        {/* Title Section */}
        <div className="flex flex-col items-center mb-12 md:mb-25 text-center relative">
          {/* Background Highlight Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px] md:text-[90px] font-black text-gray-900/5 whitespace-nowrap pointer-events-none z-0 tracking-[0.2em] uppercase">
            Viral Styles
          </div>
          
          <h2 className="relative z-10 text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase flex items-center gap-2">
             <div className="relative group">
                 {/* Dangling Cherry Keychain */}
                 <div className="absolute hidden md:block -top-0 -left-8 md:-top-0 md:-left-18   w-20 h-24 md:w-24 md:h-32 pointer-events-none drop-shadow-md transform -rotate-12 z-20 ">
                   <img src="/image copy 4.png" alt="Cherry Keychain" className="w-full h-full object-contain" />
                 </div>
                  <div className="absolute -top-8 left-58 md:-top-16  md:left-93   w-15 h-15 md:w-24 md:h-32 pointer-events-none drop-shadow-md transform rotate-4 z-20  ">
                   <img src="/image copy 5.png" alt="Cherry Keychain" className="w-full h-full object-contain" />
                 </div>
                 #Trending
             </div>
             <span className="text-gray-500 font-serif italic text-4xl md:text-6xl lowercase font-normal">now</span>
          </h2>
          
          <p className="relative z-10 text-gray-600 outline-none font-bold tracking-[0.25em] uppercase mt-4 text-[10px] md:text-xs">
             Shop the looks breaking the internet
          </p>
        </div>

        {/* IG Feed Carousel */}
        <div className="relative group/trendy">
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-10 pt-4 px-2 md:px-6 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {trendyData.map((item, i) => (
              <div 
                key={i} 
                className="snap-center shrink-0 w-[240px] md:w-[280px] h-[360px] md:h-[360px] flex flex-col group cursor-pointer"
              >
                <div className="relative w-full h-full overflow-hidden rounded-[20px] shadow-sm group-hover:shadow-xl transition-all duration-500">
                   {/* Product Image */}
                   <img 
                     src={item.img} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                     alt={item.username} 
                   />
                   
                   {/* Clean Dark Overlay on Hover */}
                   <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end h-1/2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm md:text-base font-bold truncate">@{item.username}</span>
                        <div className="bg-white/90 text-black p-2 rounded-full shrink-0 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                           <ShoppingBag size={16} />
                        </div>
                      </div>
                      <span className="text-white/90 text-xs truncate">{item.desc}</span>
                   </div>
                   
                   {/* Floating Likes Badge */}
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-1">
                      <span className="text-rose-500 font-bold text-[11px]">❤️</span>
                      <span className="text-gray-800 font-bold text-[11px] tracking-wide">{item.likes}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
             onClick={() => scroll('left')}
             className="absolute left-0 md:left-[-10px] top-[45%] -translate-y-1/2 bg-white text-gray-800 p-3.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:text-pink-500 hover:scale-110 transition-all hidden md:flex opacity-0 group-hover/trendy:opacity-100 z-40"
          >
             <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <button 
             onClick={() => scroll('right')}
             className="absolute right-0 md:right-[-10px] top-[45%] -translate-y-1/2 bg-white text-gray-800 p-3.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:text-pink-500 hover:scale-110 transition-all hidden md:flex opacity-0 group-hover/trendy:opacity-100 z-40"
          >
             <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FashionTrendy;
