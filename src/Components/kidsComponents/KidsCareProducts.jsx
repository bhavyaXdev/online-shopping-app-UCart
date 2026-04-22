import React from "react";
import { Heart } from "lucide-react";

const careData = [
  {
    title: "Lotions & Oils",
    desc: "Gentle nourishment",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=300",
    bg: "bg-[#e0f2fe]", // soft blue
    textColor: "text-sky-700",
  },
  {
    title: "Bath Essentials",
    desc: "Tear-free & mild",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=300",
    bg: "bg-[#fcf5cd]", // soft yellow
    textColor: "text-amber-700",
  },
  {
    title: "Diapers & Wipes",
    desc: "All-day comfort",
    img: "https://images.unsplash.com/photo-1620062758116-3e72dc08fd79?auto=format&fit=crop&q=80&w=300",
    bg: "bg-[#fae6e3]", // soft pink
    textColor: "text-rose-700",
  },
  {
    title: "Health & Safety",
    desc: "For absolute care",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300",
    bg: "bg-[#dcfce7]", // soft green
    textColor: "text-green-700",
  }
];

const KidsCareProducts = () => {
  return (
    <section className="container mx-auto px-4 md:px-10 py-6 md:py-8">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl md:text-2xl font-black text-gray-800 tracking-tight flex items-center">
          Baby Care Essentials
          <Heart className="text-rose-400 ml-2 fill-current" size={24} />
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {careData.map((item, index) => (
          <div 
            key={index} 
            className={`group cursor-pointer rounded-2xl ${item.bg} p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between overflow-hidden relative`}
          >
            {/* Soft decorative background circle */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full opacity-40 blur-2xl group-hover:blur-xl transition-all duration-500" />
            
            <div className="relative z-10">
              <h3 className={`text-sm md:text-lg font-black ${item.textColor} mb-1 tracking-tight`}>
                {item.title}
              </h3>
              <p className="text-[10px] md:text-xs text-slate-600 font-medium">
                {item.desc}
              </p>
            </div>

            <div className="mt-4 flex justify-end relative z-10">
              <div className="w-20 h-20 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-sm transform transition-transform duration-500 group-hover:scale-110">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <button className="mt-4 bg-white/60 hover:bg-white text-gray-800 text-[10px] md:text-xs font-bold py-2 md:py-2.5 px-4 rounded-full w-full transition-colors shadow-sm relative z-10">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidsCareProducts;
