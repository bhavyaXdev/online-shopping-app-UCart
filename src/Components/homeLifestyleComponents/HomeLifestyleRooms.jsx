import React from 'react';
import { ArrowRight } from 'lucide-react';
import CarouselScroller from '../CarouselScroller';

const rooms = [
  { 
    id: 1, 
    name: "Living Room", 
    size: "large", 
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&fit=crop",
    tagline: "The heart of home"
  },
  { 
    id: 2, 
    name: "Bedroom", 
    size: "small", 
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800&fit=crop",
    tagline: "Dreamy comfort"
  },
  { 
    id: 3, 
    name: "Kitchen", 
    size: "small", 
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&fit=crop",
    tagline: "Master chef style"
  },
  { 
    id: 4, 
    name: "Home Office", 
    size: "medium", 
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&fit=crop",
    tagline: "Modern workspaces"
  }
];

const HomeLifestyleRooms = () => {
  return (
    <section className="container mx-auto px-4 md:px-10 py-10 md:py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">Shop by Room</h2>
          <p className="text-gray-500 mt-2 font-medium">Curated collections for every corner of your home.</p>
        </div>
        <button className="hidden md:flex items-center gap-3 text-white text-xs md:text-sm font-bold transition-all bg-black hover:bg-stone-800 px-5 py-2.5 rounded-full group shadow-lg">
          View All Rooms
          <span className="bg-white/10 rounded-full p-1 group-hover:bg-white/20 transition-colors">
            <ArrowRight size={16} />
          </span>
        </button>
      </div>

      {/* Mobile Swipeable View */}
      <div className="md:hidden">
        <CarouselScroller containerClass="!p-0 !mx-0">
          {rooms.map((room) => (
            <div key={room.id} className="snap-start shrink-0 w-[280px] h-[350px] relative overflow-hidden rounded-[30px]">
              <img src={room.image} className="w-full h-full object-cover" alt={room.name} />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 text-white text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">{room.tagline}</span>
                <h3 className="text-xl font-serif mt-1">{room.name}</h3>
              </div>
            </div>
          ))}
        </CarouselScroller>
      </div>

      {/* Desktop Feature Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* Living Room - Large */}
        <div className="md:col-span-7 relative group overflow-hidden rounded-[40px] h-[300px] md:h-[400px]">
          <img src={rooms[0].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">{rooms[0].tagline}</span>
            <h3 className="text-3xl md:text-4xl font-serif mt-1">{rooms[0].name}</h3>
          </div>
        </div>

        <div className="md:col-span-5 grid grid-rows-2 gap-4 md:gap-6 h-auto md:h-[400px]">
          {/* Bedroom & Kitchen (Smaller) */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="relative group overflow-hidden rounded-[30px]">
              <img src={rooms[1].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">{rooms[1].name}</h4>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-[30px]">
              <img src={rooms[2].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">{rooms[2].name}</h4>
              </div>
            </div>
          </div>

          {/* Home Office - Medium */}
          <div className="relative group overflow-hidden rounded-[30px]">
            <img src={rooms[3].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">{rooms[3].tagline}</span>
              <h3 className="text-2xl font-bold mt-1">{rooms[3].name}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLifestyleRooms;
