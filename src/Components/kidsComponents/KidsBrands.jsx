import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const kidsBrandsData = [
  {
    name: "Mothercare",
    discount: "Up to 50% Off",
    img: "https://images.unsplash.com/photo-1544413660-299165566b1d?q=80&w=200&fit=crop",
    logo: "MC",
  },
  {
    name: "FirstCry",
    discount: "Min 40% Off",
    img: "https://images.unsplash.com/photo-1522771930-78848d92871d?q=80&w=200&fit=crop",
    logo: "FC",
  },
  {
    name: "Allen Solly Kids",
    discount: "Flat 30% Off",
    img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=200&fit=crop",
    logo: "AS",
  },
  {
    name: "Gini & Jony",
    discount: "Up to 60% Off",
    img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=200&fit=crop",
    logo: "GJ",
  },
  {
    name: "U.S. Polo Kids",
    discount: "Min 50% Off",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop",
    logo: "USPA",
  },
  {
    name: "Pepe Jeans Kids",
    discount: "Flat 40% Off",
    img: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=200&fit=crop",
    logo: "PJ",
  },
  {
    name: "Lego",
    discount: "Up to 30% Off",
    img: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=200&fit=crop",
    logo: "LG",
  },
];

const KidsBrands = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth >= 768 ? 320 : 220;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 md:px-10 py-6 md:py-10">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight flex items-center">
          Top Kids Brands
          <Star className="text-yellow-400 ml-2 fill-current" size={24} />
        </h2>
      </div>

      <div className="relative group/brands w-full ">
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pt-2 pb-6 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {kidsBrandsData.map((brand, i) => (
            <div key={i} className="snap-start shrink-0 w-[160px] md:w-[220px] lg:w-[260px] group cursor-pointer flex flex-col pt-4">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-sm transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl border border-gray-100">
                <img
                  src={brand.img}
                  className="w-full h-full object-cover "
                  alt={brand.name}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="bg-white/20  border border-white/30 rounded-lg p-2 text-center transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0 relative z-10">
                    <p className="text-yellow-300 font-black text-[10px] md:text-xs uppercase tracking-wider">
                      {brand.discount}
                    </p>
                  </div>
                </div>

                <div className="absolute top-3 left-3 p-2 bg-white rounded-xl flex items-center justify-center shadow-md font-black text-pink-600 text-xs shadow-pink-500/20 z-10">
                  {brand.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
           onClick={() => scroll('left')}
           className="absolute left-[-15px] top-[45%] -translate-y-1/2 bg-white text-gray-800 p-2.5 md:p-3.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:text-pink-600 hover:scale-110 transition-all hidden md:flex opacity-0 group-hover/brands:opacity-100 z-40"
        >
           <ChevronLeft size={24} strokeWidth={2.5} />
        </button>
        <button 
           onClick={() => scroll('right')}
           className="absolute right-[-15px] top-[45%] -translate-y-1/2 bg-white text-gray-800 p-2.5 md:p-3.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:text-pink-600 hover:scale-110 transition-all hidden md:flex opacity-0 group-hover/brands:opacity-100 z-40"
        >
           <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
};

export default KidsBrands;
