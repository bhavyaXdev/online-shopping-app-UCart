import React from 'react';
import { ChevronRight } from 'lucide-react';

const EssentialCard = ({ title, img, offer }) => (
  <div className="group relative flex flex-col items-center gap-4 cursor-pointer">
    {/* Image Container */}
    <div className={`relative w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105`}>
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
    </div>

    {/* Text Label */}
    <div className="flex flex-col items-center text-center">
      <h3 className="text-sm md:text-lg font-black text-stone-800 tracking-tight transition-colors group-hover:text-blue-600">
        {title}
      </h3>
      {offer && (
        <span className="text-[10px] md:text-xs font-black text-orange-500 uppercase tracking-widest mt-1">
          {offer}
        </span>
      )}
      <div className="flex items-center gap-1 text-[10px] md:text-xs font-bold text-stone-400 uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        Shop Now <ChevronRight size={14} />
      </div>
    </div>
  </div>
);

const BooksStationeryEssentials = () => {
  const essentialCategories = [
    {
      id: 1,
      title: "Notebooks & Diaries",
      img: "https://i.pinimg.com/736x/99/b0/3a/99b03aa266732782f1543ccb4c7452fd.jpg",
      offer: "Up to 30% Off"
    },
    {
      id: 2,
      title: "Pens & Pencils",
      img: "https://i.pinimg.com/736x/2c/43/66/2c436673f502290b987b5c50050d31a0.jpg",
      offer: "Buy 2 Get 1 Free"
    },
    {
      id: 3,
      title: "Highlighters & Markers",
      img: "https://i.pinimg.com/736x/31/db/74/31db742a727487c18c732ab7e9711348.jpg",
      offer: "Starting at ₹99"
    },
    {
      id: 4,
      title: "Art & Craft Supplies",
      img: "https://i.pinimg.com/1200x/de/d2/94/ded294f474311e72aacea62997d58dad.jpg",
      offer: "Flat 20% Off"
    }
  ];

  return (
    <section className="container mx-auto px-4 md:px-10 py-12 md:py-12 bg-[#fcefef] md:rounded-2xl my-10">
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
        <span className="text-blue-600 font-black text-xs md:text-sm uppercase tracking-[0.4em] mb-4">
          The Stationery Shop
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tighter leading-tight">
          Everyday <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Essentials</span> for <br className="hidden md:block" />
          Your Creative Workspace
        </h2>
        <div className="w-20 h-1 bg-blue-600 mt-6 rounded-full" />
      </div>

      <div className="flex overflow-x-auto md:justify-center gap-8 md:gap-12 pb-0 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory px-4">
        {essentialCategories.map((cat) => (
          <div key={cat.id} className="snap-center">
            <EssentialCard {...cat} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BooksStationeryEssentials;
