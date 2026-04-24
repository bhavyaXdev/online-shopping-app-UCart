import React from 'react';
import InteractiveHeroSlider from '../InteractiveHeroSlider';

const BooksStationerySlider = () => {
  const heroSlides = [
    {
      id: 1,
      title: "Literary",
      subTitle: "Masterpieces",
      tagline: "The 2026 Collection",
      offer: "Up to 30% Off",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&fit=crop",
      textPositionClass: "justify-center",
      innerAlignClass: "items-start",
      showAction: true,
      hasBranding: true
    },
    {
      id: 2,
      title: "The Stationery",
      subTitle: "Edit",
      tagline: "Premium Artisanal Tools",
      offer: "Exclusive Selection",
      img: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1600&fit=crop",
      textPositionClass: "justify-center",
      innerAlignClass: "items-start",
      showAction: true,
      hasBranding: true,
      textDark: true
    },
    {
      id: 3,
      title: "Curated",
      subTitle: "Reading Nooks",
      tagline: "Create Your Sanctuary",
      offer: "Free Shipping",
      img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&fit=crop",
      textPositionClass: "justify-center",
      innerAlignClass: "items-start",
      showAction: true,
      hasBranding: true
    },
    {
      id: 4,
      title: "Artistic",
      subTitle: "Expressions",
      tagline: "Unleash Your Creativity",
      offer: "Flat 20% Off",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1600&fit=crop",
      textPositionClass: "justify-center",
      innerAlignClass: "items-start",
      showAction: true,
      hasBranding: true,
      textDark: true
    },
    {
      id: 5,
      title: "Personal",
      subTitle: "Journals",
      tagline: "Write Your Story",
      offer: "Buy 2 Get 1 Free",
      img: "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?q=80&w=1600&fit=crop",
      textPositionClass: "justify-center",
      innerAlignClass: "items-start",
      showAction: true,
      hasBranding: true
    }
  ];

  return <InteractiveHeroSlider slides={heroSlides} />;
};

export default BooksStationerySlider;
