import React from 'react';
import { Sparkles } from 'lucide-react';
import ProductCarousel from '../ProductCarousel';

const newArrivals = [
  {
    id: 301,
    name: "MacBook Pro M3 Max",
    price: "₹3,19,900",
    originalPrice: "",
    discount: "NEW",
    rating: 5.0,
    reviews: 12,
    badge: "Just Launched",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 302,
    name: "Alienware m18 R2",
    price: "₹2,99,990",
    originalPrice: "",
    discount: "NEW",
    rating: 4.8,
    reviews: 8,
    badge: "Flagship",
    image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 303,
    name: "Samsung Odyssey OLED G9",
    price: "₹1,54,990",
    originalPrice: "₹1,89,990",
    discount: "PRE-ORDER",
    rating: 4.9,
    reviews: 45,
    badge: "Exclusive",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400" 
  },
  {
    id: 304,
    name: "Logitech MX Master 3S",
    price: "₹10,990",
    originalPrice: "",
    discount: "LATEST",
    rating: 4.9,
    reviews: 320,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1527814050087-379381547969?auto=format&fit=crop&q=80&w=400" 
  },
  {
    id: 305,
    name: "ASUS Zenbook Duo",
    price: "₹1,59,990",
    originalPrice: "",
    discount: "NEW",
    rating: 4.7,
    reviews: 24,
    badge: "Dual Screen",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400" 
  }
];

const ComputersNewArrivals = () => {
  return (
    <ProductCarousel 
      title={(
        <span className=" relative ">
          <span>New In: Latest Tech & Trends</span>
          <img 
            src="/new arrivals offer.png" 
            alt="Sale Tags" 
            className="w-auto rotate-6 absolute -bottom-12 -right-15 h-20 md:h-20 object-contain drop-shadow-md hover:scale-105 transition-transform self-end"
          />
        </span>
      )}
      // subtitle="The latest and greatest in tech"
      // viewAllLink="#"
      containerClass="bg-white"
      centerHeader={true}
      products={newArrivals}
      cardProps={{
        variant: "offer"
      }}
    />
  );
};

export default ComputersNewArrivals;
