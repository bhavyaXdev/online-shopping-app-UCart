import React from "react";
import { BookOpen } from "lucide-react";

const KidsSchoolNecessities = () => {
  return (
    <section className="container mx-auto px-4 md:px-10 py-8 md:py-12">
      {/* Banner Heading */}
      <div className="relative w-full h-[160px] md:h-[300px] mb-0 md:mb-16 rounded-2xl md:rounded-3xl overflow-hidden shadow-md group">
        <img 
          src="https://i.pinimg.com/736x/26/e7/18/26e718edd5134087b1b4dabfc20b41fb.jpg" 
          alt="Back to School Banner" 
          className="w-full h-full object-cover object-center " 
        />
        
        {/* Cute kid cutout placed on the right inside the banner */}
        <div className="absolute right-2 md:right-10 bottom-0 h-[95%] pointer-events-none z-10 flex justify-end">
           <img src="/school kid.png" alt="Happy student" className="h-full object-contain object-bottom drop-shadow-2xl" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent flex flex-col justify-center px-6 md:px-16 text-left z-20">
           <span className="text-yellow-400 font-bold text-[10px] md:text-sm tracking-[0.2em] uppercase mb-2 drop-shadow-md">
             Ready, Set, Learn!
           </span>
           <h2 className="text-xl md:text-2xl font-black text-white uppercase drop-shadow-lg mb-2">
           School Ready Styles Starting at ₹299
           </h2>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 hidden">
        
        {/* Large Featured Card (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 relative h-[250px] md:h-[400px] rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500">
          <img 
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800" 
            alt="Backpacks" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0  flex flex-col justify-center p-6 md:p-10">
            <span className="bg-yellow-400 text-yellow-950 text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full w-max mb-3">Best Sellers</span>
            <h3 className="text-white text-2xl md:text-4xl font-black mb-2">Trendy Backpacks</h3>
            <p className="text-white/90 text-sm md:text-base max-w-sm mb-6 font-medium">Spacious, durable, and stylish bags for every grade.</p>
            <button className="bg-white text-blue-900 font-bold text-xs md:text-sm px-6 py-2.5 rounded-full w-max hover:bg-blue-50 transition-colors shadow-md">
              Shop Bags
            </button>
          </div>
        </div>

        {/* Vertical Stack of 2 Smaller Cards */}
        <div className="flex flex-col gap-4 md:gap-6">
          
          <div className="relative h-[200px] md:h-[188px] rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500">
            <img 
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400" 
              alt="Stationery" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
              <h3 className="text-white text-lg md:text-xl font-bold">Stationery Kits</h3>
              <p className="text-white/80 text-xs font-medium">Notebooks, pens & more</p>
            </div>
          </div>

          <div className="relative h-[200px] md:h-[188px] rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500">
            <img 
              src="https://images.unsplash.com/photo-1602123512165-2766ecadfb29?auto=format&fit=crop&q=80&w=400" 
              alt="Lunch Boxes" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
               <h3 className="text-white text-lg md:text-xl font-bold">Lunch Boxes & Bottles</h3>
               <p className="text-white/80 text-xs font-medium">Keep food fresh</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default KidsSchoolNecessities;
