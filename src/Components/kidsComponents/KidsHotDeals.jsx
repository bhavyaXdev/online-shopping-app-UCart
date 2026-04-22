import React from "react";
import { Sparkles } from "lucide-react";
import ProductCarousel from "../ProductCarousel";

const hotDealsData = [
  { id: 1, name: "Mothercare Essentials", brand: "Mothercare", image: "https://images.unsplash.com/photo-1519689680058-324335c75eba?q=80&w=300&fit=crop", discount: "Under ₹499", price: "₹499", rating: 4.5, reviews: 120 },
  { id: 2, name: "Lego Creative Set", brand: "Lego", image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=300&fit=crop", discount: "Upto 40% Off", price: "₹899", rating: 4.8, reviews: 350 },
  { id: 3, name: "FirstCry Baby Wear", brand: "FirstCry", image: "https://images.unsplash.com/photo-1522771930-78848d92871d?q=80&w=300&fit=crop", discount: "Min. 50% Off", price: "₹299", rating: 4.6, reviews: 210 },
  { id: 4, name: "Barbie Dream Doll", brand: "Barbie", image: "https://images.unsplash.com/photo-1558066530-97f2c83ff0c8?q=80&w=300&fit=crop", discount: "Min. 30% Off", price: "₹1299", rating: 4.7, reviews: 890 },
  { id: 5, name: "Carter's Onesie", brand: "Carter's", image: "https://images.unsplash.com/photo-1544413660-299165566b1d?q=80&w=300&fit=crop", discount: "Under ₹399", price: "₹399", rating: 4.4, reviews: 156 },
  { id: 6, name: "Fisher-Price Toy", brand: "Fisher-Price", image: "https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=300&fit=crop", discount: "Min. 40% Off", price: "₹799", rating: 4.5, reviews: 420 },
  { id: 7, name: "Crocs Classic Kids", brand: "Crocs", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=300&fit=crop", discount: "Under ₹999", price: "₹999", rating: 4.9, reviews: 1020 },
  { id: 8, name: "Hot Wheels Track", brand: "Hot Wheels", image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=300&fit=crop", discount: "Flat 50% Off", price: "₹499", rating: 4.6, reviews: 280 }
];

const KidsHotDeals = () => {
  return (
    <ProductCarousel 
      title="Magical Deals"
      subtitle="Exclusive offers on your favorite kids brands"
      viewAllLink="#"
      icon={<Sparkles className="text-pink-500" size={24} strokeWidth={2.5} />}
      containerClass="bg-gradient-to-br from-[#fdf4ff] via-[#fbcfe8] to-[#f9a8d4] rounded-2xl md:rounded-3xl shadow-sm border border-pink-200 mt-6"
      products={hotDealsData}
      cardProps={{
        hideWishlist: true,
        reviewsAtBottom: true
      }}
    />
  );
};

export default KidsHotDeals;
