import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const TrendingSection = () => {
    const products = useSelector((state) => state.home.recommendedProducts);

    return (
        <section className="py-6 md:py-12 bg-white">
            <div className="container mx-auto px-4 ">
                {/* Colored div wrapping the whole section */}
                <div className="bg-[#cc8b86] border border-[#ffccd5] rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-sm">
                    
                    {/* Section Title */}
                    <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-12">
                        <div className="inline-flex items-center justify-center gap-3 mb-3">
                            <span className="w-10 h-[2px] bg-white/40 rounded-full"></span>
                            <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] opacity-90">Hot Collection</span>
                            <span className="w-10 h-[2px] bg-white/40 rounded-full"></span>
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 drop-shadow-sm">
                            Trending <span className="text-[#ffd9da]">Now</span>
                        </h3>
                        <p className="text-[#fff9ec] text-xs md:text-sm uppercase font-bold tracking-widest max-w-lg mx-auto opacity-90">
                            Handpicked favorites just for you. Discover what everyone is loving this week!
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                        {products.slice(0, 8).map((product) => (
                             <ProductCard 
                                key={product.id} 
                                product={product} 
                                hideWishlist={true} 
                                hideCart={true} 
                                hideCategory={true} 
                                hideOriginalPrice={true}
                             />
                        ))}
                    </div>

                    {/* Modern Action Button */}
                    <div className="mt-10 md:mt-12 flex justify-center w-full">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center justify-center gap-3 bg-white/20 hover:bg-white text-white hover:text-[#cc8b86] border border-white/40 hover:border-white px-8 md:px-12 py-3.5 md:py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest transition-all duration-500 shadow-xl backdrop-blur-md overflow-hidden"
                        >
                            <span className="relative z-10 transition-colors duration-300">Discover More Styles</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                        </motion.button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default TrendingSection;
