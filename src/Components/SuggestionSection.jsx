import React, { useState, useEffect, useRef } from "react";
import { Star, ShoppingCart, Heart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const SuggestionSection = () => {
  const products = useSelector((state) => state.home.recommendedProducts);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [direction, setDirection] = useState(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      let ipv = 1;
      if (window.innerWidth >= 1024) {
        ipv = 4; // Desktop
      } else if (window.innerWidth >= 768) {
        ipv = 3; // Tablet: 3 items visible
      } else {
        ipv = 2; // Mobile: 2 items grid (from previous user turn)
      }
      setItemsPerView(ipv);
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSlider = itemsPerView === 3; // Only tablet is a slider per request
  const totalGroups = Math.ceil(products.length / itemsPerView);

  const nextSlide = () => {
    if (totalGroups <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (totalGroups <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "50%" : "-50%",
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
      x: direction < 0 ? "50%" : "-50%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.1 }
      }
    }),
  };

  const renderProductCard = (product) => (
    <motion.div
      key={product.id}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover select-none pointer-events-none"
          draggable="false"
        />

        {/* Badges - Hidden on mobile */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 hidden md:flex">
          {product.isNew && (
            <span className="bg-brand-primary text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wider">
              New
            </span>
          )}
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wider">
            {product.discount}
          </span>
        </div>

        {/* Quick Action Overlay - Desktop only */}
        <div className="absolute top-5 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 hidden md:flex">
          <button className="w-10 h-10 bg-white rounded-full flex  items-center justify-center text-gray-800 hover:bg-brand-primary hover:text-white transition-all shadow-md transform translate-y-4 group-hover:translate-y-0 duration-300">
            <Heart size={18} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-brand-primary hover:text-white transition-all shadow-md transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-2.5 md:p-2.5 lg:p-5 flex flex-col flex-1">
        <div className="text-[11px] font-bold text-brand-primary uppercase tracking-widest mb-1 md:mb-1.5 hidden md:block">
          {product.category}
        </div>
        <h3 className="text-gray-800 font-bold text-[13px] md:text-sm lg:text-base mb-1 line-clamp-2 leading-tight flex-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-1 md:mb-1.5 lg:mb-3">
          <div className="flex items-center text-yellow-500">
            <Star size={12} fill="currentColor" />
            <span className="text-gray-700 text-[10px] md:text-xs font-bold ml-0.5 md:ml-1">{product.rating}</span>
          </div>
          <span className="text-gray-400 text-[9px] md:text-[11px]">({product.reviews})</span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-sm md:text-[15px] lg:text-lg font-black text-slate-800 leading-none">
              {product.price}
            </span>
            <span className="text-[9px] md:text-[9px] lg:text-xs text-gray-400 line-through mt-0.5 hidden md:block">
              {product.originalPrice}
            </span>
          </div>
          <button className="bg-gray-900 text-white p-2 md:p-2 lg:p-2.5 rounded-lg md:rounded-xl hover:bg-brand-primary transition-colors shadow-sm hidden md:flex">
            <ShoppingCart size={16} md:size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
              Recommended for <span className="text-brand-primary">You</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-1">
              Handpicked items based on your interests.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-primary font-bold text-sm hover:gap-3 transition-all">
            VIEW ALL <ArrowRight size={16} />
          </button>
        </div>

        {isSlider ? (
          /* Tablet Draggable Slider */
          <div className="relative min-h-[350px]">
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
                dragElastic={0.2}
                onDragStart={() => {
                  isDragging.current = true;
                }}
                onDragEnd={(e, { offset, velocity }) => {
                  setTimeout(() => {
                    isDragging.current = false;
                  }, 100);

                  const swipeDistance = offset.x;
                  const swipeVelocity = velocity.x;

                  if (swipeDistance < -50 || swipeVelocity < -500) {
                    nextSlide();
                  } else if (swipeDistance > 50 || swipeVelocity > 500) {
                    prevSlide();
                  }
                }}
                className="grid grid-cols-3 gap-3 md:gap-6 w-full cursor-grab active:cursor-grabbing"
              >
                {products.slice(currentIndex * 3, currentIndex * 3 + 3).map(renderProductCard)}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            {totalGroups > 1 && (
              <div className="flex justify-center items-center mt-8 space-x-2">
                {Array.from({ length: totalGroups }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === index ? "w-4 bg-brand-primary" : "w-1.5 bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Mobile/Desktop Grid */
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {products.map(renderProductCard)}
          </div>
        )}

        {/* Mobile View All Button */}
        <button className="w-full mt-8 py-3 border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-gray-800 font-bold text-sm md:hidden hover:bg-gray-50 transition-colors">
          View All Recommendations <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default SuggestionSection;
