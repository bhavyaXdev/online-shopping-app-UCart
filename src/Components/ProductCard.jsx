import React from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";

/**
 * ProductCard component
 * @param {Object} props
 * @param {Object} props.product - Product data object
 * @param {Boolean} props.hideWishlist - Whether to hide the wishlist button
 * @param {Boolean} props.hideCart - Whether to hide the cart button
 * @param {Boolean} props.hideCategory - Whether to hide the category tag
 * @param {Boolean} props.hideOriginalPrice - Whether to hide the linethrough price
 * @param {Boolean} props.reviewsAtBottom - Whether to show reviews in the content section instead of image overlay
 */
const ProductCard = ({ 
  product, 
  hideWishlist = false, 
  hideCart = false, 
  hideCategory = false, 
  hideOriginalPrice = false,
  reviewsAtBottom = false
}) => {
  if (!product) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gray-50 h-[160px] sm:h-[180px] md:h-[220px] lg:h-[240px] w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Offer Badge on Top of Image */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm uppercase tracking-tighter z-10">
            {product.discount}
          </div>
        )}

        {/* Reviews Overlay on Image (Bottom Left) - Shown if not explicitly requested at bottom */}
        {!reviewsAtBottom && (
          <div className="absolute bottom-1.5 left-1.5 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-sm flex items-center shadow-sm z-10">
            <span className="text-gray-900 text-[8px] font-black mr-0.5">{product.rating}</span>
            <Star size={8} className="text-yellow-500 fill-yellow-500" />
            <div className="w-[1px] h-2 bg-gray-300 mx-1"></div>
            <span className="text-gray-500 text-[8px] font-bold">({product.reviews})</span>
          </div>
        )}

        {/* Desktop Quick Icons Overlay */}
        {!hideWishlist && (
          <div className="absolute right-2 top-12 -translate-y-1/2 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10 hidden md:flex">
             <button className="w-8 h-8 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 hover:text-brand-primary hover:bg-white shadow-lg transition-all active:scale-90">
              <Heart size={14} />
            </button>
             <button className="w-8 h-8 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 hover:text-brand-primary hover:bg-white shadow-lg transition-all active:scale-90">
              <ShoppingCart size={14} />
            </button>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-2.5 md:p-3 flex flex-col flex-1">
        {/* Category Row */}
        <div className="flex items-center justify-between mb-1">
          {!hideCategory && (
            <div className="text-[9px] font-black text-[#FF6B35] uppercase tracking-wider mb-1 leading-none">
              {product.category?.replace(" Wear", "S").replace("Sets", "SET").toUpperCase()}
            </div>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-gray-900 font-bold text-[12px] md:text-[13px] mb-1 group-hover:text-brand-primary transition-colors line-clamp-2 leading-tight min-h-[2.4em]">
          {product.name}
        </h3>

        {/* Reviews at Bottom (Content Section) - Shown Below Title */}
        {reviewsAtBottom && (
          <div className="flex items-center gap-1.5 mb-2 mt-1">
            <div className="flex items-center bg-green-50 px-1.5 py-0.5 rounded border border-green-100">
              <span className="text-green-700 text-[10px] font-black mr-0.5">{product.rating}</span>
              <Star size={8} className="text-green-700 fill-green-700" />
            </div>
            <span className="text-gray-400 text-[10px] font-bold">({product.reviews} Reviews)</span>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-1">
          {/* Price Stack */}
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-black text-gray-900 leading-none">{product.price}</span>
            {product.originalPrice && !hideOriginalPrice && (
              <span className="text-[10px] text-gray-400 line-through font-medium mt-0.5 leading-none">{product.originalPrice}</span>
            )}
          </div>

          {/* Icon-Only Action Buttons - Hidden on Large Screens for Premium Look */}
          <div className="flex items-center gap-1.5 lg:hidden">
            {!hideWishlist && (
              <button
                className="w-8 h-8 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg flex items-center justify-center transition-all active:scale-90 border border-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  // Wishlist logic
                }}
                title="Add to Wishlist"
              >
                <Heart size={15} />
              </button>
            )}
            {!hideCart && (
              <button
                className="w-8 h-8 bg-[#1A1A2E] hover:bg-brand-primary text-white rounded-lg flex items-center justify-center transition-all active:scale-90 shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add to Cart logic
                }}
                title="Add to Cart"
              >
                <ShoppingCart size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
