import React from 'react';
import { Zap } from 'lucide-react';
import ProductCarousel from '../ProductCarousel';

const deals = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    price: "₹1,29,999",
    originalPrice: "₹1,34,999",
    discount: "Save ₹5000",
    rating: 4.9,
    reviews: 1204,
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro",
    price: "₹1,34,900",
    originalPrice: "₹1,34,900",
    discount: "Bank Offers",
    rating: 4.8,
    reviews: 3240,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "OnePlus 12 5G",
    price: "₹64,999",
    originalPrice: "₹69,999",
    discount: "7% OFF",
    rating: 4.7,
    reviews: 856,
    badge: "Best Value",
    image: "https://images.unsplash.com/photo-1706606991536-e39d424b94c4?auto=format&fit=crop&q=80&w=400" 
  },
  {
    id: 4,
    name: "Google Pixel 8 Pro",
    price: "₹1,06,999",
    originalPrice: "₹1,06,999",
    discount: "Free Watch",
    rating: 4.6,
    reviews: 512,
    badge: "AI Camera",
    image: "https://images.unsplash.com/photo-1696446700622-5444ca93ca0a?auto=format&fit=crop&q=80&w=400" 
  },
  {
    id: 5,
    name: "Nothing Phone (2)",
    price: "₹39,999",
    originalPrice: "₹44,999",
    discount: "11% OFF",
    rating: 4.5,
    reviews: 945,
    badge: "Unique Design",
    image: "https://images.unsplash.com/photo-1688582046429-1a6ec46a5127?auto=format&fit=crop&q=80&w=400" 
  }
];

const MobilesHotDeals = () => {
  return (
    <ProductCarousel 
      title="Hot Deals"
      subtitle="Unbeatable prices on latest smartphones"
      viewAllLink="#"
      icon={<Zap className="text-blue-500 fill-blue-500" size={20} md:size={24} />}
      containerClass="bg-[#f8f9fa]"
      products={deals}
      cardProps={{
        reviewsAtBottom: true
      }}
    />
  );
};

export default MobilesHotDeals;
