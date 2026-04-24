import React from 'react';

/**
 * CategoryGrid - A reusable component for category grids (Shop by Category).
 * 
 * Props:
 * @param {Array} categories - Array of category objects { id, name, img, ... }
 * @param {string} title - Section title
 * @param {string} containerClass - Optional classes for section padding/bg
 * @param {string} gridClass - Optional classes for the grid container
 * @param {string} cardClass - Optional classes for individual cards
 * @param {string} imageClass - Optional classes for category images
 */
const CategoryGrid = ({ 
  categories, 
  title, 
  containerClass = "py-4 md:py-8", 
  gridClass = "gap-x-4 gap-y-6", 
  cardClass = "w-[90px] md:w-[100px]",
  imageClass = "",
  titleClass = "text-xl md:text-2xl font-black text-gray-900 tracking-tight flex items-center",
  textClass = "text-[11px] md:text-[13px] font-medium text-gray-800 text-center leading-tight px-1 flex-1 flex items-start justify-center w-full"
}) => {
  if (!categories || categories.length === 0) return null;

  return (
    <section className={`container mx-auto px-4 md:px-10 w-full ${containerClass}`}>
      {title && (
        <div className="flex items-center gap-2 mb-4">
          <h2 className={titleClass}>
            {title}
          </h2>
        </div>
      )}
      
      <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className={`grid grid-rows-2 grid-flow-col pb-2 w-max justify-start ${gridClass}`}>
          {categories.map((cat, i) => (
            <div 
              key={cat.id || i} 
              className={`group cursor-pointer flex flex-col items-center gap-2 ${cardClass}`}
            >
              <div className={`w-[90px] h-[90px] md:w-[100px] md:h-[100px] ${cat.bg || 'bg-gray-50'} rounded-xl overflow-hidden flex items-center justify-center relative shadow-sm ${imageClass}`}>
                <img 
                  src={cat.img} 
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={textClass}>
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
