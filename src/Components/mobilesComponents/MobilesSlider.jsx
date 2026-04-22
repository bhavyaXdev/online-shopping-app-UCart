import React from "react";
import InteractiveHeroSlider from "../InteractiveHeroSlider";

const MobilesSlider = () => {
const mobilesBanners = [
    {
      id: 1,
      preTitle: "TITANIUM",
      title: "IPHONE 15 PRO",
      subTitle: "",
      tagline: "Apple Intelligence",
      offer: "UP TO ₹6000 OFF | HDFC BANK",
      img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&fit=crop",
      textPositionClass: "justify-center text-center items-center",
      innerAlignClass: "items-center",
      dividerClass: "mx-auto",
      hasDivider: true,
      titleClass: "tracking-tight italic",
      textDark: false, 
    },
    {
      id: 2,
      preTitle: "EPIC GALAXY",
      title: "S24 ULTRA",
      subTitle: "GALAXY AI",
      tagline: "Ultra Power",
      offer: "FLAT ₹5000 OFF | LIMITED TIME",
      img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1200&fit=crop",
      imagePosition: "object-center",
      hasDarkOverlay: true,
      textPositionClass: "justify-center pr-10 text-right items-end",
      innerAlignClass: "items-end",
      dividerClass: "ml-auto",
      textDark: false, 
    },
    {
      id: 3,
      preTitle: "POWERFUL",
      title: "IPAD PRO M4",
      subTitle: "",
      tagline: "Impossible Thin",
      offer: "SPECIAL STUDENT PRICING",
      img: "https://i.pinimg.com/736x/df/56/c1/df56c1a9e9e8ab6bc91574d6b34c5152.jpg",
      imagePosition: "object-center",
      textPositionClass: "justify-center pl-10 text-left items-start",
      innerAlignClass: "items-start",
      dividerClass: "ml-0",
      textDark: false,
    },
    {
      id: 4,
      preTitle: "FAST & SMOOTH",
      title: "ONEPLUS 12",
      subTitle: "FLOWY EMERALD",
      tagline: "10 Years Anniversary",
      offer: "FREE AIRVOOC CHARGER",
      img: "https://i.pinimg.com/736x/f4/bb/c9/f4bbc937d02a9e17910d956c5c8d7fc4.jpg",
      imagePosition: "object-center",
      textPositionClass: "justify-center pr-10 text-right items-end",
      innerAlignClass: "items-end",
      dividerClass: "mr-0",
      textDark: false,
    },
    {
      id: 5,
      preTitle: "PURE GOOGLE",
      title: "PIXEL 8 PRO",
      subTitle: "",
      tagline: "Pro Camera",
      offer: "FLAT ₹10,000 DISCOUNT",
      img: "https://i.pinimg.com/736x/b6/6a/a2/b66aa2f16a7d61ce9e0de459f4b918e7.jpg",
      imagePosition: "object-center",
      textPositionClass: "justify-center pl-12 text-left items-start",
      innerAlignClass: "items-start",
      dividerClass: "ml-0",
      textDark: false,
    }
  ];

  return <InteractiveHeroSlider slides={mobilesBanners} />;
};

export default MobilesSlider;
