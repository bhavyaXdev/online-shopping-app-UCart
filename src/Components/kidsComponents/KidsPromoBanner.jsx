import React from "react";

const KidsPromoBanner = () => {
  const promos = [
    "Flat 30% OFF on Kids Collection",
    "Buy 2 Get 1 Free on Kids Wear",
    "New Arrivals Starting at ₹299"
  ];

  return (
    <section className="container mx-auto px-4 md:px-10 py-2 md:pt-0">
      <div className="bg-pink-100 py-2.5 md:py-3  border-t border-b  border-pink-200 overflow-hidden relative flex items-center w-full shadow-sm">
        <div className="flex items-center whitespace-nowrap animate-marquee">
          {/* Repeat enough times to fill screen seamlessly */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {promos.map((promo, idx) => (
                <React.Fragment key={`${i}-${idx}`}>
                  <span className="text-pink-600 font-bold text-[11px] md:text-sm tracking-widest uppercase">
                    {promo}
                  </span>
                  <span className="mx-4 md:mx-8 text-pink-300 text-[10px] md:text-xs">
                    ✦
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-25%); } /* Matches 4 repeating blocks */
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default KidsPromoBanner;
