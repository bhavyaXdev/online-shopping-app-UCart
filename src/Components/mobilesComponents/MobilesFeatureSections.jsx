import React from 'react';
import { Camera, Gamepad2, Battery, Zap, ChevronRight } from 'lucide-react';

const featureSections = [
  {
    id: 1,
    title: "Best Camera Phones",
    tagline: "Pro Photography in your pocket",
    icon: Camera,
    // color: "from-purple-600 to-indigo-700",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&fit=crop",
    feature: "Up to 200MP Lens",
  },
  {
    id: 2,
    title: "Gaming Performance",
    tagline: "Unleash the Gamer inside",
    icon: Gamepad2,
    // color: "from-blue-600 to-cyan-500",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&fit=crop",
    feature: "Snapdragon 8 Gen 3",
  },
  {
    id: 3,
    title: "Long Battery Life",
    tagline: "Stay Charged All Day",
    icon: Battery,
    // color: "from-emerald-600 to-teal-500",
    image: "https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=800&fit=crop",
    feature: "5000mAh+ Capacity",
  },
  {
    id: 4,
    title: "Fast Charging",
    tagline: "Full Power in Minutes",
    icon: Zap,
    // color: "from-orange-500 to-amber-600",
    image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=800&fit=crop",
    feature: "Up to 120W Charging",
  }
];

const MobilesFeatureSections = () => {
  return (
    <section className="container mx-auto px-4 md:px-10 py-8 md:py-16">
      <div className="flex flex-col mb-8 md:mb-10">
        <h2 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight">
          Find Your Perfect Match
        </h2>
        <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">
          Explore mobile devices based on what matters most to you
        </p>
      </div>

      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-6 md:pb-0 snap-x-5 snap-mandatory -mx-4 px-5 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {featureSections.map((section) => (
          <div 
            key={section.id}
            className="group relative h-[320px] md:h-[350px] w-[260px] md:w-auto shrink-0 snap-start rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Background Image */}
            <img 
              src={section.image} 
              alt={section.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${section.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-6 transform md:group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center mb-3 md:mb-4 text-white shadow-inner">
                  <section.icon size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-lg md:text-xl font-black text-white leading-tight mb-0.5 md:mb-1">
                  {section.title}
                </h3>
                <p className="text-white/80 text-[11px] md:text-sm font-medium mb-3 md:mb-4">
                  {section.tagline}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                   <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                     {section.feature}
                   </span>
                   <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-black flex items-center justify-center translate-x-4 opacity-100 md:opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-500">
                     <ChevronRight size={18} strokeWidth={3} />
                   </div>
                </div>
              </div>
            </div>
            
            {/* Top Badge */}
            <div className="absolute top-5 right-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
               <span className="bg-white/90 backdrop-blur-sm text-black text-[9px] md:text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                 Explore
               </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobilesFeatureSections;
