import React from 'react';
import { ArrowRight } from 'lucide-react';
import CarouselScroller from '../CarouselScroller';

const rituals = [
  { 
    id: 1, 
    title: "Glass Skin Ritual", 
    desc: "10-step Korean hydration",
    img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&fit=crop",
    colSpan: "md:col-span-8",
    color: "bg-blue-50"
  },
  { 
    id: 2, 
    title: "Morning Glow", 
    desc: "Antioxidant boost",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&fit=crop",
    colSpan: "md:col-span-4",
    color: "bg-orange-50"
  },
  { 
    id: 3, 
    title: "Midnight Repair", 
    desc: "Overnight recovery",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=800&fit=crop",
    colSpan: "md:col-span-4",
    color: "bg-purple-50"
  },
  { 
    id: 4, 
    title: "Sun Protection", 
    desc: "Mineral SPF defense",
    img: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=800&fit=crop",
    colSpan: "md:col-span-8",
    color: "bg-yellow-50"
  }
];

const HealthBeautyRituals = () => {
  return (
    <section className="container mx-auto px-4 md:px-10 py-8 md:py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-light text-stone-900 leading-tight">Your Daily <span className="italic font-serif">Wellness Rituals</span></h2>
          <p className="text-stone-500 mt-2 font-medium">Science-backed solutions for your home-spa experience.</p>
        </div>
        <button className="hidden md:flex items-center gap-3 text-white text-xs md:text-sm font-bold transition-all bg-stone-900 hover:bg-stone-800 px-5 py-2.5 rounded-full group shadow-md">
          Discover Rituals
          <span className="bg-white/10 rounded-full p-1 group-hover:bg-white/20 transition-colors">
            <ArrowRight size={16} />
          </span> 
        </button>
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden">
        <CarouselScroller containerClass="!p-0 !mx-0">
          {rituals.map((ritual) => (
            <div key={ritual.id} className="snap-start shrink-0 w-[280px] h-[350px] relative overflow-hidden rounded-[30px]">
              <img src={ritual.img} className="w-full h-full object-cover" alt={ritual.title} />
              <div className="absolute inset-0 bg-stone-900/20" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">{ritual.desc}</span>
                <h3 className="text-xl font-serif mt-1">{ritual.title}</h3>
              </div>
            </div>
          ))}
        </CarouselScroller>
      </div>

      {/* Desktop Masonry Grid View */}
      <div className="hidden md:grid grid-cols-12 gap-6 h-[450px]">
        {rituals.map((ritual) => (
          <div 
            key={ritual.id} 
            className={`${ritual.colSpan} relative group overflow-hidden rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-700`}
          >
            <img 
              src={ritual.img} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt={ritual.title} 
            />
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/40 transition-colors duration-500" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">{ritual.desc}</span>
              <h3 className="text-2xl md:text-3xl font-serif mt-1">{ritual.title}</h3>
              <div className="w-0 group-hover:w-16 h-0.5 bg-white mt-4 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthBeautyRituals;
