import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Clock } from 'lucide-react';

const WatchesHighlights = () => {
  const highlights = [
    {
      title: "Authentic Only",
      desc: "100% Original Products",
      icon: <ShieldCheck size={32} className="text-amber-500" />,
      bg: "bg-amber-50"
    },
    {
      title: "Express Delivery",
      desc: "In as little as 24h",
      icon: <Truck size={32} className="text-blue-500" />,
      bg: "bg-blue-50"
    },
    {
      title: "Easy Returns",
      desc: "15-day stress-free",
      icon: <RotateCcw size={32} className="text-rose-500" />,
      bg: "bg-rose-50"
    },
    {
      title: "Extended Warranty",
      desc: "Extra protection",
      icon: <Clock size={32} className="text-emerald-500" />,
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar">
          {highlights.map((item, idx) => (
            <div 
              key={idx}
              className={`${item.bg} flex-none w-[260px] md:w-auto p-8 rounded-[32px] flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500 snap-center`}
            >
              <div className="mb-4 transform group-hover:rotate-12 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchesHighlights;
