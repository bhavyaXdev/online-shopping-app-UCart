import React from "react";
import InteractiveHeroSlider from "../InteractiveHeroSlider";

const KidsSlider = () => {
  const kidsBanners = [
    {
      id: 1,
      title: "SUMMER FUN",
      subTitle: "COLLECTION",
      tagline: "LITTLE WONDERS",
      offer: "MIN. 40% OFF | NEW ARRIVALS",
      img: "https://i.pinimg.com/736x/47/b5/c4/47b5c46e18bb1e11ba3d83686a1ea00b.jpg",
      textPositionClass: "justify-end pb-8 md:pb-12 text-center items-center",
      innerAlignClass: "items-center",
      dividerClass: "mx-auto",
      hasDivider: true,
      textDark: true,
      titleClass: "font-serif tracking-wide !transform-none", // Simulating the Georgia feel
    },
    {
      id: 2,
      title: "Playful Outfits",
      tagline: "TRENDY KIDS",
      offer: "UP TO 50% OFF | TOPS & TEES",
      img: "https://i.pinimg.com/736x/08/ef/bc/08efbc01f2105c29804f2a9b52d002f0.jpg"
    },
    {
      id: 3,
      title: "BABY ESSENTIALS",
      tagline: "CUTE & COMFY",
      offer: "UP TO 60% OFF | ROMPERS & MORE",
      img: "https://i.pinimg.com/736x/53/0c/9e/530c9e4778f8a721995e744d573ad352.jpg"
    },
    {
      id: 4,
      title: "ETHNIC WEAR",
      tagline: "FESTIVE READY",
      offer: "FLAT 30% OFF | PARTY STYLES",
      img: "https://i.pinimg.com/1200x/71/98/27/71982740d7fd963d481ced0ab0c40fb6.jpg"
    },
    {
      id: 5,
      title: "Tiny Kicks",
      tagline: "KIDS FOOTWEAR",
      offer: "UP TO 40% OFF | SHOES & SANDALS",
      img: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return <InteractiveHeroSlider slides={kidsBanners} containerClass="md:py-15" />;
};



export default KidsSlider;
