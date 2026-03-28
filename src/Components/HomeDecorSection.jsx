import React, { useState, useEffect } from "react";
import { Star, ShoppingCart, Heart,ArrowRight, ShoppingBag, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const HomeDecorSection = () => {
    const products = useSelector((state) => state.home.homeDecorProducts);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            let ipv = 1;
            if (window.innerWidth >= 1024) ipv = 4;
            else if (window.innerWidth >= 768) ipv = 3;
            else ipv = 2;
            setItemsPerView(ipv);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const renderProductCard = (product) => (
        <motion.div
            key={product.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer"
        >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden bg-gray-50 h-[150px] sm:h-[180px] md:h-[220px] lg:h-[240px]">
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

                {/* Mobile & Tablet Rating Badge on Image */}
                <div className="absolute bottom-1.5 left-1.5 lg:hidden bg-white/90 backdrop-blur-sm px-1.5 py-[2px] rounded-sm flex items-center shadow-sm">
                    <span className="text-slate-800 text-[8px] font-bold mr-0.5">{product.rating}</span>
                    <Star size={8} className="text-amber-400" fill="currentColor" />
                    <div className="w-[1px] h-2 bg-gray-300 mx-1"></div>
                    <span className="text-gray-500 text-[8px]">{product.reviews}</span>
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
                
                {/* Desktop Rating Inline */}
                <div className="hidden lg:flex items-center gap-1 mb-2 lg:mb-3">
                    <div className="flex items-center text-amber-400">
                        <Star size={10} className="lg:w-3 lg:h-3" fill="currentColor" />
                        <span className="text-gray-700 text-[9px] md:text-[11px] font-bold ml-0.5">{product.rating}</span>
                    </div>
                    <span className="text-gray-400 text-[8px] md:text-[10px]">({product.reviews})</span>
                </div>

                <div className="flex items-end justify-between mt-auto">
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
        <section className="py-12 mt-5 bg-slate-100">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                
                {/* Modern Dark Aesthetic Promo Banner */}
                <div className="w-full h-[160px] md:h-[200px] lg:h-[320px] rounded-2xl relative overflow-hidden mb-8 shadow-xl group border border-slate-300 flex items-center justify-start px-4 md:px-6 lg:px-16 cursor-pointer">
                    {/* Background Image Abstract*/}
                    <div className="absolute inset-0">
                        <img 
                            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" 
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1500ms] opacity-80 " 
                            alt="Modern Interiors backdrop " 
                        />
                    </div>
                    {/* Rich Blur Gradient Overlay */}
                    <div className="absolute inset-0 bg-black/40 hidden md:block"></div>
                    <div className="absolute inset-0 bg-black/60  md:hidden"></div>

                    {/* Banner Content */}
                    <div className="relative z-10 flex flex-col items-start text-left max-w-full md:max-w-[50%] lg:max-w-[40%] mt-auto md:mt-0 mb-4 md:mb-0">
                        <div className="flex items-center gap-2 mb-2 mt-2 md:mt-0 md:mb-3">
                            <span className="w-6 h-[2px] bg-amber-400"></span>
                            <span className="text-amber-400 font-extrabold text-[8px] md:text-[10px] lg:text-sm tracking-[0.2em] uppercase">Premium Living</span>
                        </div>
                        <h2 className="text-xl md:text-3xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-2 md:mb-2">
                            Modern <br className="hidden lg:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Aesthetics</span>
                        </h2>
                        <p className="text-gray-300 text-[10px]  font-medium tracking-wide mb-4 md:mb- line-clamp-2 md:line-clamp-none lg:text-sm">
                            Transform your space with curated minimalist furniture, chic accents, and elegant lighting.
                        </p>
                        <button className="px-5 py-1.5 md:py-2.5 md:px-8 lg:py-3.5 bg-white text-slate-900 font-black text-[10px] md:text-xs rounded-full hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-amber-400/20 active:scale-95 uppercase tracking-widest flex items-center gap-2">
                            Explore Catalog <ArrowRight size={14}/>
                        </button>
                    </div>
                </div>

                {/* Section Title */}
                <div className="flex items-center justify-between mb-6 md:mb-8">
                    <div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                            Home <span className="text-amber-600">Decor</span>
                        </h3>
                        <p className="text-slate-500 text-xs md:text-sm mt-1 uppercase font-bold tracking-widest">Elevate your lifestyle</p>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                    {products.slice(0, itemsPerView >= 4 ? 8 : 6).map(renderProductCard)}
                </div>
                
            </div>
        </section>
    );
};

export default HomeDecorSection;
