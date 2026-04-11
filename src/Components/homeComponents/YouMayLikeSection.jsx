import React from "react";
import { Heart, Sparkle, Flower2 } from "lucide-react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

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

  // Combine items from each category to create a mixed array
  const mixedProducts = [
    ...recommended.slice(0, 5),
    ...ethnic.slice(0, 6),
    ...decor.slice(0, 8),
    ...electronics.slice(0, 5),
  ];

  return (
    <section className="pt-6 pb-12 md:pb-24 bg-[#fcf8f5] relative overflow-hidden">
      {/* Boho Sweeping Organic Background Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg className="relative block w-[calc(100%+1.3px)] h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 400">
          <path fill="#f2e2dc" d="M 0,250 C 400,400 900,350 1440,50 L 1440,400 L 0,400 Z"></path>
        </svg>
      </div>

      {/* Boho Floral & Scattered Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <Flower2 className="absolute bottom-[0%] md:bottom-[0%] right-[0%] text-[#e6cdc3] fill-[#e6cdc3] rotate-12 opacity-80" strokeWidth={0.5} size={70} />
         <Flower2 className="absolute md:top-[5%] top-[1%] -left-[2%] text-[#e6cdc3] fill-[#e6cdc3] -rotate-12 opacity-50" strokeWidth={0.5} size={110} />
         
         <Sparkle className="absolute md:top-[8%] top-[2%] left-[90%] md:left-[15%] text-[#eabfae] animate-[pulse_3s_ease-in-out_infinite]" size={16} fill="currentColor" />
         <Sparkle className="absolute top-[5%] right-[20%] md:right-[10%] text-[#eabfae] animate-[pulse_4s_ease-in-out_infinite]" size={22} fill="currentColor" />
         <Sparkle className="absolute bottom-[20%] left-[8%] md:left-[25%] text-[#eabfae] animate-[pulse_3.5s_ease-in-out_infinite]" size={20} fill="currentColor" />
         <Sparkle className="absolute top-[10%] right-[2%] text-[#eabfae]/80 animate-[pulse_2.5s_ease-in-out_infinite]" size={14} fill="currentColor" />
         <Sparkle className="absolute bottom-[2%] left-[5%] text-[#eabfae]/60 animate-[pulse_4s_ease-in-out_infinite]" size={20} fill="currentColor" />
      </div>

      <div className="container mx-auto md:px-6 relative z-10 mt-6 lg:mt-5">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 sm:gap-0 lg:gap-5 gap-2 md:px-0">
          {mixedProducts.map((product, index) => (
             <ProductCard key={`${product.id}-${index}`} product={product} reviewsAtBottom={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouMayLikeSection;
