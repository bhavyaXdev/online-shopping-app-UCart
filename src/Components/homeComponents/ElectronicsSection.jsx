import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDraggable } from '../../hooks/useDraggable';
import ProductCard from '../ProductCard';

const ElectronicsSection = () => {
    const electronicsProducts = useSelector(state => state.home.electronicsProducts || []);
    const navigate = useNavigate();
    const dragHandlers = useDraggable();

    return (
        <section className="py-8 md:py-12 bg-white">
            <div className="container mx-auto px-4 md:px-10">
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
                    className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-5 snap-x snap-mandatory pt-2 no-scrollbar px-2 mb-3 md:mb-0 -mx-2 duration-300 transition-all cursor-pointer"
                >
                    {electronicsProducts.map((product) => (
                        <div key={product.id} className="w-[160px] sm:w-[180px] md:w-[220px] lg:w-[250px] shrink-0 snap-center">
                            <ProductCard 
                                product={product} 
                                hideWishlist={true} 
                                hideCart={true} 
                                hideCategory={true} 
                                hideOriginalPrice={true}
                            />
                        </div>
                    ))}
                </div>
                </div>{/* End Colored Div */}
            </div>
        </section>
    );
};

export default ElectronicsSection;
