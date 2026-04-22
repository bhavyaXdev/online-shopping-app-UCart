import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';

const schoolProducts = [
  {
    id: 1,
    name: "Ergonomic School Backpack",
    price: "₹899",
    originalPrice: "₹1499",
    discount: "40% OFF",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Classic White Sneakers",
    price: "₹499",
    originalPrice: "₹999",
    discount: "50% OFF",
    rating: 4.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Stainless Steel Bento Box",
    price: "₹349",
    originalPrice: "₹599",
    discount: "41% OFF",
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1602123512165-2766ecadfb29?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Art & Craft Jumbo Kit",
    price: "₹299",
    originalPrice: "₹499",
    discount: "40% OFF",
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    name: "Thermal Water Bottle",
    price: "₹399",
    originalPrice: "₹699",
    discount: "42% OFF",
    rating: 4.4,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1523363065097-b649e9ce6d44?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 6,
    name: "Uniform Shirts (Set of 2)",
    price: "₹599",
    originalPrice: "₹899",
    discount: "33% OFF",
    rating: 4.9,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&q=80&w=400" 
  }
];

const KidsBackToSchoolProducts = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth >= 768 ? 320 : 240;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full pb-10 md:pb-16 pt-0 md:pt-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <div className="flex flex-col">
             <h2 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight">
               Top School Picks
             </h2>
             <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">
               Grab them before they're gone!
             </p>
          </div>
          <button className="text-xs md:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            View All
          </button>
        </div>

        {/* Products Scroller */}
        <div className="relative group/bts-scroller">
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 md:pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {schoolProducts.map((product) => (
              <div 
                key={product.id} 
                className="snap-start shrink-0 w-[180px] md:w-[240px] flex flex-col group/card cursor-pointer"
              >
                {/* Product Image Box */}
                <div className="relative w-full h-[220px] md:h-[300px] rounded-[20px] overflow-hidden bg-gray-50 mb-3 shadow-[0_2px_10px_rgba(0,0,0,0.05)] group-hover/card:shadow-xl transition-all duration-300 border border-gray-100">
                  
                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] md:text-xs font-black px-2.5 py-1 rounded-full z-10 shadow-sm tracking-wide">
                    {product.discount}
                  </div>
                  
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  
                  {/* Add to Cart Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-100 md:opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-300 flex justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                     <button className="bg-white text-gray-900 font-bold text-xs md:text-sm py-2.5 px-4 rounded-full w-full flex justify-center items-center gap-2 hover:bg-blue-500 hover:text-white transition-all shadow-md transform md:translate-y-4 md:group-hover/card:translate-y-0 duration-300">
                       <ShoppingCart size={16} />
                       Add to Cart
                     </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col px-1">
                  <div className="flex items-center gap-1 mb-1.5">
                    <Star className="text-yellow-400 fill-yellow-400" size={13} />
                    <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                    <span className="text-[10px] md:text-xs text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-800 line-clamp-1 mb-1.5 group-hover/card:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm md:text-lg font-black text-gray-900">{product.price}</span>
                    <span className="text-xs md:text-sm font-medium text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
             onClick={() => scroll('left')}
             className="absolute left-[-15px] top-[40%] md:top-[45%] -translate-y-1/2 bg-white text-gray-800 p-2.5 md:p-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:text-blue-600 hover:scale-110 transition-all hidden md:flex opacity-0 group-hover/bts-scroller:opacity-100 z-40"
          >
             <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <button 
             onClick={() => scroll('right')}
             className="absolute right-[-15px] top-[40%] md:top-[45%] -translate-y-1/2 bg-white text-gray-800 p-2.5 md:p-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:text-blue-600 hover:scale-110 transition-all hidden md:flex opacity-0 group-hover/bts-scroller:opacity-100 z-40"
          >
             <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default KidsBackToSchoolProducts;
