import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

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
        ipv = 2; // Mobile: 2 items grid
      }
      setItemsPerView(ipv);
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSlider = itemsPerView === 3; // Only tablet is a slider per request
  const totalGroups = Math.ceil(products.length / (isSlider ? 3 : 4));

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
                {products.slice(currentIndex * 3, currentIndex * 3 + 3).map((product) => (
                    <div key={product.id}>
                        <ProductCard product={product} reviewsAtBottom={true} />
                    </div>
                ))}
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
            {products.map((product) => (
                <ProductCard key={product.id} product={product} reviewsAtBottom={true} />
            ))}
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
