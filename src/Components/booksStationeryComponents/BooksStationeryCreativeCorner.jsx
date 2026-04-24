import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Highlighter, Brush, Scissors } from 'lucide-react';

const CreativeCard = ({ title, img, icon: Icon, color, delay }) => (
  <div className="group relative w-full h-[250px] md:h-[250px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
    {/* Image background */}
    <img 
      src={img} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
    />
    
    {/* Dark Overlay with color tint on hover */}
    <div className={`absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-opacity-20`} />
    
    {/* Content */}
    <div className="absolute inset-0 p-6 flex flex-col justify-between items-start">
      <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
        <Icon className="text-white w-6 h-6" />
      </div>
      
      <div>
        <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2 tracking-tight">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          Unleash Creativity
          <div className="h-px w-6 bg-current" />
        </div>
      </div>
    </div>
  </div>
);

const BooksStationeryCreativeCorner = () => {
  const creativeCategories = [
    {
      id: 1,
      title: "Sketchbooks",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&fit=crop",
      icon: Palette,
      color: "bg-purple-600"
    },
    {
      id: 2,
      title: "Color Pens",
      img: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?q=80&w=600&fit=crop",
      icon: Highlighter,
      color: "bg-blue-600"
    },
    {
      id: 3,
      title: "Paints & Brushes",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&fit=crop",
      icon: Brush,
      color: "bg-rose-600"
    },
    {
      id: 4,
      title: "DIY Craft Kits",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&fit=crop",
      icon: Scissors,
      color: "bg-emerald-600"
    }
  ];

  return (
    <section className="container mx-auto px-4 md:px-10 py-10 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        <div className="lg:col-span-5">
          <span className="text-[#d33967] font-black text-xs md:text-xl uppercase tracking-wider font-georgia mb-4 block">
            The Creative Corner
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 leading-[0.9] tracking-tighter md:mb-4 ">
            Where Every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-600 italic">Idea Takes Shape</span>
          </h2>
          <p className="text-stone-500 text-base md:text-lg font-medium leading-relaxed max-w-md hidden md:block">
            Unleash your inner artist with our handpicked selection of premium sketchbooks, vibrant colors, and artisanal craft supplies.
          </p>
          
          <button className="mt-8 px-8 py-4 bg-[#5a3041] text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-purple-600 transition-colors shadow-xl hover:shadow-purple-200">
            Discover Your Craft
          </button>
        </div>
        
        <div className="lg:col-span-7 flex overflow-x-auto sm:grid sm:grid-cols-2 gap-4 md:gap-6 pb-6 sm:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
          {creativeCategories.map((cat, idx) => (
            <div key={cat.id} className={`flex-none w-[280px] sm:w-full snap-center ${idx % 2 !== 0 ? 'sm:mt-8' : ''}`}>
              <CreativeCard {...cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksStationeryCreativeCorner;
