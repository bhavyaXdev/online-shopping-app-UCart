import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Smile } from 'lucide-react';

const trendyKidsData = [
  { 
    username: "coolkids_style", 
    likes: "5.2k", 
    img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=500&fit=crop",
    desc: "Streetwear for the little ones! 😎✨"
  },
  { 
    username: "tiny_trends", 
    likes: "8.1k", 
    img: "https://images.unsplash.com/photo-1602484323382-7dc014dafa49?q=80&w=500&fit=crop",
    desc: "Colorful summer dresses ready for fun. 🌸"
  },
  { 
    username: "baby_swagger", 
    likes: "10.4k", 
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=500&fit=crop",
    desc: "Denim and tees for playtime. 👖👟"
  },
  { 
    username: "little_fashionistas", 
    likes: "4.9k", 
    img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=500&fit=crop",
    desc: "Party ready looks! 🎈"
  },
  { 
    username: "playful_fits", 
    likes: "6.5k", 
    img: "https://images.unsplash.com/photo-1519689680058-324335c75eba?q=80&w=500&fit=crop",
    desc: "Comfort first, but make it stylish. ✨"
  }
];

const KidsTrendyDesigns = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth >= 768 ? 320 : 270;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-10 md:py-16 bg-white  border-gray-100 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        
        {/* Title Section */}
        <div className="flex flex-col items-center mb-10 md:mb-16 text-center relative z-10">
          <h2 className="relative text-2xl md:text-4xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            <div className="relative">
              <div className="absolute -top-13 -left-10 md:-top-12 md:-left-24 w-16 h-16 md:w-24 md:h-24 pointer-events-none drop-shadow-sm transform -rotate-12 z-20">
                <img src="/kids sun.png" className="w-full h-full object-contain" alt="cute sun" />
              </div>
              <span >Trendy & Colorful Designs</span>
            </div>
            <Sparkles className="text-yellow-400" size={28} />
          </h2>
          <p className="text-pink-500 font-bold tracking-[0.15em] uppercase mt-3 text-xs md:text-sm relative z-10">
             Dress them in joy & style
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group/trendy">
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-8 pt-4 px-2 md:px-4 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {trendyKidsData.map((item, i) => (
              <div 
                key={i} 
                className="snap-center shrink-0 w-[240px] md:w-[280px] h-[320px] md:h-[380px] flex flex-col group cursor-pointer relative"
              >
                
                   {/* Pink Bow decoration placed outside the overflowing boundary */}
                   <div className="absolute -top-5 -left-5 md:-top-4 md:-left-5 w-16 h-16 md:w-20 md:h-20 pointer-events-none z-40 opacity-100 transform -rotate-20 transition-transform duration-700 drop-shadow-lg">
                     <img src="/kids bow.png" alt="cute bow" className="w-full h-full object-contain" />
                   </div>
                <div className="relative w-full h-full overflow-hidden rounded-[24px] shadow-sm group-hover:shadow-xl transition-all duration-500 border-2 border-white ring-2 ring-transparent group-hover:ring-pink-200 z-10">
                   <img 
                     src={item.img} 
                     className="w-full h-full object-cover " 
                     alt={item.username} 
                   />

                   
                   {/* Cute Peek-a-boo Bear that slides in on hover from right */}
                   <div className="absolute -right-12 top-[55%] -translate-y-1/2 translate-x-12 md:translate-x-16 group-hover:-translate-x-2 transition-transform duration-500 w-16 h-20 md:w-35 md:h-35 pointer-events-none z-30 opacity-90 drop-shadow-md">
                     <img src="/kids teddy.png" alt="peeking bear" className="w-full h-full object-contain" />
                   </div>

                   {/* Cute Flying Bee that buzzes in on hover from top left */}
                   <div className="absolute -left-16 -top-16 translate-x-0 translate-y-0 group-hover:translate-x-25 md:top-50 md:-left-25 md:group-hover:-translate-y-25 transition-all duration-500 w-16 h-16 md:w-15 md:h-15 pointer-events-none z-30 opacity-90 drop-shadow-md transform rotate-60 group-hover:rotate-90">
                     <img src="/kids bee.png" alt="flying bee" className="w-full h-full object-contain" />
                   </div>

                   {/* Clean Dark Overlay on Hover */}
                   <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end h-1/2 ">
                      <div className="flex items-center justify-between mb-2 md:translate-y-0 md:group-hover:-translate-y-3 transition-all duration-700">
                        <span className="text-white text-sm md:text-base font-bold truncate">@{item.username}</span>
                       
                      </div>
                      <span className="text-white/90 text-xs truncate font-medium md:translate-y-0 md:group-hover:-translate-y-3 transition-all duration-700">{item.desc}</span>
                   </div>
                   
                   {/* Floating Likes Badge */}
                   <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_4px_10px_rgba(0,0,0,0.1)] transform transition-transform duration-300 group-hover:-translate-y-1 z-40">
                      <span className="text-rose-500 font-bold text-[11px]">❤️</span>
                      <span className="text-gray-800 font-black text-[11px] tracking-wide">{item.likes}</span>
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

export default KidsTrendyDesigns;
