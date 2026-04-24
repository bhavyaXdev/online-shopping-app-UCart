import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Zap,
  Package,
  Lock,
} from "lucide-react";

const HangingCard = ({
  x,
  y,
  delay,
  title,
  description,
  footer,
  footerIcon: FooterIcon,
  icon: Icon,
  tilt = 0,
}) => (
  <motion.div
    initial={{ rotate: tilt }}
    animate={{
      rotate: [tilt - 1.2, tilt + 1.2, tilt - 1.2],
      y: [0, 6, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    className="absolute flex flex-col items-center pointer-events-auto group scale-[0.5] sm:scale-[0.65] md:scale-[0.85] -translate-x-1/2 origin-top"
    style={{ left: x, top: y }}
  >
    {/* Realistic String Loop Image */}
    <div className="w-16 h-26 ml-10 md:w-32 md:h-32 md:ml-20 -mb-8 relative z-0 flex items-center justify-center">
      <img
        src="/cardString2.png"
        alt="String Loop"
        className="w-full h-full object-contain opacity-90"
      />
    </div>

    {/* The Card */}
    <div className="w-40 h-55 md:w-[280px] md:h-auto bg-[#FFFBF8] border-[4px] border-[#f89ba7] rounded-[32px] p-8 shadow-[0_15px_45px_rgba(250,220,217,0.4)] relative overflow-hidden flex flex-col items-center">
      {/* Dashed Inner Border */}
      <div className="absolute inset-3 border-2 border-dashed border-[#fc7e8f] rounded-[24px] pointer-events-none" />

      {/* String Loop Hole at Top */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-5  h-5 rounded-full bg-stone-50 border-2 border-[#FADCD9] shadow-inner" />

      {/* Icon in Pink Circle with Sparkles */}
      <div className="relative mb-4 mt-2">
        {/* Sparkle Details */}
        <div className="absolute -top-2 -right-2 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
        <div className="absolute top-4 -left-3 w-1.5 h-1.5 bg-pink-200 rounded-full opacity-60" />

        <div className="w-8 h-8 md:w-20 md:h-20 rounded-full bg-pink-50 flex items-center justify-center shadow-sm">
          {/* <Icon className="text-pink-500 w-9 h-9 bg-[#fc7e8f] stroke-[1.5px]" /> */}
          {/* Outer soft circle */}
          <div className="w-10 h-10 md:w-26 md:h-22 p-1 bg-[#FEE2E2] rounded-full flex items-center justify-center">
            {/* Inner darker circle */}
            <div className="w-10 h-10 p-1 md:p-0 md:w-20 md:h-20 bg-[#f86376] rounded-full flex items-center justify-center">
              {/* Icon */}
              <Icon className="text-white w-10 h-10 md:w-14 md:h-14" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-lg  text-center md:text-2xl font-black text-stone-800 md:mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-[13px] hidden md:block text-stone-500 text-center leading-[1.6] mb-5 font-medium px-2">
        {description}
      </p>

      {/* Dashed Divider */}
      <div className="w-full border-t-2 border-[#FADCD9]/60 border-dashed mb-3" />

      {/* Footer */}
      <div className="flex items-center gap-2.5 text-[#f86376]">
        <FooterIcon size={18} className="stroke-[2.5px]" />
        <span className="md:text-[11px] text-[8px] font-black uppercase tracking-[0.15em]">
          {footer}
        </span>
      </div>
    </div>
  </motion.div>
);

const HealthBeautyHangingRope = () => {
  const cards = [
    {
      id: 1,
      title: "Genuine Quality",
      description: "Authentic products crafted for durability and performance.",
      footer: "Premium Selection",
      footerIcon: Zap,
      icon: ShieldCheck,
      x: "25%",
      y: " 46%",
      delay: 0,
      tilt: 4,
    },
    {
      id: 2,
      title: "Fast Delivery",
      description: "Quick dispatch and on-time delivery, right when you need it.",
      footer: "On-Time Service",
      footerIcon: Package,
      icon: Truck,
      x: "50%",
      y: "48%",
      delay: 0.8,
      tilt: -2,
    },
    {
      id: 3,
      title: "Secure Payments",
      description: "Multiple payment options with advanced security you can trust.",
      footer: "Encrypted Transactions",
      footerIcon: Lock,
      icon: CreditCard,
      x: "76%",
      y: "43%",
      delay: 1.5,
      tilt: -6,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden flex justify-center pt-0 pb-28 md:pb-20 -mt-25 md:-mt-40 lg:-mt-60 select-none">
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

          {/* Hanging Cards Container - Tied to rope's motion */}
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

export default HealthBeautyHangingRope;
