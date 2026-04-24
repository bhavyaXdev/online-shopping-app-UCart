import React from 'react';
import InteractiveHeroSlider from '../InteractiveHeroSlider';

const homeSlides = [
  {
    id: 1,
    title: "ELEGANT SPACES",
    tagline: "TRENDY HOME",
    offer: "UP TO 60% OFF | FURNITURE & MORE",
    img: "https://images.unsplash.com/photo-1616489953149-7597148542cd?q=80&w=1600&fit=crop",
    textPositionClass: "justify-end pb-12 md:pb-20",
  },
  {
    id: 2,
    title: "URBAN SANCTUARY",
    tagline: "PREMIUM COMFORT",
    offer: "MIN. 40% OFF | LUXURY BEDDING",
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1600&fit=crop",
    textPositionClass: "justify-end pb-12 md:pb-20",
  },
  {
    id: 3,
    title: "MODERN KITCHEN",
    tagline: "DESIGNER DINING",
    offer: "FLAT 50% OFF | COOKWARE SETS",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1600&fit=crop",
    textPositionClass: "justify-end pb-12 md:pb-20",
  },
  {
    id: 4,
    title: "GARDEN RETREAT",
    tagline: "OUTDOOR LIVING",
    offer: "UP TO 30% OFF | PATIO & DECOR",
    img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600&fit=crop",
    textPositionClass: "justify-end pb-12 md:pb-20",
  },
  {
    id: 5,
    title: "COZY CORNERS",
    tagline: "STUDY & DECOR",
    offer: "BUY 2 GET 1 | WALL ART & CLOCKS",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&fit=crop",
    textPositionClass: "justify-end pb-12 md:pb-20",
  },
  {
    id: 6,
    title: "BATHROOM BLISS",
    tagline: "WELLNESS & SPA",
    offer: "MIN. 20% OFF | LUXURIOUS TOWELS",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&fit=crop",
    textPositionClass: "justify-end pb-12 md:pb-20",
  }
];

const HomeLifestyleSlider = () => {
  return (
    <InteractiveHeroSlider 
      slides={homeSlides}
      autoPlayInterval={6000}
      height="60vh"
      overlayIntensity={0.3}
    />
  );
};

export default HomeLifestyleSlider;
