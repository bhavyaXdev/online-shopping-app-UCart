import React from 'react';

const WatchesGiftingBanner = () => {
  return (
    <section className="container mx-auto px-4 md:px-10 py-8 md:py-12">
      <div className="relative w-full h-[240px] md:h-[320px] rounded-[32px] overflow-hidden bg-[#f3f4f6] group cursor-pointer shadow-xl shadow-gray-200/50 border border-white">
        {/* Decorative Grid/Pattern Background */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Content Wrapper */}
        <div className="relative h-full flex items-center justify-between px-8 md:px-20 z-10">
          {/* Left Content */}
          <div className="max-w-[60%] space-y-2 md:space-y-4">
            <p className="text-rose-500 font-black text-[10px] md:text-sm tracking-[0.3em] uppercase drop-shadow-sm">
              GIFTS THEY'LL LOVE
            </p>
            <h2 className="text-2xl md:text-5xl font-black text-gray-900 leading-tight tracking-tighter drop-shadow-md uppercase">
              PREMIUM GIFT SETS <br className="hidden md:block" />
              STARTING AT <span className="text-rose-600">₹1,999</span>
            </h2>
            <div className="pt-2 md:pt-4">
              <button className="px-6 md:px-8 py-2 md:py-3 bg-gray-900 text-white rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-rose-600 transition-all duration-500 shadow-lg group-hover:-translate-y-1">
                Shop Gifting
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative h-full flex items-end">
             <img 
               src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800" 
               alt="Gift Collection"
               className="h-[80%] md:h-[90%] object-contain transform group-hover:scale-105 transition-transform duration-1000 origin-bottom"
             />
             {/* Floating Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-200/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>

        {/* Shine Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[2000ms]"></div>
      </div>
    </section>
  );
};

export default WatchesGiftingBanner;
