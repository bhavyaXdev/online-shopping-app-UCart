import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const FashionSlider = () => {
  const [activeIndex, setActiveIndex] = useState(10); // Start offset to allow infinite dragging back
  const [isHovered, setIsHovered] = useState(false);
  const [slideWidth, setSlideWidth] = useState(300);
  const containerRef = useRef(null);

  const editorialBanners = [
    {
      id: 1,
      preTitle: "SAY HI TO SUMMER!",
      title: "SUMMER'26",
      subTitle: "COLLECTION",
      tagline: "Special Sale",
      offer: "MIN. 50% OFF | LIMITED OFFERS",
      img: "https://i.pinimg.com/1200x/68/c5/d8/68c5d8a6313fda6066d51c017eea70ef.jpg",
      imagePosition: "object-top",
      textPositionClass: "justify-end pb-8 md:pb-12 text-center items-center",
      innerAlignClass: "items-center",
      dividerClass: "mx-auto",
      textDark: true, 
    },
    {
      id: 2,
      preTitle: "",
      title: "Elegance in tradition",
      subTitle: "",
      tagline: "",
      offer: "UP TO 40% OFF | NEW SEASON",
      img: "../public/ethic.jpg",
      imagePosition: "object-bottom",
      decorationImg: "https://i.pinimg.com/736x/aa/7b/a6/aa7ba60dcb48761d2400ac48d5f2d6fb.jpg",
      decorationClass: "mix-blend-multiply opacity-50 w-36 h-36 md:w-80 md:h-80 top-0 right-0 md:top-12 md:-right-23 z-10",
      stickerImg: "https://i.pinimg.com/736x/20/d8/40/20d840acd975af92ac6942a27010ed7b.jpg",
      stickerClass: "bg-white p-1 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.6)] w-24 h-24 md:w-32 md:h-32 top-4 left-4 md:top-8 md:left-8 rotate-[5deg] z-30",
      stickerImg2: "https://i.pinimg.com/736x/ba/45/db/ba45db3b7ee6f801c638b83139549218.jpg",
      stickerClass2: "bg-white p-1 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.6)] w-15 h-15 md:w-20 md:h-20 bottom-[5%] left-10 md:bottom-[10%] md:left-30 rotate-[-12deg] z-30",
      hasDarkOverlay: true,
      textPositionClass: "justify-center pr-4 md:pr-10 text-right items-end",
      innerAlignClass: "items-end",
      dividerClass: "ml-auto",
      textDark: false, 
    },
    {
      id: 3,
      preTitle: "",
      title: "CLASSIC & REFINED",
      subTitle: "COLLECTION",
      tagline: "Sharp Essentials",
      offer: "UP TO 50% OFF | PREMIUM MENSWEAR",
      img: "https://i.pinimg.com/736x/da/8e/7b/da8e7bf98fc5983a6580dcf890ac877a.jpg",
      imagePosition: "object-top",
      textPositionClass: "justify-end pb-12 pl-6 md:pb-16 md:pl-10 text-left items-start",
      innerAlignClass: "items-start",
      dividerClass: "ml-0",
      textDark: false,
    },
    {
      id: 4,
      preTitle: "STEP INTO STYLE",
      title: "EXCLUSIVE FOOTWEAR",
      subTitle: "",
      tagline: "Premium Kicks",
      offer: "FLAT 25% OFF | NEW DROPS",
      img: "https://i.pinimg.com/736x/69/09/07/690907fb82cacd6c9ff81cb4ee0bfe3f.jpg",
      imagePosition: "object-center",
      textPositionClass: "justify-start pt-10 pr-6 md:pt-16 md:pr-10 text-right items-end",
      innerAlignClass: "items-end",
      dividerClass: "mr-0",
      textDark: true,
    },
    {
      id: 5,
      preTitle: "",
      title: "Your perfect gown awaits.",
      subTitle: "",
      tagline: "",
      offer: "UP TO 30% OFF | PREMIUM GEAR",
      img: "https://i.pinimg.com/1200x/8e/92/da/8e92daee5a40e5bf6cd11edba51caa27.jpg",
      imagePosition: "object-center",
      textPositionClass: "justify-start pt-16 pl-6 md:pt-24 md:pl-12 text-left items-start",
      innerAlignClass: "items-start",
      dividerClass: "ml-0",
      textDark: false,
    }
  ];

  // Infinite Look Mechanism: replicate items 30 times
  const repeatedBanners = Array.from({ length: 30 }).flatMap((_, i) =>
    editorialBanners.map(b => ({ ...b, uniqueId: `${i}-${b.id}` }))
  );

  // Dynamically calculate explicit slide widths (ignores scrollbar mismatch)
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const cw = containerRef.current.clientWidth;
        if (window.innerWidth >= 1024) {
          setSlideWidth((cw - 32) / 2.4); // Peek the third slide (2.4 items)
        } else if (window.innerWidth >= 768) {
          setSlideWidth((cw - 16) / 2); // Exactly 2 slides
        } else {
          setSlideWidth(cw); // Exactly 1 slide
        }
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Frame Auto-scroll logic
  useEffect(() => {
    if (isHovered || slideWidth === 0) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, slideWidth]);

  const handleDragEnd = (_, { offset, velocity }) => {
    const swipePower = Math.abs(offset.x) * velocity.x;
    if (offset.x < -30 || swipePower < -400) {
      setActiveIndex(prev => prev + 1);
    } else if (offset.x > 30 || swipePower > 400) {
      setActiveIndex(prev => prev - 1);
    }
  };

  const scrollToSlide = (index) => {
    // Determine the base offset of the current repeated chunk
    const remainder = activeIndex % editorialBanners.length;
    const base = activeIndex - remainder;
    setActiveIndex(base + index);
  };

  const currentOriginalIndex = activeIndex % editorialBanners.length;

  return (
    <section className="container mx-auto px-4 md:px-10 py-6 md:py-10 overflow-hidden">
      {/* Concise Framer Motion Infinite Slider Container */}
      <div 
        ref={containerRef}
        className="relative pb-2 overflow-hidden mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          drag="x"
          dragConstraints={{ left: -((slideWidth + 16) * (repeatedBanners.length - 3)), right: 0 }}
          animate={{ x: -(activeIndex * (slideWidth + 16)) }}
          transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
          onDragEnd={handleDragEnd}
          className="flex gap-4 cursor-grab active:cursor-grabbing w-max"
        >
          {repeatedBanners.map((banner) => (
            <div 
              key={banner.uniqueId}
              style={{ width: slideWidth }}
              className="flex-none relative h-[200px] md:h-[240px] lg:h-[260px] rounded-xl overflow-hidden shadow-md border-white group"
            >
              <img 
                src={banner.img} 
                draggable="false"
                className={`w-full h-full object-cover ${banner.imagePosition || 'object-center'} transition-transform duration-700 select-none`} 
                alt={banner.title} 
              />
              
              {banner.decorationImg && (
                <img src={banner.decorationImg} draggable="false" className={`absolute pointer-events-none object-contain transition-all duration-[1200ms] group-hover:scale-110 ${banner.decorationClass}`} alt="Decoration" />
              )}
              {banner.stickerImg && (
                <img src={banner.stickerImg} draggable="false" className={`absolute pointer-events-none object-cover object-center transition-all duration-1000 group-hover:scale-125 group-hover:rotate-[-10deg] ${banner.stickerClass}`} alt="Sticker" />
              )}
              {banner.stickerImg2 && (
                <img src={banner.stickerImg2} draggable="false" className={`absolute pointer-events-none object-cover object-center transition-all duration-[800ms] group-hover:scale-110 group-hover:rotate-[5deg] ${banner.stickerClass2}`} alt="Sticker 2" />
              )}

              <div className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t ${banner.textDark ? 'from-white/30' : 'from-black/40'} via-black/5 to-transparent pointer-events-none`} />
              
              {banner.hasDarkOverlay && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none z-[35]" />
              )}

              <div className="absolute top-4 right-4 z-50 pointer-events-none transition-transform duration-500 hover:scale-105">
                 <img src="/HotSummerSale.png" alt="Hot Summer Sale" className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-md" />
              </div>

              {banner.id === 1 ? (
                <div className={`absolute inset-0 flex flex-col pointer-events-none px-4 z-40 ${banner.textPositionClass}`}>
                   <div className="flex flex-col items-center justify-center transition-all duration-700 ease-out transform translate-y-0 opacity-100">
                     <div className="space-y-1 mb-2 text-center">
                        <span className={`${banner.textDark ? 'text-neutral-800' : 'text-white'} text-[10px] md:text-[10px] font-black tracking-[3px] mb-3 block opacity-90 drop-shadow-md`}>
                          {banner.preTitle}
                        </span>
                        <h1 className={`text-2xl md:text-2xl lg:text-4xl tracking-wide font-bold ${banner.textDark ? 'text-gray-900' : 'text-white'} leading-tight drop-shadow-md font-georgia`}>
                           {banner.title} <br className="md:hidden" /> <span className="tracking-widest">{banner.subTitle}</span>
                        </h1>
                     </div>
                     <div className={`mt-1 md:mt-4 flex flex-col items-center gap-2`}>
                        <p className={`${banner.textDark ? 'text-neutral-900/80' : 'text-white/80'} text-[8px] md:text-xs lg:text-sm font-bold tracking-[0.2em] uppercase drop-shadow-md`}>
                          {banner.tagline}
                        </p>
                        <div className={`h-[1px] w-20 ${banner.textDark ? 'bg-orange-500/50' : 'bg-white/50'} mx-auto`} />
                        <p className={`${banner.textDark ? 'text-orange-600' : 'text-white'} text-xs md:text-xs lg:text-sm font-black tracking-widest uppercase drop-shadow-lg`}>
                           {banner.offer}
                        </p>
                     </div>
                   </div>
                </div>
              ) : (
                <>
                  <div className="absolute inset-x-0 top-0 flex items-start justify-start pointer-events-none px-4 md:px-6 pt-4 md:pt-6 z-40">
                     <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm shadow-md rounded flex items-center text-[10px] lg:text-xs tracking-[0.25em] uppercase border border-gray-100">
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">URBAN</span>
                        <span className="font-black ml-1 text-gray-900">CART</span>
                     </span>
                  </div>

                  <div className="absolute inset-0 flex flex-col pointer-events-none px-4 z-40 justify-center items-center text-center">
                     <div className="flex flex-col items-center justify-center transition-all duration-700 ease-out transform translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                         <div className="text-center">
                            {banner.preTitle && (
                              <span className={`hidden md:block ${banner.textDark ? 'text-neutral-800' : 'text-white'} text-[8px] md:text-[10px] font-light tracking-[0.2em] uppercase opacity-90 mb-2`}>
                                {banner.preTitle}
                              </span>
                            )}
                            {(banner.title || banner.subTitle) && (
                              <h1 className={`text-xl md:text-xl lg:text-2xl font-bold ${banner.textDark ? 'text-gray-900' : 'text-white'} leading-tight drop-shadow-md font-georgia px-2`}>
                                 {banner.title && <span className="tracking-wide">{banner.title}</span>}
                                 {banner.title && banner.subTitle && <br className="hidden md:block" />}
                                 {banner.subTitle && <span className="tracking-wide">{banner.subTitle}</span>}
                              </h1>
                            )}
                            <div className={`hidden md:block h-[1px] w-8 mx-auto mt-3 mb-2 ${banner.textDark ? 'bg-gray-900/50' : 'bg-white/50'} transition-all duration-1000 delay-100 scale-x-0 group-hover:scale-x-100`} />
                            
                            {banner.tagline && (
                              <p className={`hidden md:block mt-1 ${banner.textDark ? 'text-neutral-800' : 'text-white/80'} text-[8px] md:text-[10px] font-medium tracking-[0.2em] uppercase`}>
                                {banner.tagline}
                              </p>
                            )}
                            <span className={`hidden md:inline-block mt-4 text-[7px] md:text-[9px] font-bold tracking-[0.25em] border-b pb-0.5 border-transparent uppercase transition-all duration-500 delay-200 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-current ${banner.textDark ? 'text-gray-900' : 'text-white'}`}>
                               Discover Collection
                            </span>
                         </div>
                     </div>
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col pointer-events-none px-6 md:px-10 z-40 justify-end items-start pb-6 md:pb-5">
                     <div className="flex flex-col items-start gap-2">
                        <p className={`${banner.textDark ? 'text-orange-600' : 'text-white'} text-[8px] md:text-[10px] font-bold tracking-[0.15em] uppercase drop-shadow-lg`}>
                           {banner.offer}
                        </p>
                     </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Pagination Dots mapped to current frame index */}
      <div className="flex flex-col items-center mt-6">
        <div className="flex gap-1.5">
          {editorialBanners.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentOriginalIndex ? "w-6 bg-blue-600" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <span className="text-[10px] uppercase font-black tracking-[0.3em] flex items-center gap-2 opacity-40 md:hidden mt-4">
          Swipe to Explore
        </span>
      </div>

    </section>
  );
};

export default FashionSlider;
