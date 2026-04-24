import React from 'react';
import { Watch, Smartphone, Glasses, Gem, Briefcase, Zap } from 'lucide-react';

const CATEGORIES = [
  { name: "Luxury Watches", icon: Watch, count: "120+ Styles", color: "bg-amber-50 text-amber-600" },
  { name: "Smartwatches", icon: Smartphone, count: "80+ Variants", color: "bg-blue-50 text-blue-600" },
  { name: "Sunglasses", icon: Glasses, count: "200+ Designs", color: "bg-rose-50 text-rose-600" },
  { name: "Jewelry", icon: Gem, count: "150+ Pieces", color: "bg-purple-50 text-purple-600" },
  { name: "Wallets & Bags", icon: Briefcase, count: "90+ Options", color: "bg-emerald-50 text-emerald-600" },
  { name: "Tech Gear", icon: Zap, count: "60+ Items", color: "bg-indigo-50 text-indigo-600" },
];

const WatchesLibrary = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">The Accessory Library</h2>
            <p className="text-gray-500 text-sm mt-1">Curated collections for every style and occasion</p>
          </div>
          <button className="text-sm font-bold text-brand-primary hover:underline underline-offset-4">View All Collections</button>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory">
          {CATEGORIES.map((cat, idx) => (
            <div 
              key={idx}
              className="flex-none w-[160px] md:w-auto bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 cursor-pointer snap-start border border-transparent hover:border-gray-100"
            >
              <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                <cat.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-black text-gray-900 mb-1 group-hover:text-brand-primary transition-colors">{cat.name}</h3>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{cat.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchesLibrary;
