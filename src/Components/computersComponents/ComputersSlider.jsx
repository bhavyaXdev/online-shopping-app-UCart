import React from "react";
import InteractiveHeroSlider from "../InteractiveHeroSlider";

const ComputersSlider = () => {
const computersBanners = [
    {
      id: 1,
      preTitle: "M3 POWER",
      title: "MACBOOK PRO",
      subTitle: "",
      tagline: "Mind-blowing. Head-turning.",
      offer: "UP TO ₹10,000 OFF | HDFC BANK",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&fit=crop",
      textPositionClass: "justify-center text-center items-center",
      innerAlignClass: "items-center",
      dividerClass: "mx-auto",
      hasDivider: true,
      titleClass: "tracking-tight italic",
      textDark: false, 
    },
    {
      id: 2,
      preTitle: "ULTIMATE GAMING",
      title: "ROG STRIX",
      subTitle: "SCAR 18",
      tagline: "Beat the Best",
      offer: "FREE GAMING MOUSE",
      img: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1200&fit=crop",
      imagePosition: "object-center",
      hasDarkOverlay: true,
      textPositionClass: "justify-center pr-10 text-right items-end",
      innerAlignClass: "items-end",
      dividerClass: "ml-auto",
      textDark: false, 
    },
    {
      id: 3,
      preTitle: "PRODUCTIVITY",
      title: "DELL XPS 15",
      subTitle: "",
      tagline: "InfinityEdge Display",
      offer: "SPECIAL STUDENT PRICING",
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&fit=crop",
      imagePosition: "object-center",
      textPositionClass: "justify-center pl-10 text-left items-start",
      innerAlignClass: "items-start",
      dividerClass: "ml-0",
      textDark: true,
    },
    {
      id: 4,
      preTitle: "NEXT-GEN PLAY",
      title: "PS5 CONSOLE",
      subTitle: "SLIM EDITION",
      tagline: "Play Has No Limits",
      offer: "FLAT ₹5000 OFF",
      img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1200&fit=crop",
      textPositionClass: "justify-center pr-10 text-right items-end",
      innerAlignClass: "items-end",
      textDark: false,
    },
    {
      id: 5,
      preTitle: "PRECISION",
      title: "LOGITECH MX",
      subTitle: "MASTER 3S",
      tagline: "Master Your Flow",
      offer: "10% OFF ON BUNDLES",
      img: "https://images.unsplash.com/photo-1625773183042-270528193e5a?q=80&w=1200&fit=crop",
      textPositionClass: "justify-center pl-10 text-left items-start",
      innerAlignClass: "items-start",
      textDark: true,
    }
  ];

  return <InteractiveHeroSlider slides={computersBanners} />;
};
export default ComputersSlider;
