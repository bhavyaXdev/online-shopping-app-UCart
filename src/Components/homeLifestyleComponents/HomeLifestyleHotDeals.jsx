import React from 'react';
import { Tag } from 'lucide-react';
import ProductCarousel from '../ProductCarousel';

const furnitureDeals = [
  {
    id: 501,
    name: "Nordic Velvet Armchair",
    price: "₹18,499",
    originalPrice: "₹24,999",
    discount: "26% OFF",
    rating: 4.8,
    reviews: 156,
    badge: "Hot Deal",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&fit=crop"
  },
  {
    id: 502,
    name: "Minimalist Oak Coffee Table",
    price: "₹8,990",
    originalPrice: "₹12,490",
    discount: "28% OFF",
    rating: 4.7,
    reviews: 89,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&fit=crop"
  },
  {
    id: 503,
    name: "Smart LED Floor Lamp",
    price: "₹4,250",
    originalPrice: "₹5,999",
    discount: "29% OFF",
    rating: 4.9,
    reviews: 210,
    badge: "Trend",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400&fit=crop"
  },
  {
    id: 504,
    name: "Aromatic Diffuser Set",
    price: "₹1,499",
    originalPrice: "₹2,200",
    discount: "32% OFF",
    rating: 4.8,
    reviews: 1.2,
    badge: "New",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=400&fit=crop"
  },
  {
    id: 505,
    name: "Cloud-Feel Mattress",
    price: "₹45,999",
    originalPrice: "₹59,999",
    discount: "23% OFF",
    rating: 5.0,
    reviews: 45,
    badge: "Best Value",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=400&fit=crop"
  }
];

const HomeLifestyleHotDeals = () => {
  return (
    <ProductCarousel 
      title="Limited Time Offers"
      subtitle="Exclusive discounts on seasonal favorites"
      viewAllLink="/offers"
      icon={<Tag className="text-orange-500 fill-orange-500" size={24} />}
      containerClass="bg-stone-50"
      products={furnitureDeals}
      cardProps={{
        reviewsAtBottom: true,
        variant: "default"
      }}
    />
  );
};

export default HomeLifestyleHotDeals;
