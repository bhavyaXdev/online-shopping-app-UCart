import React from 'react';

const MobilesPromoBanner = () => {
  return (
    <div className="w-full bg-[#f8f9fa] pt-4 md:pt-6">
      <div className="container mx-auto px-4 md:px-10">
        <div className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl overflow-hidden py-2 md:py-2.5 shadow-sm">
          <div className="flex animate-[scroll_20s_linear_infinite] w-max items-center font-mono text-[11px] md:text-sm">
            {/* Banner Items duplicated for infinite scroll */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex shrink-0">
                <span className="mx-6 md:mx-10 font-bold text-white tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  Flat ₹5000 Instant Discount on HDFC Cards
                </span>
                <span className="mx-6 md:mx-10 text-gray-500">•</span>
                <span className="mx-6 md:mx-10 font-bold text-white tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Exchange Bonus Up to ₹12000
                </span>
                <span className="mx-6 md:mx-10 text-gray-500">•</span>
                <span className="mx-6 md:mx-10 font-bold text-white tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                  No Cost EMI up to 12 Months
                </span>
                <span className="mx-6 md:mx-10 text-gray-500">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `
      }} />
    </div>
  );
};

export default MobilesPromoBanner;
