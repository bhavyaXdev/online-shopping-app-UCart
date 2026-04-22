import React from "react";
import InteractiveHeroSlider from "../InteractiveHeroSlider";

const FashionSlider = () => {
  const editorialBanners = [
    {
      id: 1,
      preTitle: "SAY HI TO SUMMER!",
      title: "SUMMER'26",
      subTitle: "COLLECTION",
      tagline: "Special Sale",
      offer: "MIN. 50% OFF | LIMITED OFFERS",
      img: "https://i.pinimg.com/1200x/68/c5/d8/68c5d8a6313fda6066d51c017eea70ef.jpg",
      textPositionClass: "justify-end pb-8 md:pb-12 text-center items-center",
      innerAlignClass: "items-center",
      hasDivider: true,
      dividerClass: "mx-auto",
      textDark: true,
      titleClass: "font-serif tracking-widest italic !transform-none", // Keeping Georgia style for Slide 1
    },
    {
      id: 2,
      title: "Elegance in tradition",
      offer: "UP TO 40% OFF | NEW SEASON",
      img: "https://i.pinimg.com/736x/29/b9/f0/29b9f07570b508ca0e425d346f319ecf.jpg", // Fixed relative path
      hasBranding: true,
      showAction: true,
      textPositionClass: "justify-center pr-4 md:pr-10 text-right items-end",
      innerAlignClass: "items-end",
      stickerImg: "https://i.pinimg.com/736x/20/d8/40/20d840acd975af92ac6942a27010ed7b.jpg",
      stickerClass: "bg-white p-1 rounded-sm shadow-xl w-24 h-24 md:w-32 md:h-32 top-4 left-4 md:top-8 md:left-8 rotate-[5deg] z-30",
    },
    {
      id: 3,
      preTitle: "CLASSIC & REFINED",
      title: "PREMIUM MENSWEAR",
      tagline: "Sharp Essentials",
      offer: "UP TO 50% OFF",
      img: "https://i.pinimg.com/736x/da/8e/7b/da8e7bf98fc5983a6580dcf890ac877a.jpg",
      hasBranding: true,
      showAction: true,
      textPositionClass: "justify-end pb-12 pl-6 md:pb-16 md:pl-10 text-left items-start",
      innerAlignClass: "items-start",
    },
    {
      id: 4,
      preTitle: "STEP INTO STYLE",
      title: "EXCLUSIVE FOOTWEAR",
      offer: "FLAT 25% OFF | NEW DROPS",
      img: "https://i.pinimg.com/736x/69/09/07/690907fb82cacd6c9ff81cb4ee0bfe3f.jpg",
      hasBranding: true,
      showAction: true,
      textDark: true,
      textPositionClass: "justify-start pt-10 pr-6 md:pt-16 md:pr-10 text-right items-end",
      innerAlignClass: "items-end",
    },
    {
      id: 5,
      title: "Your perfect gown awaits.",
      offer: "UP TO 30% OFF | PREMIUM GEAR",
      img: "https://i.pinimg.com/1200x/8e/92/da/8e92daee5a40e5bf6cd11edba51caa27.jpg",
      hasBranding: true,
      showAction: true,
      textPositionClass: "justify-start pt-16 pl-6 md:pt-24 md:pl-12 text-left items-start",
      innerAlignClass: "items-start",
    }
  ];

  return <InteractiveHeroSlider slides={editorialBanners} />;
};

export default FashionSlider;
