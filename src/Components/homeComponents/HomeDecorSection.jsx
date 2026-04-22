import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

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

    return (
        <section className="py-12  bg-slate-100">
            <div className="container mx-auto px-4 md:px-10">
                
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
                    {products.slice(0, itemsPerView >= 4 ? 8 : 6).map((product) => (
                        <ProductCard key={product.id} product={product} reviewsAtBottom={true} />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default HomeDecorSection;
