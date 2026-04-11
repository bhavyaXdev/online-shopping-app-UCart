import React, { useRef } from "react";
import { ChevronRight, ChevronLeft, Flame } from "lucide-react";

const hotDealsData = [
  { brand: "Campus Shoes", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=300&fit=crop", offer: "Under ₹499" },
  { brand: "USPA Sports", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=300&fit=crop", offer: "Upto 40% Off" },
  { brand: "Linen Shirts", img: "https://images.unsplash.com/photo-1596755094514-f87e32f85bdc?q=80&w=300&fit=crop", offer: "Min. 50% Off" },
  { brand: "Libas Kurti", img: "https://images.unsplash.com/photo-1583391733958-650fac5eb367?q=80&w=300&fit=crop", offer: "Min. 70% Off" },
  { brand: "V-Mart Wear", img: "https://images.unsplash.com/photo-1515347619252-8d76befbb288?q=80&w=300&fit=crop", offer: "Under ₹399" },
  { brand: "Woodland Boots", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=300&fit=crop", offer: "Min. 40% Off" },
  { brand: "Classic Watches", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=300&fit=crop", offer: "Under ₹999" },
  { brand: "Travel Backpacks", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=300&fit=crop", offer: "Flat 50% Off" },
  { brand: "Levis Jeans", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=300&fit=crop", offer: "From ₹799" },
  { brand: "Gold Jewellery", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=300&fit=crop", offer: "Upto 60% Off" }
];

const FashionHotDeals = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth >= 768 ? 600 : 300;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 md:px-10 py-6">
      <div className="bg-gradient-to-br from-[#e0f2fe] via-[#bae6fd] to-[#7dd3fc] rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm border border-blue-200 relative overflow-hidden">
        
        {/* Decorative background flourishes to make it distinct and premium */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="flex items-center justify-between mb-4 md:mb-6 relative z-10 w-full">
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-3xl font-black text-blue-950 tracking-tight flex items-center">
              Sizzling Deals
              <Flame className="text-orange-500 ml-2" size={24} strokeWidth={2.5} fill="currentColor" />
            </h2>
          </div>
          <button className="text-blue-700 font-bold text-[11px] md:text-sm bg-white/70 hover:bg-white px-3 md:px-5 py-1.5 md:py-2 rounded-full transition-colors shadow-sm whitespace-nowrap">
            View All
          </button>
        </div>
        
        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex gap-3 md:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {hotDealsData.map((deal, i) => (
              <div key={i} className="snap-start shrink-0 w-[130px] md:w-[180px] bg-white rounded-[14px] shadow-md hover:shadow-xl transition-all duration-300 group/card cursor-pointer flex flex-col border border-white/60 transform hover:-translate-y-1">
                {/* Image Section */}
                <div className="h-[140px] md:h-[190px] w-full rounded-t-[14px] overflow-hidden relative bg-white p-2">
                  <img src={deal.img} className="w-full h-full object-cover rounded-lg group-hover/card:scale-105 transition-transform duration-500" alt={deal.brand} />
                </div>
                
                {/* Deal Tag Section */}
                <div className="bg-[#0ea5e9] w-full text-center py-1.5 md:py-2.5 relative overflow-hidden flex-shrink-0">
                   {/* Dynamic Shine Box Animation */}
                   <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 transition-transform duration-700 translate-x-[-150%] group-hover/card:translate-x-[250%]" />
                   <span className="text-white font-black text-[12px] md:text-[15px] tracking-wide relative z-10">{deal.offer}</span>
                </div>
                
                {/* Brand Name */}
                <div className="py-2.5 md:py-3 px-2 bg-[#f8fafc] rounded-b-[14px] text-center shrink-0 border-t border-gray-100">
                  <span className="text-slate-700 font-semibold text-[11px] md:text-[14px] truncate block">{deal.brand}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Chevrons */}
          <button 
             onClick={() => scroll('left')}
             className="absolute left-[-20px] top-[45%] -translate-y-1/2 bg-white text-gray-800 p-2.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:text-blue-600 hover:scale-110 transition-all hidden md:block opacity-0 group-hover:opacity-100 z-20"
          >
             <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <button 
             onClick={() => scroll('right')}
             className="absolute right-[-20px] top-[45%] -translate-y-1/2 bg-white text-gray-800 p-2.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:text-blue-600 hover:scale-110 transition-all hidden md:block opacity-0 group-hover:opacity-100 z-20"
          >
             <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FashionHotDeals;
