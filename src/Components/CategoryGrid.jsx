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
  containerClass = "py-6 md:py-10", 
  gridClass = "", 
  cardClass = "",
  imageClass = ""
}) => {
  if (!categories || categories.length === 0) return null;

  return (
    <section className={`container mx-auto px-4 md:px-10 border-b border-gray-100 ${containerClass}`}>
      {title && (
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <h2 className="text-lg md:text-2xl font-black text-gray-900 tracking-tight">
            {title}
          </h2>
        </div>
      )}
      
      <div className="w-full overflow-x-auto no-scrollbar pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className={`grid grid-rows-2 grid-flow-col gap-4 md:gap-8 min-w-full w-max justify-between ${gridClass}`}>
          {categories.map((cat, i) => (
            <div 
              key={cat.id || i} 
              className={`flex flex-col items-center group cursor-pointer ${cardClass}`}
            >
              <div className={`w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full md:rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 group-hover:border-blue-500 group-hover:shadow-xl transition-all duration-300 relative ${imageClass}`}>
                <img 
                  src={cat.img} 
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="mt-3 md:mt-4 text-[11px] md:text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors uppercase tracking-wide text-center max-w-[130px]">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
