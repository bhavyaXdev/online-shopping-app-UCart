import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBasket } from "lucide-react";
import { useSelector } from "react-redux";

const BannerSlider = () => {
  const slides = useSelector((state) => state.home.banners);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [direction, setDirection] = useState(0);
  const isDragging = useRef(false);

  // Hook to handle responsive item counts
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = window.innerWidth >= 1024 ? 2 : 1;
      setItemsPerView((prev) => {
        if (prev !== newItemsPerView) {
          setCurrentIndex(0); // Reset index to prevent out-of-bounds empty arrays
        }
        return newItemsPerView;
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalGroups = Math.ceil(slides.length / itemsPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, itemsPerView, totalGroups]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Determine which slides to show based on the current index and viewport
  const visibleSlides = [];
  for (let i = 0; i < itemsPerView; i++) {
    if (slides[currentIndex * itemsPerView + i]) {
      visibleSlides.push(slides[currentIndex * itemsPerView + i]);
    }
  }

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  // Framer Motion Variants for smooth horizontal sliding
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.1 }
      }
    }),
  };

  return (
    <section className="w-full bg-white pt-4 pb-2 md:pt-6 md:pb-4 overflow-hidden">
      <div className="container mx-auto px-2 md:px-3 lg:px-4 py-3 relative group">

        {/* Slider Container */}
        <div className="relative h-[200px] sm:h-[280px] md:h-[340px] lg:h-[300px] xl:h-[360px] w-full flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragStart={() => {
                isDragging.current = true;
              }}
              onDragEnd={(e, { offset, velocity }) => {
                setTimeout(() => {
                  isDragging.current = false;
                }, 100);

                const swipeDistance = offset.x;
                const swipeVelocity = velocity.x;

                // Make sliding extremely responsive by checking both absolute distance dragged or velocity
                if (swipeDistance < -50 || swipeVelocity < -500) {
                  nextSlide();
                } else if (swipeDistance > 50 || swipeVelocity > 500) {
                  prevSlide();
                }
              }}
              whileTap={{ scale: 0.99 }}
              className={`absolute top-0 left-0 w-full h-full flex  cursor-pointer ${itemsPerView > 1 ? 'gap-3 md:gap-4 px-2 md:px-0' : ''}`}
            >
              {visibleSlides.map((slide, i) => (
                <div
                  onClick={(e) => {
                    if (!isDragging.current) {
                      navigate(slide.link);
                    } else {
                      e.preventDefault();
                    }
                  }}
                  key={slide.id}
                  className={`relative flex-1 h-full rounded-2xl md:rounded-xl overflow-hidden ${itemsPerView === 1 ? 'mx-2' : ''} ${slide.bgColor} border-white/10 group`}
                >
                  {/* Background Image / Gradient Overlay */}
                  <div className="absolute top-0 right-0 h-full z-0 overflow-hidden    duration-500 pointer-events-none ">
                    <div className="absolute inset-0  z-10 rounded-xl  " />
                    <img src={slide.imgSrc} alt={slide.product} className="w-full h-full object-cover object-right rounded-xl select-none pointer-events-none" draggable="false" />
                  </div>

                  {/* Gradient mask for text readability */}
                  <div className={`absolute inset-0 z-0 bg-gradient-to-r ${slide.gradientMask} to-transparent w-2/3 pointer-events-none`}></div>

                  <div className="relative z-20 w-full h-full p-4 md:p-5 lg:p-6 flex flex-col justify-between pointer-events-none">
                    {/* Top Section */}
                    <div className="flex justify-between items-start w-full">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        {slide.brandBadge ? (
                          <span className={`${slide.brandBadge} shadow-sm !text-[8px] md:!text-[10px]`}>{slide.brandText}</span>
                        ) : (
                          <span className="font-outfit font-bold text-base lg:text-lg tracking-wider text-white drop-shadow-sm">
                            {slide.brandText}
                          </span>
                        )}
                        {slide.brandDetails && (
                          <span className="text-gray-300 text-[9px] md:text-[10px] xl:text-[11px] font-medium uppercase mt-0.5">
                            {slide.brandDetails}
                          </span>
                        )}
                      </div>

                      {/* Big Sale & UrbanCart Logo */}
                      <div className="text-right pointer-events-none transform group-hover:scale-105 transition-transform origin-top-right flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <div className="bg-gradient-to-br from-brand-primary to-blue-600 p-1 rounded-lg shadow-lg shadow-brand-primary/20">
                            <ShoppingBasket
                              className="text-white"
                              size={15}
                              strokeWidth={1}
                            />
                          </div>
                          <h1 className="text-xl md:text-[14px] font-black  text-white flex items-baseline drop-shadow-md">
                            Urban<span className="text-brand-primary">Cart</span>
                            <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-brand-primary rounded-full ml-0.5 mb-0.5 md:mb-1"></div>
                          </h1>
                        </div>
                        <div className="w-[1.5px] h-8 bg-white/20 mx-1"></div>
                        <span className="text-lg md:text-xl xl:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] leading-tight">
                          BIG SALE
                        </span>
                      </div>
                    </div>

                    {/* Middle Content Section */}
                    <div className={`mt-auto mb-1 md:mb-2 ${slide.textColor}`}>
                      <h3 className="text-lg md:text-xl xl:text-2xl font-bold leading-tight drop-shadow-md line-clamp-1">
                        {slide.product}
                      </h3>
                      <div className="text-base md:text-lg xl:text-xl font-extrabold mt-0.5 md:mt-1 mb-0.5 md:mb-1 drop-shadow-md">
                        From {slide.price}<span className="text-sm font-normal">*</span>
                      </div>
                      <p className="text-[10px] md:text-xs xl:text-sm text-gray-200 font-medium max-w-[85%] md:max-w-[75%] line-clamp-1">
                        {slide.subText}
                      </p>
                    </div>

                    {/* Bank Offer Details */}
                    {slide.bankOffer && (
                      <div className="mt-1 md:mt-2 bg-white/95 backdrop-blur-md text-black px-1.5 py-1 md:px-2 md:py-1.5 flex items-center rounded-md md:rounded-lg gap-1.5 md:gap-2 shadow-sm max-w-max border border-gray-100/50">
                        <div className="bg-red-600 text-white font-bold p-0.5 md:p-1 rounded text-[8px] md:text-[9px] leading-tight flex items-center pr-1 md:pr-1.5 shadow-sm">
                          <div className="bg-[#003A79] rounded-full w-[10px] h-[10px] md:w-[12px] md:h-[12px] flex justify-center items-center mr-0.5 md:mr-1">
                            <span className="text-white text-[7px] md:text-[8px] font-bold translate-y-[0.5px]">k</span>
                          </div>
                          kotak
                        </div>
                        <div className="text-[7px] md:text-[8px] xl:text-[9px] leading-[1.15]">
                          <span className="font-bold block text-gray-800">10% Instant Discount</span>
                          <span className="text-gray-500">on Credit Card Transactions*</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>


      </div>

      {/* Progress Pill Indicators */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[6px] rounded-full transition-all duration-300 ${currentIndex === index
              ? "w-6 bg-gray-800"
              : "w-2 bg-gray-400 hover:bg-gray-300"
              }`}
            aria-label={`Go to slide group ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;
