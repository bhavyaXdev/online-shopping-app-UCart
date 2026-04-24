import React from 'react';
import { Zap } from 'lucide-react';
import ProductCarousel from '../ProductCarousel';

const deals = [
  { id: 111, name: "MacBook Air M2", price: "₹1,04,900", originalPrice: "₹1,14,900", discount: "9% OFF", rating: 4.9, reviews: 2100, badge: "Most Popular", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400" },
  { id: 112, name: "Dell XPS 13", price: "₹1,19,990", originalPrice: "₹1,39,990", discount: "14% OFF", rating: 4.8, reviews: 1240, badge: "Trending", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400" },
  { id: 113, name: "ASUS ROG Zephyrus G14", price: "₹1,44,990", originalPrice: "₹1,64,990", discount: "12% OFF", rating: 4.7, reviews: 856, badge: "Gaming Elite", image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&q=80&w=400" },
  { id: 114, name: "Lenovo ThinkPad X1 Carbon", price: "₹1,34,990", originalPrice: "₹1,54,990", discount: "13% OFF", rating: 4.8, reviews: 512, badge: "Business class", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400" },
  { id: 115, name: "HP Envy x360", price: "₹89,990", originalPrice: "₹99,990", discount: "10% OFF", rating: 4.6, reviews: 945, badge: "2-in-1 Versatile", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400" }
];

const ComputersHotDeals = () => {
  return (
    <ProductCarousel 
      title="Top Deals on Laptops"
      subtitle="Limited Time Offers"
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

export default ComputersHotDeals;
