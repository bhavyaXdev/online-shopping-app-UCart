import React from "react";
import { Star, ShoppingCart, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const TrendingSection = () => {
    const products = useSelector((state) => state.home.recommendedProducts);

    const renderProductCard = (product) => (
        <motion.div
            key={product.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer"
        >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden bg-gray-50 h-[100px] sm:h-[130px] md:h-[160px] lg:h-[180px]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center select-none pointer-events-none transition-transform duration-700 group-hover:scale-110"
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

                {/* Rating Badge on Image */}
                <div className="absolute bottom-1.5 left-1.5 bg-white/90 backdrop-blur-sm px-1.5 py-[2px] rounded-sm flex items-center shadow-sm">
                    <span className="text-slate-800 text-[8px] font-bold mr-0.5">{product.rating}</span>
                    <Star size={8} className="text-amber-400" fill="currentColor" />
                    <div className="w-[1px] h-2 bg-gray-300 mx-1"></div>
                    <span className="text-gray-500 text-[8px]">{product.reviews || 0}</span>
                </div>
            </div>

            {/* Content Formatted Cleanly */}
            <div className="p-2 md:p-3 lg:p-4 flex flex-col flex-1">
                <div className="text-[10px] md:text-[11px] font-bold text-amber-600 uppercase tracking-widest mb-1 hidden md:block">
                    {product.category}
                </div>
                <h3 className="text-slate-800 font-bold text-[12px] md:text-[13px] lg:text-sm mb-1.5 line-clamp-2 leading-tight flex-1">
                    {product.name}
                </h3>
                
                <div className="flex items-end justify-between mt-auto pt-1">
                    <div className="flex flex-col">
                        <span className="text-[13px] md:text-base lg:text-lg font-black text-slate-900 leading-none">
                            {product.price}
                        </span>
                        <span className="text-[8px] md:text-[10px] lg:text-xs text-gray-400 line-through mt-0.5">
                            {product.originalPrice}
                        </span>
                    </div>
                    {/* Unified Buy Actions respecting all layout tiers */}
                    <div className="flex items-center gap-1 md:gap-1.5 shrink-0">
                        {/* Mobile wishlist button */}
                        <button className="md:hidden bg-white border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 p-1.5 md:p-2 rounded-md transition-colors focus:outline-none shadow-sm flex items-center justify-center">
                            <Heart size={14} className="md:w-3.5 md:h-3.5" strokeWidth={2.5} />
                        </button>
                        
                        <button className="hidden lg:flex bg-slate-900 text-white px-3 py-1.5 md:py-2 rounded-md md:rounded-lg text-[9px] md:text-[10px] font-bold hover:bg-amber-500 hover:text-slate-900 transition-all uppercase shadow-sm whitespace-nowrap">
                            Buy Now
                        </button>

                        <button className="bg-slate-900 text-white p-1.5 lg:p-2 rounded-md lg:rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all focus:outline-none shadow-sm flex items-center justify-center md:hidden lg:flex">
                            <ShoppingCart size={14} className="lg:w-4 lg:h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );

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
                        {products.slice(0, 8).map((product) => renderProductCard(product))}
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
