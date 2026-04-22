import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * CarouselScroller - A reusable horizontal scroller with navigation buttons.
 * 
 * Props:
 * @param {React.ReactNode} children - The content to scroll (a list of cards)
 * @param {string} title - Optional title for the section
 * @param {string} subtitle - Optional subtitle for the section
 * @param {string} viewAllLink - Optional link for "View All" button
 * @param {number} scrollAmount - Amount to scroll on click (default based on screen size)
 * @param {string} containerClass - Custom classes for the outer section
 * @param {string} innerClass - Custom classes for the scroller div
 * @param {React.ReactNode} icon - Optional icon for the title
 */
const CarouselScroller = ({ 
  children, 
  title, 
  subtitle, 
  viewAllLink, 
  scrollAmount, 
  containerClass = "",
  innerClass = "",
  icon
}) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = scrollAmount || (window.innerWidth >= 768 ? 600 : 300);
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -amount : amount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className={`container mx-auto px-4 md:px-10 py-8 md:py-12 ${containerClass}`}>
      {/* Header logic */}
      {(title || viewAllLink) && (
        <div className="flex justify-between items-center mb-6 md:mb-10">
          <div className="flex flex-col">
            <h2 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              {title}
              {icon && icon}
            </h2>
            {subtitle && (
              <p className="text-gray-500 text-[10px] md:text-sm font-medium mt-1">
                {subtitle}
              </p>
            )}
          </div>
          {viewAllLink && (
            <button className="text-[10px] md:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider bg-blue-50/50 hover:bg-blue-100 px-3 md:px-4 py-1.5 md:py-2 rounded-xl">
              View All
            </button>
          )}
        </div>
      )}

      {/* Scroller Engine */}
      <div className="relative group/scroller">
        <div 
          ref={scrollRef}
          className={`flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${innerClass}`}
        >
          {children}
        </div>

        {/* Navigation Arrows - Hidden on touch, shown on hover for desktop */}
        <button 
           onClick={() => scroll('left')}
           className="absolute left-[-15px] top-[40%] -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:text-blue-600 hover:scale-110 transition-all hidden md:flex opacity-0 group-hover/scroller:opacity-100 z-20"
           aria-label="Scroll Left"
        >
           <ChevronLeft size={24} strokeWidth={2.5} />
        </button>
        <button 
           onClick={() => scroll('right')}
           className="absolute right-[-15px] top-[40%] -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:text-blue-600 hover:scale-110 transition-all hidden md:flex opacity-0 group-hover/scroller:opacity-100 z-20"
           aria-label="Scroll Right"
        >
           <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
};

export default CarouselScroller;
