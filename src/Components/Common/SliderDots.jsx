import React from 'react';

const SliderDots = ({ 
  count, 
  activeIndex, 
  onDotClick, 
  variant = 'default',
  className = "" 
}) => {
  if (count <= 1) return null;

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick && onDotClick(i)}
          className={`
            transition-all duration-300 rounded-full
            ${activeIndex === i 
              ? 'w-6 h-2 bg-brand-primary' 
              : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'}
          `}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default SliderDots;
