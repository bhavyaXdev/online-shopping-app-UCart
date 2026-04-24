import React from 'react';
import { Gift, Package, Calendar, Sparkles } from 'lucide-react';

const WatchesGifting = () => {
  const giftingItems = [
    {
      id: 1,
      title: "Gift Sets",
      subtitle: "Curated Pairings",
      offer: "Save up to 15%",
      img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800",
      color: "bg-linear-to-r from-rose-500 to-pink-600",
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "Premium Combos",
      subtitle: "Watch + Accessories",
      offer: "Extra 10% Off",
      img: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=800",
      color: "bg-linear-to-r from-amber-500 to-orange-600",
      badge: "Elite Choice"
    },
    {
      id: 3,
      title: "Occasion Picks",
      subtitle: "Birthday & Anniversaries",
      offer: "Free Gift Wrap",
      img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800",
      color: "bg-linear-to-r from-blue-500 to-indigo-600",
      badge: "Specials"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 shadow-sm">
                <Gift size={28} strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">Gifting Collection</h2>
            </div>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              Make every moment unforgettable with our curated luxury pairings and custom gift solutions.
            </p>
          </div>
          <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-rose-600 transition-all duration-500 shadow-xl hover:shadow-rose-600/20 flex items-center gap-3 group">
            EXPLORE GIFTING
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-10 md:pb-0 snap-x snap-mandatory no-scrollbar px-2">
          {giftingItems.map((item) => (
            <div 
              key={item.id}
              className="flex-none w-[300px] md:w-auto bg-white rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-gray-100 p-3 group cursor-pointer snap-center hover:shadow-2xl transition-all duration-700"
            >
              {/* Image Section */}
              <div className="relative h-[280px] md:h-[320px] rounded-[32px] overflow-hidden mb-0">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                
                {/* Badge */}
                <div className="absolute top-5 right-5 z-20">
                  <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-black text-gray-900 uppercase tracking-[0.1em] shadow-lg">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Promotional Banner Overlap */}
              <div className={`relative -mt-10 mx-6 z-10 ${item.color} py-4 px-6 rounded-2xl shadow-2xl text-center overflow-hidden group-hover:scale-[1.05] transition-transform duration-500`}>
                <div className="absolute top-0 left-0 w-full h-full bg-white/20 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms]" />
                <span className="text-white text-xs md:text-sm font-black uppercase tracking-[0.2em] drop-shadow-sm relative z-10">
                  {item.offer}
                </span>
              </div>

              {/* Text Content */}
              <div className="py-8 px-6 text-center">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight group-hover:text-rose-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] mt-2">
                   {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchesGifting;
