import React from 'react';
import CarouselScroller from './CarouselScroller';
import ProductCard from './ProductCard';

/**
 * ProductCarousel - A high-level reusable component to show a list of products in a scroller.
 * 
 * Props:
 * @param {Array} products - Array of product objects
 * @param {string} title - Section title
 * @param {string} subtitle - Section subtitle
 * @param {string} viewAllLink - Link for View All button
 * @param {string} containerClass - Custom section classes
 * @param {React.ReactNode} icon - Title icon
 * @param {Object} cardProps - Props to pass down to ProductCard
 */
const ProductCarousel = ({ 
  products, 
  title, 
  subtitle, 
  viewAllLink, 
  containerClass, 
  icon,
  centerHeader,
  cardProps = {}
}) => {
  if (!products || products.length === 0) return null;

  return (
    <CarouselScroller 
      title={title}
      subtitle={subtitle}
      viewAllLink={viewAllLink}
      containerClass={containerClass}
      icon={icon}
      centerHeader={centerHeader}
    >
      {products.map((product, index) => (
        <div key={product.id || index} className="snap-start shrink-0 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]">
          <ProductCard 
            product={product} 
            {...cardProps}
          />
        </div>
      ))}
    </CarouselScroller>
  );
};

export default ProductCarousel;
