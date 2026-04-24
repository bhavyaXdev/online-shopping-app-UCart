import React from 'react';
import { Clock, Cpu, Zap, Crown, ArrowRight } from 'lucide-react';

const WatchesShowcase = () => {
  const watchTypes = [
    {
      title: "Analog",
      subtitle: "Classic Heritage",
      icon: <Clock size={24} />,
      img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800",
      color: "from-amber-500/20 to-orange-600/20",
      borderColor: "border-amber-200/50",
      textColor: "text-amber-900",
      badge: "Best Seller",
      offer: "Flat 20% Off"
    },
    {
      title: "Digital",
      subtitle: "Retro Tech",
      icon: <Zap size={24} />,
      img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800",
      color: "from-blue-500/20 to-indigo-600/20",
      borderColor: "border-blue-200/50",
      textColor: "text-blue-900",
      badge: "Trending",
      offer: "Extra 10% Off"
    },
    {
      title: "Smart",
      subtitle: "Future Ready",
      icon: <Cpu size={24} />,
      img: "https://images.unsplash.com/photo-1508685096489-7a689bd20892?q=80&w=800",
      color: "from-emerald-500/20 to-teal-600/20",
      borderColor: "border-emerald-200/50",
      textColor: "text-emerald-900",
      badge: "New Arrival",
      offer: "Free Strap Kit"
    },
    {
      title: "Luxury",
      subtitle: "Elite Craft",
      icon: <Crown size={24} />,
      img: "https://images.unsplash.com/photo-1547996160-81dfa63595dd?q=80&w=800",
      color: "from-rose-500/20 to-red-600/20",
      borderColor: "border-rose-200/50",
      textColor: "text-rose-900",
      badge: "Limited Edition",
      offer: "Up to 30% Off"
    }
  ];

  return (
    <section className="py-20 bg-[#fae6d1] overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
               <span className="text-3xl">⌚</span>
               <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase">Watches</h2>
            </div>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              From timeless mechanical marvels to the cutting-edge of wearable tech. 
              Find the piece that speaks to your journey.
            </p>
          </div>
          <button className="group flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-brand-primary transition-all duration-500 shadow-xl hover:shadow-brand-primary/20">
            VIEW FULL COLLECTION
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 md:pb-5 snap-x snap-mandatory no-scrollbar px-2">
          {watchTypes.map((type, idx) => (
            <div 
              key={idx}
              className="flex-none w-[280px] md:w-auto bg-white rounded-[32px] shadow-md border border-gray-100 p-2.5 group cursor-pointer snap-center hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Part */}
              <div className="relative h-[240px] md:h-[280px] p-3 rounded-[24px] overflow-hidden mb-0">
                <img 
                  src={type.img} 
                  alt={type.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" /> */}
                
                {/* Badge inside image top-right */}
                {type.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-black text-gray-900 uppercase tracking-widest shadow-sm">
                      {type.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Offer Banner - Modern & Attractive */}
              <div className={`relative  mx-4 z-10 bg-linear-to-r ${type.color.replace('/20', '')} py-2 px-4 rounded-xl shadow-lg text-center overflow-hidden group-hover:scale-[1.05] transition-transform duration-500`}>
                <div className="absolute top-0 left-0 w-full h-full bg-white/20 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms]" />
                <span className="text-gray-700  text-[10px] md:text-xs font-black uppercase tracking-[0.2em] drop-shadow-sm relative z-10">
                  {type.offer}
                </span>
              </div>

              {/* Content Part - Bottom */}
              <div className="py-5 px-4 text-center">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-1.5">
                   {type.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchesShowcase;
