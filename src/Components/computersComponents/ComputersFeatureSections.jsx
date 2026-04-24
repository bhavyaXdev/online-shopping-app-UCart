import React from 'react';
import { Cpu, Gamepad2, Monitor, Briefcase, Star } from 'lucide-react';
import CarouselScroller from '../CarouselScroller';

const featureSections = [
  { id: 1, title: "Gaming Laptops", tagline: "Unleash Ultimate Power", icon: Gamepad2, image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&fit=crop", feature: "RTX 40 Series", rating: "4.9", reviews: "2.1k" },
  { id: 2, title: "Creator PCs", tagline: "Render Without Limits", icon: Cpu, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&fit=crop", feature: "Multi-Core CPUs", rating: "4.7", reviews: "856" },
  { id: 3, title: "Productivity", tagline: "Work From Anywhere", icon: Briefcase, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&fit=crop", feature: "Ultra-Lightweight", rating: "4.8", reviews: "1.2k" },
  { id: 4, title: "Productivity", tagline: "Work From Anywhere", icon: Briefcase, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&fit=crop", feature: "Ultra-Lightweight", rating: "4.6", reviews: "450" },
  { id: 5, title: "Productivity", tagline: "Work From Anywhere", icon: Briefcase, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&fit=crop", feature: "Ultra-Lightweight", rating: "4.5", reviews: "320" },
  { id: 6, title: "Ultrawide Displays", tagline: "Immersive Visulas", icon: Monitor, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&fit=crop", feature: "Curved Panels", rating: "4.9", reviews: "3.4k" }
];

const ComputersFeatureSections = () => {
  return (
    <CarouselScroller 
      title="Find Your Perfect Match"
      subtitle="Explore devices based on what matters most to you"
      innerClass="!overflow-y-visible pt-1 px-4 md:px-0"
      containerClass="!py-8 md:!py-16"
    >
      {featureSections.map((section, index) => (
        <div 
          key={index}
          className="group flex flex-col items-center shrink-0 snap-start cursor-pointer w-[200px] md:w-[220px]"
        >
          {/* Soft Rounded Image Box */}
          <div className="relative w-full h-[200px] md:h-[240px] rounded-[14px] shadow-sm group-hover:shadow-md transition-shadow duration-300 bg-gray-50 overflow-hidden">
            <img 
              src={section.image} 
              alt={section.title}
              className="w-full h-full object-cover rounded-[14px] group-hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Top-Left Feature Badge */}
            <div className="absolute top-3 left-3 bg-yellow-400 text-black text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded shadow-sm uppercase tracking-wider z-10">
              {section.feature}
            </div>
            
            {/* Bottom-Left Reviews Badge */}
            <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-sm flex items-center shadow-sm z-10">
              <span className="text-gray-900 text-[9px] font-black mr-0.5">{section.rating}</span>
              <Star size={10} className="text-yellow-500 fill-yellow-500" />
              <div className="w-[1px] h-2.5 bg-gray-300 mx-1"></div>
              <span className="text-gray-500 text-[9px] font-bold">({section.reviews})</span>
            </div>
          </div>

          {/* Title Block Below */}
          <h3 className="mt-5 text-lg md:text-lg font-bold text-[#1a202c] tracking-tight">
            {section.title}
          </h3>

          {/* Offer Pill */}
          <div className="mt-1 px-4 md:px-3 py-0 bg-[#fff8eb] border border-[#ffedd5] rounded-full">
            <span className="text-[#334155] font-bold text-[8px] md:text-[10px]">
              Up to 70% Off
            </span>
          </div>
        </div>
      ))}
    </CarouselScroller>
  );
};

export default ComputersFeatureSections;
