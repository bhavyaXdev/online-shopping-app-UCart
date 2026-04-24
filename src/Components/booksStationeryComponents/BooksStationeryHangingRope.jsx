import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Bookmark, Sparkles, Coffee, Heart } from 'lucide-react';

const HangingCard = ({ x, y, delay, title, description, footer, footerIcon: FooterIcon, icon: Icon, tilt = 0 }) => (
  <motion.div
    initial={{ rotate: tilt }}
    animate={{ 
      rotate: [tilt - 1, tilt + 1, tilt - 1],
      y: [0, 8, 0]
    }}
    transition={{ 
      duration: 8, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: delay
    }}
    className="absolute flex flex-col items-center pointer-events-auto group scale-[0.5] sm:scale-[0.65] md:scale-[0.85] -translate-x-1/2 origin-top"
    style={{ left: x, top: y }}
  >
    {/* Realistic String Loop Image */}
    <div className="w-16 md:w-32 h-20 -mb-8 relative z-0 flex items-center justify-center">
      <img
        src="/cardString2.png"
        alt="String Loop"
        className="w-full h-full object-contain opacity-90"
      />
    </div>

    {/* The Card */}
    <div className="w-[280px] bg-[#FDFCFB] border-[4px] border-[#D1E1EB] rounded-[32px] p-8 shadow-[0_15px_45px_rgba(209,225,235,0.4)] relative overflow-hidden flex flex-col items-center">
      {/* Dashed Inner Border */}
      <div className="absolute inset-3 border-2 border-dashed border-[#B8CEDC] rounded-[24px] pointer-events-none" />

      {/* String Loop Hole at Top */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-stone-50 border-2 border-[#D1E1EB] shadow-inner" />

      {/* Icon in Circular Container */}
      <div className="relative mb-4 mt-2">
        <div className="absolute -top-2 -right-2 w-2 h-2 bg-blue-300 rounded-full animate-pulse" />
        <div className="absolute top-4 -left-3 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-60" />

        <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center shadow-sm">
          <div className="w-18 h-18 bg-[#EBF3F8] rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center">
              <Icon className="text-white w-10 h-10" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-xl md:text-2xl font-black text-stone-800 md:mb-3 tracking-tight text-center">
        {title}
      </h3>
      <p className="text-[13px] hidden md:block text-stone-500 text-center leading-[1.6] mb-5 font-medium px-2">
        {description}
      </p>

      {/* Dashed Divider */}
      <div className="w-full border-t-2 border-[#D1E1EB]/60 border-dashed mb-3" />

      {/* Footer */}
      <div className="flex items-center gap-2.5 text-[#3B82F6]">
        <FooterIcon size={18} className="stroke-[2.5px]" />
        <span className="md:text-[11px] text-[8px] font-black uppercase tracking-[0.15em]">
          {footer}
        </span>
      </div>
    </div>
  </motion.div>
);

const BooksStationeryHangingRope = () => {
  const cards = [
    {
      id: 1,
      title: "Curated Gems",
      description: "Handpicked titles from best-selling authors and hidden literary treasures.",
      footer: "Literary Excellence",
      footerIcon: Sparkles,
      icon: BookOpen,
      x: "15%",
      y: "32%",
      delay: 0,
      tilt: 4,
    },
    {
      id: 2,
      title: "Premium Tools",
      description: "Fine pens and artisanal notebooks to inspire your daily creative flow.",
      footer: "Creative Flow",
      footerIcon: Coffee,
      icon: PenTool,
      x: "50%",
      y: "38%",
      delay: 0.8,
      tilt: -2,
    },
    {
      id: 3,
      title: "Reader's Choice",
      description: "Our community's most-loved collections across all genres.",
      footer: "Top Rated",
      footerIcon: Heart,
      icon: Bookmark,
      x: "85%",
      y: "34%",
      delay: 1.5,
      tilt: -6,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden flex justify-center pt-0 pb-20 -mt-25 md:-mt-40 lg:-mt-60 select-none">
      <div className="relative w-full max-w-[1600px] mx-auto">
        {/* The Curved Hanging Rope Image */}
        <motion.div
          animate={{
            rotate: [-0.2, 0.2, -0.2],
            y: [0, 4, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full flex justify-center relative z-10"
        >
          <img
            src="/rope.png"
            alt="Hanging Rope"
            className="w-full h-auto object-contain object-top drop-shadow-xl pointer-events-none opacity-90"
          />

          {/* Hanging Cards Container */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {cards.map((card) => (
              <HangingCard key={card.id} {...card} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BooksStationeryHangingRope;
