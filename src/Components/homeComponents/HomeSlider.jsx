import React from "react";
import InteractiveHeroSlider from "../InteractiveHeroSlider";

const HomeSlider = () => {
  const homeBanners = [
    {
      id: 1,
      preTitle: "NEXT-GEN TECH",
      title: "IPHONE 16 PRO",
      subTitle: "BEYOND FAST",
      tagline: "Apple Intelligence",
      offer: "SPECIAL LAUNCH OFFER | UP TO ₹10,000 OFF",
      img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&fit=crop",
      textPositionClass: "justify-center text-center items-center",
      innerAlignClass: "items-center",
      dividerClass: "mx-auto",
      hasDivider: true,
      hasBranding: true,
      showAction: false,
      titleClass: "tracking-tight italic font-serif",
      textDark: false,
    },
    {
      id: 2,
      preTitle: "LUXURY EDIT",
      title: "PREMIUM ESSENTIALS",
      tagline: "CURATED STYLE",
      offer: "FLAT 40% OFF | NEW SEASON",
      img: "https://i.pinimg.com/1200x/68/c5/d8/68c5d8a6313fda6066d51c017eea70ef.jpg",
      textPositionClass: "justify-end pb-8 md:pb-12 text-center items-center",
      innerAlignClass: "items-center",
      hasDivider: true,
      dividerClass: "mx-auto",
      textDark: true,
      hasBranding: true,
      showAction: false,
      titleClass: "font-serif tracking-widest !transform-none",
    },
    {
      id: 3,
      preTitle: "ULTIMATE AUDIO",
      title: "MASTER BUDS 2",
      subTitle: "SOUND BY BOSE",
      tagline: "PRO PERFORMANCE",
      offer: "FROM ₹6,999 | CHANCE TO WIN IPHONE 16",
      img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop",
      hasBranding: true,
      showAction: false,
      textPositionClass: "justify-center pr-10 text-right items-end",
      innerAlignClass: "items-end",
      dividerClass: "ml-auto",
      textDark: false,
    },
    {
      id: 4,
      preTitle: "ELEVATED LIVING",
      title: "MODERN INTERIORS",
      tagline: "HOME TRANSFORMATION",
      offer: "UP TO 50% OFF | FURNITURE & DECOR",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
      hasBranding: true,
      showAction: false,
      textDark: true,
      textPositionClass: "justify-center pl-10 text-left items-start",
      innerAlignClass: "items-start",
      dividerClass: "mr-auto",
      // stickerImg: "https://i.pinimg.com/736x/20/d8/40/20d840acd975af92ac6942a27010ed7b.jpg",
      stickerClass: "bg-white p-1 rounded-sm shadow-xl w-20 h-20 md:w-28 md:h-28 top-4 right-4 md:top-8 md:right-8 rotate-[-5deg] z-30",
    },
    {
      id: 5,
      preTitle: "GAMING POWERHOUSE",
      title: "ROG LAPTOPS",
      subTitle: "RTX 40 SERIES",
      tagline: "FOR THOSE WHO DARE",
      offer: "UP TO ₹30,000 EXCHANGE BONUS",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
      hasBranding: true,
      showAction: false,
      textPositionClass: "justify-end pb-12 pl-6 md:pb-16 md:pl-10 text-left items-start",
      innerAlignClass: "items-start",
      textDark: false,
    }
  ];

  return (
    <InteractiveHeroSlider 
      slides={homeBanners} 
    />
  );
};

export default HomeSlider;
