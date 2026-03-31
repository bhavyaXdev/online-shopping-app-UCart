import React from "react";
import { Star, ShoppingCart, Heart, Compass, Sparkle, Flower2 } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const YouMayLikeSection = () => {
  // Collect all arrays from our Redux store
  const recommended = useSelector(
    (state) => state.home.recommendedProducts || [],
  );
  const ethnic = useSelector((state) => state.home.ethnicProducts || []);
  const decor = useSelector((state) => state.home.homeDecorProducts || []);
  const electronics = useSelector(
    (state) => state.home.electronicsProducts || [],
  );

  // Combine 2 items from each category to create a mixed 8-item array
  const mixedProducts = [
    ...recommended.slice(0, 5),
    ...ethnic.slice(0, 6),
    ...decor.slice(0, 8),
    ...electronics.slice(0, 5),
  ];

  const renderProductCard = (product, index) => (
    <motion.div
      // product.id might not be unique across different arrays, appending index is safer
      key={`${product.id}-${index}`}
      whileHover={{ y: -5 }}
      className="bg-white  md:rounded-sm shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden group flex flex-col transition-all duration-300 transform md:hover:-translate-y-1 h-full cursor-pointer"
    >
      <div className="relative overflow-hidden bg-gray-50 mt-5 md:mt-0 h-[200px] sm:h-[200px] md:h-[200px] lg:h-[220px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top select-none pointer-events-none transition-transform duration-700 group-hover:scale-110"
          draggable="false"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1">
          {product.isNew && (
            <span className="bg-slate-900 text-white text-[8px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded shadow-sm tracking-wide">
              NEW
            </span>
          )}
        </div>

        {/* Quick Action Overlay - Desktop only */}
        <div className="absolute top-3 right-3 flex-col items-center justify-center gap-2 hidden md:flex lg:opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 hover:bg-slate-900 hover:text-white transition-all shadow-md transform group-hover:translate-y-0 duration-300 cursor-pointer">
            <Heart size={16} className="lg:w-[18px] lg:h-[18px]" />
          </button>
          <button className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 hover:bg-slate-900 hover:text-white transition-all shadow-md transform group-hover:translate-y-0 duration-300 delay-75 cursor-pointer">
            <ShoppingCart size={16} className="lg:w-[18px] lg:h-[18px]" />
          </button>
        </div>

        {/* Rating Badge on Image (Hidden on Mobile) */}
        <div className="absolute bottom-1.5 left-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm items-center shadow-sm hidden md:flex">
          <span className="text-slate-800 text-[10px] font-bold mr-0.5">
            {product.rating || 4.2}
          </span>
          <Star size={10} className="text-amber-400" fill="currentColor" />
          <div className="w-[1px] h-2 bg-gray-300 mx-1"></div>
          <span className="text-gray-500 text-[10px]">
            {product.reviews || 85}
          </span>
        </div>
      </div>

      {/* Content Formatted Cleanly */}
      <div className="p-2 px-3 md:p-3 lg:p-4 flex flex-col flex-1">
        <div className="text-[11px] md:text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1.5">
          {product.category || "General"}
        </div>
        <h3 className="text-slate-800 font-bold text-sm md:text-base lg:text-lg mb-1.5 line-clamp-2 leading-tight flex-1">
          {product.name}
        </h3>

        <div className="flex items-end justify-between mt-auto pt-1">
          <div className="flex flex-col">
            <span className="text-base md:text-lg lg:text-xl font-black text-slate-900 leading-none">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] md:text-xs text-gray-400 line-through mt-0.5">
                {product.originalPrice}
              </span>
            )}
          </div>
        </div>
        {/* Mobile Rating Placed in Content */}
        <div className="flex md:hidden items-center my-3 ">
          <span className="flex items-center gap-1 text-white/90 text-xs font-bold mr-1 bg-[rgb(3,141,99)]/80 p-1 px-2 rounded-full">
            {product.rating || 4.2}{" "}
            <Star
              size={12}
              className="text-amber-400"
              fill="currentColor"
            />{" "}
          </span>

          <div className="w-[1px] h-3 bg-gray-300 mx-1.5"></div>
          <span className="text-gray-500 text-xs">
            ({product.reviews || 85})
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="pt-6 pb-12 md:pb-24 bg-[#fcf8f5] relative overflow-hidden">
      {/* Top Wave Divider spanning the entire width */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none z-0">
        <svg className="relative block w-[calc(100%+1.3px)] h-[35px] sm:h-[50px] md:h-[70px] lg:h-[90px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div> */}

      {/* Boho Sweeping Organic Background Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg className="relative block w-[calc(100%+1.3px)] h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 400">
          <path fill="#f2e2dc" d="M 0,250 C 400,400 900,350 1440,50 L 1440,400 L 0,400 Z"></path>
        </svg>
      </div>

      {/* Boho Floral & Scattered Sparkles exactly matching image feel */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <Flower2 className="absolute bottom-[0%] md:bottom-[0%] right-[0%] text-[#e6cdc3] fill-[#e6cdc3] rotate-12 opacity-80" strokeWidth={0.5} size={70} />
         <Flower2 className="absolute md:top-[5%] top-[1%] -left-[2%] text-[#e6cdc3] fill-[#e6cdc3] -rotate-12 opacity-50" strokeWidth={0.5} size={110} />
         
         <Sparkle className="absolute md:top-[8%] top-[2%] left-[90%] md:left-[15%] text-[#eabfae] animate-[pulse_3s_ease-in-out_infinite]" size={16} fill="currentColor" />
         <Sparkle className="absolute top-[5%] right-[20%] md:right-[10%] text-[#eabfae] animate-[pulse_4s_ease-in-out_infinite]" size={22} fill="currentColor" />
         <Sparkle className="absolute bottom-[20%] left-[8%] md:left-[25%] text-[#eabfae] animate-[pulse_3.5s_ease-in-out_infinite]" size={20} fill="currentColor" />
         <Sparkle className="absolute top-[10%] right-[2%] text-[#eabfae]/80 animate-[pulse_2.5s_ease-in-out_infinite]" size={14} fill="currentColor" />
         <Sparkle className="absolute bottom-[2%] left-[5%] text-[#eabfae]/60 animate-[pulse_4s_ease-in-out_infinite]" size={20} fill="currentColor" />
      </div>

      <div className="container mx-auto md:px-6  relative z-10 mt-6 lg:mt-5">
        {/* Compact Heart Header Section */}
        <div className="flex justify-center items-center mb-6 md:mb-20 mt-2 md:mt-4 relative w-full h-[120px] md:h-[150px]">
          {/* Background Hearts Layered */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Heart 
              className="absolute w-[140px] h-[140px] md:w-[200px] md:h-[200px] text-rose-50 fill-rose-50/80 animate-pulse" 
              strokeWidth={0.5} 
            />
            <Heart 
              className="absolute w-[160px] h-[160px] md:w-[220px] md:h-[220px] text-rose-100/60 fill-transparent" 
              strokeWidth={1} 
            />
          </div>
          
          <div className="flex flex-col items-center justify-center text-center z-10 px-4 pb-2 md:pb-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-white/80 backdrop-blur-md border border-rose-100 mb-2 shadow-sm">
              <span className="text-[8px] md:text-[10px] font-extrabold text-rose-500 uppercase tracking-[0.15em]">Made For You</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-rose-950 tracking-tight leading-none md:leading-tight">
              You May <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500 drop-shadow-sm">Like</span>
            </h2>
            <p className="text-rose-500/80 text-[10px] md:text-sm font-medium mt-1.5 max-w-[200px] md:max-w-sm mx-auto">
              Curated picks that match your style.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 sm:gap-0 lg:gap-5">
          {mixedProducts.map((product, index) =>
            renderProductCard(product, index),
          )}
        </div>

        {/* <div className="mt-8 md:mt-10 flex justify-center w-full">
          <button className="flex items-center gap-2 text-xs md:text-sm font-bold text-white bg-slate-900 hover:bg-indigo-600 px-6 py-3 md:px-8 md:py-3.5 rounded-full hover:shadow-lg transition-all duration-300">
            <Compass size={16} />
            Load More Mixes
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default YouMayLikeSection;
