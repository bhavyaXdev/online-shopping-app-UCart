import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const festiveData = [
  { 
    title: "Punjabi Suits", 
    offer: "Up to 70% Off", 
    img: "https://i.pinimg.com/736x/c3/a4/71/c3a4710966f4768b6fade68a8562600a.jpg",
    bgColor: "bg-amber-50"
  },
  { 
    title: "Pathani Suits", 
    offer: "Up to 70% Off", 
    img: "https://i.pinimg.com/736x/f4/10/b0/f410b08491a1ba34f4caff0b9e3bb911.jpg",
    bgColor: "bg-orange-50"
  },
  { 
    title: "Kiran Border", 
    offer: "Min. 50% Off", 
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=500&fit=crop",
    bgColor: "bg-rose-50"
  },
  { 
    title: "Kurta Lehengas", 
    offer: "Min. 50% Off", 
    img: "https://images.unsplash.com/photo-1610189013028-2ce181467a50?q=80&w=500&fit=crop",
    bgColor: "bg-pink-50"
  },
  { 
    title: "Indie Kurtas", 
    offer: "Min. 50% Off", 
    img: "https://images.unsplash.com/photo-1542295669297-4d352b042bce?q=80&w=500&fit=crop",
    bgColor: "bg-stone-50"
  },
  { 
    title: "Festive Sarees", 
    offer: "Flat 60% Off", 
    img: "https://images.unsplash.com/photo-1610189013220-410a880ef8a1?q=80&w=500&fit=crop",
    bgColor: "bg-red-50"
  }
];

const FashionFestiveCollection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth >= 768 ? 500 : 250;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 md:px-10 py-12 md:py-25">
      
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center text-center mb-20 md:mb-14 relative">

         {/* Decorative Bottom Left PNG */}
                <div className="absolute -bottom-10 -left-[5%] md:left-[22%] w-20 h-20 md:w-28 md:h-28 pointer-events-none drop-shadow-md z-10">
                   <img 
                     src="/image.png" 
                     alt="Decorative Flower" 
                     className="w-full h-full object-contain" 
                   />
                </div>
                 <div className="absolute -top-15 left-[80%] md:-top-10 md:left-[70%] w-20 h-20 md:w-20 md:h-20 pointer-events-none drop-shadow-md z-10">
                   <img 
                     src="/image copy 2.png" 
                     alt="Decorative Flower" 
                     className="w-full h-full object-contain" 
                   />
                </div>
         <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight font-serif uppercase z-10 drop-shadow-sm">
           Ethnic Elegance
         </h2>
         <p className="text-gray-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mt-3 border-b-2 border-orange-200 pb-1 px-4 z-10">
           Festive Collection
         </p>
      </div>

      {/* Carousel Section */}
      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-8 pt-4 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {festiveData.map((item, i) => (
            <div key={i} className="snap-start shrink-0 flex flex-col items-center group/card cursor-pointer transform transition-transform duration-500 ">
              
              {/* Custom Arch Shaped Image Container */}
              <div 
                className={`relative rounded-xl w-[160px]  h-[220px] md:w-[220px] md:h-[300px] overflow-hidden ${item.bgColor} shadow-md border-b-4 border-orange-100 group-hover/card:border-orange-300 transition-colors duration-500`}
                // style={{ 
                //   backgroundImage: `url('https://i.pinimg.com/736x/4b/01/ee/4b01eea24fa2df008cbb2a93b312ad8e.jpg')`,
                //   backgroundSize: 'cover',
                //   backgroundPosition: 'center',
                //   borderTopLeftRadius: '110px', 
                //   borderTopRightRadius: '110px', 
                //   borderBottomLeftRadius: '16px', 
                //   borderBottomRightRadius: '16px' 
                // }}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 "
                />
                
                {/* Decorative Bottom Left PNG */}
                <div className="absolute -bottom-3 -left-3 w-20 h-20 md:w-20 md:h-20 pointer-events-none drop-shadow-md z-10">
                   <img 
                     src="/image copy 2.png" 
                     alt="Decorative Flower" 
                     className="w-full h-full object-contain" 
                   />
                </div>
                
              </div>
              
              {/* Text Content */}
              <div className="mt-5 text-center flex flex-col items-center">
                <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 group-hover/card:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <span className="mt-1 text-[11px] md:text-[13px] font-bold text-slate-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                  {item.offer}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
           onClick={() => scroll('left')}
           className="absolute left-[-20px] top-[40%] -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:text-orange-500 hover:scale-110 transition-all hidden md:flex opacity-0 group-hover:opacity-100 z-20"
        >
           <ChevronLeft size={24} strokeWidth={2.5} />
        </button>
        <button 
           onClick={() => scroll('right')}
           className="absolute right-[-20px] top-[40%] -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:text-orange-500 hover:scale-110 transition-all hidden md:flex opacity-0 group-hover:opacity-100 z-20"
        >
           <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
};

export default FashionFestiveCollection;
