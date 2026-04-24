import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SliderDots from './Common/SliderDots';

/**
 * InteractiveHeroSlider - A reusable high-performance slider for hero sections.
 * 
 * Props:
 * @param {Array} slides - Array of slide objects { id, img, title, subtitle, tagline, offer, ... }
 * @param {number} mobileHeight - Height on mobile (default 200px)
 * @param {number} tabletHeight - Height on tablet (default 240px)
 * @param {number} desktopHeight - Height on desktop (default 260px)
 * @param {string} containerClass - Custom classes for the section
 */
const InteractiveHeroSlider = ({ 
  slides, 
  mobileHeight = "h-[200px]", 
  tabletHeight = "md:h-[240px]", 
  desktopHeight = "lg:h-[260px]",
  containerClass = "",
  autoPlayInterval = 5000
}) => {
  const [activeIndex, setActiveIndex] = useState(slides.length);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Triple the items for infinite-like scrolling logic
  const repeatedSlides = [...slides, ...slides, ...slides];

  // Auto-play Logic
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setActiveIndex(prev => prev + 1);
      }, autoPlayInterval);
    }
    return () => clearInterval(interval);
  }, [isHovered, autoPlayInterval]);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const cw = containerRef.current.offsetWidth;
        if (window.innerWidth < 768) {
          setSlideWidth(cw);
        } else if (window.innerWidth < 1024) {
          setSlideWidth((cw - 16) / 2);
        } else {
          setSlideWidth((cw - 32) / 2.4);
        }
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      setActiveIndex(prev => prev + 1);
    } else if (info.offset.x > threshold) {
      setActiveIndex(prev => prev - 1);
    }
  };

  const [isJumping, setIsJumping] = useState(false);

  // Reset to middle set for infinite loop feel
  useEffect(() => {
    let timeout;
    if (activeIndex >= slides.length * 2) {
      timeout = setTimeout(() => {
        setIsJumping(true);
        setActiveIndex(slides.length);
        setTimeout(() => setIsJumping(false), 50);
      }, 400);
    } else if (activeIndex < slides.length) {
      timeout = setTimeout(() => {
        setIsJumping(true);
        setActiveIndex(slides.length * 2 - 1);
        setTimeout(() => setIsJumping(false), 50);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [activeIndex, slides.length]);

  return (
    <section className={`container mx-auto px-4 md:px-10 py-6 md:py-10 overflow-hidden ${containerClass}`}>
      <div 
        ref={containerRef}
        className="relative pb-2 overflow-hidden mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          drag="x"
          dragConstraints={{ left: -((slideWidth + 16) * (repeatedSlides.length - 3)), right: 0 }}
          animate={{ x: -(activeIndex * (slideWidth + 16)) }}
          transition={isJumping ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
          onDragEnd={handleDragEnd}
          className="flex gap-4 cursor-grab active:cursor-grabbing w-max"
        >
          {repeatedSlides.map((slide, i) => (
            <div 
              key={`${slide.id}-${i}`}
              style={{ width: slideWidth }}
              className={`flex-none relative ${mobileHeight} ${tabletHeight} ${desktopHeight} rounded-xl md:rounded-2xl overflow-hidden shadow-lg group`}
            >
              <img 
                src={slide.img} 
                draggable="false"
                className={`w-full h-full object-cover select-none`} 
                alt={slide.title} 
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              
              <div className={`absolute inset-0 p-6 md:p-10 flex flex-col ${slide.textPositionClass || 'justify-center'}`}>
                
                {/* Branding Logo Overlay if exists */}
                {slide.hasBranding && (
                    <div className="absolute top-2 left-2 md:top-4 md:left-4 z-50">
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm shadow-md rounded flex items-center text-[10px] lg:text-xs tracking-[0.25em] uppercase border border-gray-100">
                            <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-rose-500">URBAN</span>
                            <span className="font-black ml-1 text-gray-900">CART</span>
                        </span>
                    </div>
                )}

                <div className={`flex flex-col ${slide.innerAlignClass || 'items-start'} max-w-[80%] z-40 relative`}>
                    {slide.tagline || slide.preTitle ? (
                        <span className={`text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-2 block drop-shadow-md ${slide.textDark ? 'text-gray-900' : 'text-white/90'}`}>
                            {slide.tagline || slide.preTitle}
                        </span>
                    ) : null}
                    
                    <h2 className={`text-xl md:text-3xl lg:text-4xl font-black leading-[1.1] mb-3 drop-shadow-xl uppercase ${slide.textDark ? 'text-gray-900' : 'text-white'} ${slide.titleClass || 'italic tracking-tighter'}`}>
                        {slide.title} 
                        {slide.subTitle && <><br className="hidden md:block" /> {slide.subTitle}</>}
                    </h2>

                    {slide.offer && (
                        <div className={`inline-block text-[10px] md:text-xs font-black px-3 py-1 rounded-full shadow-xl ${slide.textDark ? 'bg-orange-600 text-white' : 'bg-white text-black'}`}>
                            {slide.offer}
                        </div>
                    )}

                    {/* Optional Divider */}
                    {slide.hasDivider && (
                        <div className={`h-[1px] w-12 md:w-20 mt-4 ${slide.textDark ? 'bg-black/20' : 'bg-white/30'} ${slide.dividerClass || ''}`} />
                    )}

                    {/* Call to action text for fashion sliders */}
                    {slide.showAction && (
                       <span className={`mt-4 inline-block text-[7px] md:text-[9px] font-black tracking-[0.25em] border-b pb-0.5 border-current uppercase transition-all duration-500 ${slide.textDark ? 'text-gray-900' : 'text-white'}`}>
                          Discover Collection
                       </span>
                    )}
                </div>

                {/* Stickers / Decoration Layers */}
                {slide.decorationImg && (
                    <img src={slide.decorationImg} className={`absolute pointer-events-none object-contain transition-all duration-[1200ms] group-hover:scale-110 ${slide.decorationClass}`} alt="" />
                )}
                {slide.stickerImg && (
                    <img src={slide.stickerImg} className={`absolute pointer-events-none object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-[-10deg] ${slide.stickerClass}`} alt="" />
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <div className={`absolute inset-y-0 left-0 hidden md:flex items-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => setActiveIndex(prev => prev - 1)}
            className="ml-4 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-black shadow-2xl hover:bg-white hover:scale-110 transition-all z-20"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className={`absolute inset-y-0 right-0 hidden md:flex items-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => setActiveIndex(prev => prev + 1)}
            className="mr-4 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-black shadow-2xl hover:bg-white hover:scale-110 transition-all z-20"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Indicators / Dots */}
      <SliderDots 
        count={slides.length}
        activeIndex={activeIndex % slides.length}
        onDotClick={(idx) => setActiveIndex(slides.length + idx)}
        className="mt-6"
      />
    </section>
  );
};

export default InteractiveHeroSlider;
