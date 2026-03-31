import React, { useState, useEffect, useRef } from "react";
import { Star, ShoppingCart, Heart, ArrowRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const EthnicWearSection = () => {
    const products = useSelector((state) => state.home.ethnicProducts);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);
    const [direction, setDirection] = useState(0);
    const isDragging = useRef(false);

    useEffect(() => {
        const handleResize = () => {
            let ipv = 1;
            if (window.innerWidth >= 1024) {
                ipv = 4;
            } else if (window.innerWidth >= 768) {
                ipv = 3;
            } else {
                ipv = 2; // For mobile grid
            }
            setItemsPerView(ipv);
            setCurrentIndex(0);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isSlider = itemsPerView === 3;
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

    const renderProductCard = (product) => (
        <motion.div
            key={product.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer"
        >
            <div className="relative overflow-hidden bg-gray-50 h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top select-none pointer-events-none transition-transform duration-500 "
                    draggable="false"
                />

                {/* Quick Action Overlay - Permanently visible on md, hover on lg */}
                <div className="absolute top-4 right-3 flex-col items-center justify-center gap-2 lg:gap-3 hidden md:flex lg:opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button className="w-8 h-8 lg:w-10 lg:h-10 bg-white/70 rounded-full flex items-center justify-center text-gray-800 hover:bg-[#8B5E3C] hover:text-white transition-all shadow-md transform group-hover:translate-y-0 duration-300 cursor-pointer">
                        <Heart size={16} className="lg:w-[18px] lg:h-[18px]" />
                    </button>
                    <button className="w-8 h-8 lg:w-10 lg:h-10 bg-white/70 rounded-full flex items-center justify-center text-gray-800 hover:bg-[#8B5E3C] hover:text-white transition-all shadow-md transform group-hover:translate-y-0 duration-300 delay-75 cursor-pointer">
                        <ShoppingCart size={16} className="lg:w-[18px] lg:h-[18px]" />
                    </button>
                </div>

                {/* Rating Badge on Image */}
                <div className="absolute bottom-1.5 left-1.5 bg-white/90 backdrop-blur-sm px-1.5 py-[2px] rounded-sm flex items-center shadow-sm">
                    <span className="text-gray-800 text-[8px] font-bold mr-0.5">{product.rating}</span>
                    <Star size={8} className="text-yellow-500" fill="currentColor" />
                    <div className="w-[1px] h-2 bg-gray-300 mx-1"></div>
                    <span className="text-gray-500 text-[8px]">{product.reviews}</span>
                </div>
            </div>
            <div className="p-2 md:p-3 lg:p-4 flex flex-col flex-1">
                <div className="text-[10px] md:text-[11px] font-bold text-brand-primary uppercase tracking-widest mb-1 hidden md:block">
                    {product.category}
                </div>
                <h3 className="text-gray-800 font-bold text-[12px] md:text-[13px] lg:text-sm mb-1.5 line-clamp-2 leading-tight flex-1">
                    {product.name}
                </h3>
                <div className="flex items-end justify-between mt-auto pt-1">
                    <div className="flex flex-col">
                        <span className="text-[13px] md:text-base lg:text-lg font-black text-slate-800 leading-none">
                            {product.price}
                        </span>
                        <span className="text-[8px] md:text-[10px] lg:text-xs text-gray-400 line-through mt-0.5">
                            {product.originalPrice}
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 lg:gap-2">
                        {/* Mobile wishlist button */}
                        <button className="md:hidden bg-white border border-gray-200 text-gray-400 p-1.5 rounded-md hover:bg-gray-50 hover:text-red-500 transition-colors focus:outline-none shadow-sm flex items-center justify-center">
                            <Heart size={14} strokeWidth={2} />
                        </button>
                        
                        <button className="hidden lg:block bg-slate-900 text-white px-3 py-2 rounded-lg text-[10px] font-bold hover:bg-brand-primary transition-colors uppercase shadow-sm whitespace-nowrap">
                            Buy Now
                        </button>
                        <button className="flex items-center justify-center md:hidden lg:flex bg-slate-900 text-white p-1.5 lg:p-2 rounded-md lg:rounded-lg hover:bg-brand-primary transition-colors focus:outline-none shadow-sm">
                            <ShoppingCart size={14} className="lg:w-4 lg:h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section className="py-12 bg-gradient-to-r from-[#FDECF0] to-[#FEF9E7] ">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Promo Banner */}
                <div className="w-full h-[160px] md:h-[200px] lg:h-[300px] rounded-2xl relative overflow-hidden mb-8 bg-gradient-to-r from-[#F0C4CE] to-[#F7D6A0] flex items-center px-4 md:px-8 lg:px-16 border border-[#e5d5b7] shadow-md group">
                    {/* Background Pattern */}
                    {/* <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8B5E3C 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div> */}

                    {/* Title Group - Left Aligned */}
                    <div className="relative z-10 flex flex-col items-start text-left max-w-[60%]">
                        <span className="text-[#8B5E3C] font-extrabold text-xs md:text-sm  uppercase mb-2">Heritage Collection</span>
                        <h2 className="text-xl lg:text-6xl md:text-3xl font-black text-slate-900 tracking-tight leading-none mb-4">
                            ETHNIC <span className="text-brand-primary">WEAR</span>
                        </h2>
                        <p className="text-gray-600 text-[8px] md:text-sm font-medium uppercase tracking-widest  md:block">
                            Elegance in every thread. Discover <br className="md:block lg:hidden hidden" /> timeless pieces.
                        </p>
                        <div className="h-1.5 w-20 bg-brand-primary lg:mt-6 mt-4 rounded-full group-hover:w-40 transition-all duration-700 md:block hidden"></div>
                    </div>

                    {/* Featured Model Images - Right Side "Stickers" */}
                    <div className="absolute md:right-0 lg:right-30  right-5 md:right-10 top-0 h-full w-[45%] md:w-[50%] flex items-center justify-end pointer-events-none">
                        <div className="relative h-full w-full flex items-center justify-end pr-4 md:pr-12">
                            {/* Sticker 1 */}
                            <motion.div
                                initial={{ rotate: -5 }}
                                whileHover={{ rotate: 0, scale: 1.05 }}
                                className="absolute right-2 md:right-16 lg:right-32 bottom-2 md:bottom-4 lg:bottom-8 w-20 h-28 md:w-32 md:h-44 lg:w-56 lg:h-72 bg-white p-1.5 md:p-2 lg:p-3 pb-6 md:pb-8 lg:pb-12 rounded-lg shadow-2xl z-20 border border-gray-100 transform -rotate-6"
                            >
                                <img
                                    src="https://i.pinimg.com/736x/2e/c7/23/2ec723e4d29c99e8dd4d17162e77447b.jpg"
                                    className="w-full h-full object-cover rounded-md"
                                    alt="Ethnic Look 1"
                                />
                                <div className="absolute bottom-2 left-0 w-full text-center text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Heritage</div>
                            </motion.div>

                            {/* Sticker 2 */}
                            <motion.div
                                initial={{ rotate: 8 }}
                                whileHover={{ rotate: 0, scale: 1.05 }}
                                className="absolute right-0 md:right-4 lg:right-8 top-2 md:top-4 lg:top-8 w-16 h-24 md:w-24 md:h-36 lg:w-48 lg:h-64 bg-white p-1.5 md:p-2 lg:p-3 pb-6 md:pb-8 lg:pb-12 rounded-lg shadow-2xl z-10 border border-gray-100 transform rotate-12"
                            >
                                <img
                                    src="https://i.pinimg.com/1200x/12/fa/4c/12fa4c3575188df2a6f5aeff74996ee4.jpg"
                                    className="w-full h-full object-cover rounded-md"
                                    alt="Ethnic Look 2"
                                />
                                <div className="absolute bottom-2 left-0 w-full text-center text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Timeless</div>
                            </motion.div>
                        </div>
                    </div>
                </div>



                {/* Section Title */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
                            Timeless <span className="text-[#8B5E3C]">Ethnic Collection</span>
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm mt-1 uppercase font-bold tracking-widest">Heritage meets Modernity</p>
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

export default EthnicWearSection;
