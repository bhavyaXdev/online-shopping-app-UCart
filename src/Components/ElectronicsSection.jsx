import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, ChevronRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDraggable } from '../hooks/useDraggable';

const ElectronicsSection = () => {
    const electronicsProducts = useSelector(state => state.home.electronicsProducts || []);
    const navigate = useNavigate();
    const dragHandlers = useDraggable();

    return (
        <section className="py-8 md:py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-gradient-to-br from-slate-900 via-[#0f172a] to-blue-950 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
                    {/* Background Tech Accent */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none"></div>

                    {/* Header Section */}
                    <div className="flex flex-row items-center justify-between lg:mb-4 mb-3 md:mb-4 gap-2 relative z-10 w-full pt-1">
                        <div className="max-w-[70%] md:max-w-xl">
                            <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                                <span className="w-5 md:w-8 h-[2px] bg-cyan-400"></span>
                                <span className="text-cyan-400 font-extrabold text-[9px] md:text-sm tracking-[0.2em] uppercase">Premium Tech</span>
                            </div>
                            <h2 className="text-lg md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                                Electronics <span className="">& </span> 
                                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Appliances</span>
                            </h2>
                        </div>
                        
                        <button 
                            onClick={() => navigate('/category/electronics')}
                            className="group flex items-center justify-center shrink-0 gap-2 text-sm md:text-base font-bold text-white md:text-slate-300 w-10 h-10 md:w-fit md:h-auto backdrop-blur-md bg-white/10 md:bg-transparent rounded-full md:rounded-none border border-white/20 md:border-transparent transition-all hover:bg-white/20 md:hover:bg-transparent active:scale-[0.95] md:active:scale-100 shadow-lg md:shadow-none"
                        >
                            <span className="hidden md:block hover:text-white transition-colors">View All Tech</span>
                            <div className="w-full h-full md:w-8 md:h-8 rounded-full md:bg-slate-800 flex items-center justify-center md:group-hover:bg-blue-600 transition-colors">
                                <ChevronRight size={20} md:size={18} className="md:group-hover:translate-x-1 transition-transform text-white" />
                            </div>
                        </button>
                    </div>

                {/* Single Row Horizontical Scroll Layout */}
                <div 
                    {...dragHandlers}
                    className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-5  snap-x snap-mandatory pt-2 hide-scrollbar px-2 mb-3 md:mb-0 -mx-2 duration-300 transition-all cursor-pointer"
                >
                    {electronicsProducts.map((product) => (
                        <div 
                            key={product.id} 
                            className="bg-white rounded-xl md:rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden group flex flex-col transition-all duration-300 transform md:hover:-translate-y-1 w-[160px] sm:w-[180px] md:w-[220px] lg:w-[250px] shrink-0 snap-center"
                        >
                            <div className="relative overflow-hidden bg-gray-50 h-[120px] sm:h-[150px] md:h-[150px] lg:h-[200px]">
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
                                <div className="absolute bottom-1.5 left-1.5 bg-white/90 backdrop-blur-sm px-1.5 py-[2px] rounded-sm flex items-center shadow-sm">
                                    <span className="text-slate-800 text-[8px] font-bold mr-0.5">{product.rating}</span>
                                    <Star size={8} className="text-amber-400" fill="currentColor" />
                                    <div className="w-[1px] h-2 bg-gray-300 mx-1"></div>
                                    <span className="text-gray-500 text-[8px]">{product.reviews}</span>
                                </div>
                            </div>
                            
                            {/* Content Formatted Cleanly */}
                            <div className="p-2 md:p-3 lg:p-4 flex flex-col flex-1">
                                <div className="text-[10px] md:text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1 hidden md:block">
                                    {product.category}
                                </div>
                                <h3 className="text-slate-800 font-bold text-[12px] md:text-[13px] lg:text-sm mb-1.5  line-clamp-2 leading-tight flex-1">
                                    {product.name}
                                </h3>

                                <div className="flex items-end justify-between mt-auto pt-1">
                                    <div className="flex flex-col">
                                        <span className="text-[13px] md:text-base lg:text-lg font-black text-slate-900 leading-none">
                                            {product.price}
                                        </span>
                                        {/* {product.originalPrice && (
                                            <span className="text-[8px] md:text-[10px] lg:text-xs text-gray-400 line-through mt-0.5">
                                                {product.originalPrice}
                                            </span>
                                        )} */}
                                    </div>
                                    {/* Unified Buy Actions */}
                                    <div className="flex items-center gap-1.5 shrink-0 md:hidden hidden">
                                        <button className="bg-white border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 p-1.5 md:p-2 rounded-md transition-colors focus:outline-none shadow-sm flex items-center justify-center">
                                            <Heart size={14} strokeWidth={2.5} />
                                        </button>
                                        <button className="bg-slate-900 text-white p-1.5 md:p-2 rounded-md hover:bg-blue-600 transition-all focus:outline-none shadow-sm flex items-center justify-center">
                                            <ShoppingCart size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>{/* End Colored Div */}
            </div>

            {/* Global CSS for hiding scrollbar added inline for portability */}
            <style jsx="true">{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default ElectronicsSection;
