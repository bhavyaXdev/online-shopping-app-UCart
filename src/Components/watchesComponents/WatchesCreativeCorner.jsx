import React from 'react';
import { Palette, Layers, Scissors, Box } from 'lucide-react';

const WatchesCreativeCorner = () => {
  const items = [
    {
      title: "Leather Craft",
      desc: "Premium Straps",
      icon: <Layers size={24} />,
      color: "from-orange-400 to-amber-600",
      img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800"
    },
    {
      title: "Watch Care",
      desc: "Cleaning Kits",
      icon: <Layers size={24} />,
      color: "from-blue-400 to-indigo-600",
      img: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=800"
    },
    {
      title: "Collector Box",
      desc: "Storage Cases",
      icon: <Box size={24} />,
      color: "from-rose-400 to-red-600",
      img: "https://images.unsplash.com/photo-1582467029216-994199830337?q=80&w=800"
    },
    {
      title: "Smart Sync",
      desc: "Charging Hubs",
      icon: <Layers size={24} />,
      color: "from-emerald-400 to-teal-600",
      img: "https://images.unsplash.com/photo-1544117518-2b1025078512?q=80&w=800"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 text-center md:text-left gap-4">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">The Collector's Corner</h2>
            <p className="text-gray-500 font-medium mt-1 uppercase tracking-[0.2em] text-[10px]">Care • Customization • Storage</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Expert Advice Available</span>
          </div>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="flex-none w-[280px] md:w-auto group relative h-[360px] rounded-[32px] overflow-hidden snap-center cursor-pointer shadow-xl shadow-gray-200/50"
            >
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-all duration-500" />
              
              <div className="absolute top-6 left-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  {item.icon}
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-black text-white leading-none mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm font-medium tracking-wide uppercase">{item.desc}</p>
                <button className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:text-gray-900">
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchesCreativeCorner;
