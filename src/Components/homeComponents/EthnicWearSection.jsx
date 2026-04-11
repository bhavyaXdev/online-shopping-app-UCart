import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const EthnicWearSection = () => {
    const products = useSelector((state) => state.home.ethnicProducts);
    const [itemsPerView, setItemsPerView] = useState(1);
    
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
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="py-12 bg-gradient-to-r from-[#FDECF0] to-[#FEF9E7] ">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Promo Banner */}
                <div className="w-full h-[160px] md:h-[200px] lg:h-[300px] rounded-2xl relative overflow-hidden mb-8 bg-gradient-to-r from-[#F0C4CE] to-[#F7D6A0] flex items-center px-4 md:px-8 lg:px-16 border border-[#e5d5b7] shadow-md group">
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
                    {products.slice(0, itemsPerView >= 4 ? 8 : 6).map((product) => (
                         <ProductCard key={product.id} product={product} reviewsAtBottom={true} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EthnicWearSection;
