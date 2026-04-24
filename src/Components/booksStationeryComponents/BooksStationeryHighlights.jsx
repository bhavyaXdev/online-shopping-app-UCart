import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const HighlightPoint = ({ text, icon: Icon, color }) => (
  <div className="relative flex-none w-[200px] md:w-full aspect-[1/1] md:aspect-[4/5] flex items-center justify-center md:px-15 px-10 group cursor-default snap-center">
    {/* Background Image Layer */}
    <img 
      src="/trustedImg2.png" 
      alt="Highlight Label" 
      className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
    />
    
    {/* Content Layer - Centered in the label area */}
    <div className="relative z-10 px-5 md:px-10 py-2 md:py-2 rounded-xl flex flex-col bg-[#fcc4cb]/90 items-center justify-center text-center pointer-events-none mt-2">
      <div className={`${color} mb-1 md:mb-2 transform group-hover:scale-110 transition-transform duration-500`}>
        <Icon className="w-5 h-5 md:w-7 md:h-7 opacity-80" />
      </div>
      <span className="text-[8px] md:text-[10px] lg:text-xs font-black text-[#5a3041] leading-[1.1] tracking-tight uppercase max-w-[100px] md:max-w-none">
        {text}
      </span>
    </div>
  </div>
);

const BooksStationeryHighlights = () => {
  const highlights = [
    { 
      id: 1, 
      text: "High-Quality Paper & Materials",
      icon: ShieldCheck,
      color: "text-blue-600"
    },
    { 
      id: 2, 
      text: "Affordable Prices for Everyone",
      icon: Zap,
      color: "text-amber-500"
    },
    { 
      id: 3, 
      text: "Perfect for Students & Pros",
      icon: CheckCircle2,
      color: "text-emerald-600"
    },
    { 
      id: 4, 
      text: "Wide Variety of Products",
      icon: Sparkles,
      color: "text-rose-500"
    }
  ];

  return (
    <section className="container mx-auto px-4 md:px-10 -mb-5 md:-my-20  md:mt-10   py-0 md:py-12 overflow-hidden">
      <div className="flex flex-col items-center mb-4 md:mb-8">
        <span className="text-[#d33967] font-black text-xs md:text-sm uppercase tracking-wider font-georgia mb-4">
          Trust & Value
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tighter text-center">
          Why Shop <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#d33967] to-[#5a3041]">With Us?</span>
        </h2>
      </div>

      {/* Responsive Layout: Carousel on Mobile, Grid on Desktop */}
      <div className="flex overflow-x-auto  md:grid md:grid-cols-4 gap-0 md:gap-4 pb-6 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
        {highlights.map((point) => (
          <HighlightPoint key={point.id} {...point} />
        ))}
      </div>
    </section>
  );
};

export default BooksStationeryHighlights;
