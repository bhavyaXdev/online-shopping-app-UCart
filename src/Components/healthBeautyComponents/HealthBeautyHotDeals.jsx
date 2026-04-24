import React from 'react';
import { Sparkles } from 'lucide-react';
import ProductCarousel from '../ProductCarousel';

const beautyDeals = [
  {
    id: 701,
    name: "Vitamin C Brightening Serum",
    price: "₹1,249",
    originalPrice: "₹1,899",
    discount: "34% OFF",
    rating: 4.9,
    reviews: 1240,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&fit=crop"
  },
  {
    id: 702,
    name: "Hydrating Hyaluronic Cream",
    price: "₹899",
    originalPrice: "₹1,200",
    discount: "25% OFF",
    rating: 4.8,
    reviews: 856,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1598440467828-204595ec6be1?q=80&w=400&fit=crop"
  },
  {
    id: 703,
    name: "Matte Finish Sunscreen SPF 50",
    price: "₹450",
    originalPrice: "₹650",
    discount: "30% OFF",
    rating: 4.7,
    reviews: 2100,
    badge: "Protection",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=400&fit=crop"
  },
  {
    id: 704,
    name: "Rose Extraction Night Oil",
    price: "₹2,100",
    originalPrice: "₹2,800",
    discount: "25% OFF",
    rating: 5.0,
    reviews: 320,
    badge: "Lux",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=400&fit=crop"
  },
  {
    id: 705,
    name: "Charcoal Detox Pack",
    price: "₹599",
    originalPrice: "₹899",
    discount: "33% OFF",
    rating: 4.6,
    reviews: 156,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1596755094514-f87034a3a23c?q=80&w=400&fit=crop"
  }
];

const HealthBeautyHotDeals = () => {
  return (
    <ProductCarousel 
      title="Beauty Flash Sale"
      subtitle="Refined skincare at unbeatable prices"
      viewAllLink="/category/beauty-deals"
      icon={<Sparkles className="text-pink-400" size={24} />}
      containerClass="bg-pink-50/30"
      products={beautyDeals}
      cardProps={{
        reviewsAtBottom: true
      }}
    />
  );
};

export default HealthBeautyHotDeals;
