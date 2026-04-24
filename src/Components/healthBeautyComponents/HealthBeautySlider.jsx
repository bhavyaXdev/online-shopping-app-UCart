import React from 'react';
import InteractiveHeroSlider from '../InteractiveHeroSlider';

const beautySlides = [
  {
    id: 1,
    title: "PURE RADIANCE",
    tagline: "ORGANIC SKINCARE",
    offer: "UP TO 40% OFF | GLOW ESSENTIALS",
    img: "https://images.unsplash.com/photo-1570172619380-da906788e000?q=80&w=1600&fit=crop",
    textPositionClass: "justify-end pb-12 md:pb-20",
    textDark: true
  },
  {
    id: 2,
    title: "VIBRANT LOOKS",
    tagline: "PREMIUM MAKEUP",
    offer: "BUY 2 GET 1 | LUXURY PALETTES",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&fit=crop",
    textPositionClass: "justify-end pb-12 md:pb-20",
  },
  {
    id: 3,
    title: "ZEN WELLNESS",
    tagline: "BATH & BODY",
    offer: "FLAT 30% OFF | ESSENTIAL OILS",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&fit=crop",
    textPositionClass: "justify-end pb-12 md:pb-20",
  },
  {
    id: 4,
    title: "SILK & SHINE",
    tagline: "ADVANCED HAIRCARE",
    offer: "UP TO 50% OFF | PRO REPAIR",
    img: "https://images.unsplash.com/photo-1527799822367-a233b47b0ee1?q=80&w=1600&fit=crop",
    textPositionClass: "justify-end pb-12 md:pb-20",
    textDark: true
  },
  {
    id: 5,
    title: "MODERN GROOM",
    tagline: "MEN'S ESSENTIALS",
    offer: "FLAT ₹500 OFF | STYLING KITS",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1600&fit=crop",
    textPositionClass: "justify-end pb-12 md:pb-20",
  }
];

const HealthBeautySlider = () => {
  return (
    <InteractiveHeroSlider 
      slides={beautySlides}
      autoPlayInterval={5000}
      height="55vh"
    />
  );
};

export default HealthBeautySlider;
