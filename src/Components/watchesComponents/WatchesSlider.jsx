import React from 'react';
import InteractiveHeroSlider from '../InteractiveHeroSlider';

const WatchesSlider = () => {
  const watchSlides = [
    {
      id: 1,
      title: "Timeless",
      subTitle: "Luxury",
      tagline: "Precision & Elegance",
      offer: "Up to 25% Off",
      img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1600&fit=crop",
      textPositionClass: "justify-center",
      innerAlignClass: "items-start",
      showAction: true,
      hasBranding: true
    },
    {
      id: 2,
      title: "Active",
      subTitle: "Performance",
      tagline: "Next-Gen Smartwatches",
      offer: "Free Silicone Strap",
      img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1600&fit=crop",
      textPositionClass: "justify-center",
      innerAlignClass: "items-start",
      showAction: true,
      hasBranding: true,
      textDark: true
    },
    {
      id: 3,
      title: "Classic",
      subTitle: "Chronographs",
      tagline: "Heritage in Every Tick",
      offer: "Exclusive Collection",
      img: "https://images.unsplash.com/photo-1547996160-81dfa63595dd?q=80&w=1600&fit=crop",
      textPositionClass: "justify-center",
      innerAlignClass: "items-start",
      showAction: true,
      hasBranding: true
    },
    {
      id: 4,
      title: "Minimalist",
      subTitle: "Style",
      tagline: "Beauty in Simplicity",
      offer: "Starting ₹2,499",
      img: "https://images.unsplash.com/photo-1508685096489-7a689bd20892?q=80&w=1600&fit=crop",
      textPositionClass: "justify-center",
      innerAlignClass: "items-start",
      showAction: true,
      hasBranding: true,
      textDark: true
    },
    {
      id: 5,
      title: "Essential",
      subTitle: "Accessories",
      tagline: "Straps, Cases & More",
      offer: "Buy 2 Get 1 Free",
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1600&fit=crop",
      textPositionClass: "justify-center",
      innerAlignClass: "items-start",
      showAction: true,
      hasBranding: true
    }
  ];

  return <InteractiveHeroSlider slides={watchSlides} />;
};

export default WatchesSlider;
