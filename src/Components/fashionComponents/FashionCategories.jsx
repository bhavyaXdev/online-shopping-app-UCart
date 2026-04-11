import React from "react";

const categoriesData = [
  // Col 1
  { name: "Wedding Store", img: "https://images.unsplash.com/photo-1583391733958-650fac5eb367?q=80&w=200&fit=crop", bg: "bg-[#fcf5cd]" },
  { name: "Trends", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=200&fit=crop", bg: "bg-[#fae6e3]" },
  // Col 2
  { name: "Shirts, Tshirts", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200&fit=crop", bg: "bg-[#fcf5cd]" },
  { name: "Kurta sets", img: "https://images.unsplash.com/photo-1583391733958-650fac5eb367?q=80&w=200&fit=crop", bg: "bg-[#fae6e3]" },
  // Col 3
  { name: "Jeans", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=200&fit=crop", bg: "bg-[#fcf5cd]" },
  { name: "Dresses, Co-ords", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200&fit=crop", bg: "bg-[#fae6e3]" },
  // Col 4
  { name: "Sports Shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&fit=crop", bg: "bg-[#fcf5cd]" },
  { name: "Casual footwear", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=200&fit=crop", bg: "bg-[#fae6e3]" },
  // Col 5
  { name: "Watches", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=200&fit=crop", bg: "bg-[#fcf5cd]" },
  { name: "Backpacks", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=200&fit=crop", bg: "bg-[#fae6e3]" },
  // Col 6
  { name: "Kids' clothing", img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=200&fit=crop", bg: "bg-[#fcf5cd]" },
  { name: "Jewellery", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=200&fit=crop", bg: "bg-[#fae6e3]" },
  // Col 7
  { name: "Luggage", img: "https://images.unsplash.com/photo-1551524164-687a55dd1126?q=80&w=200&fit=crop", bg: "bg-[#fcf5cd]" },
  { name: "Sarees", img: "https://images.unsplash.com/photo-1610189013028-2ce181467a50?q=80&w=200&fit=crop", bg: "bg-[#fae6e3]" },
  // Col 8
  { name: "Kurtas..", img: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=200&fit=crop", bg: "bg-[#fcf5cd]" },
  { name: "Jeans,trousers", img: "https://images.unsplash.com/photo-1541432900742-dfaece1b4a92?q=80&w=200&fit=crop", bg: "bg-[#fae6e3]" },
  // Col 9
  { name: "Trunk, Vests", img: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=200&fit=crop", bg: "bg-[#fcf5cd]" },
  { name: "Kurtis", img: "https://images.unsplash.com/photo-1583391733958-650fac5eb367?q=80&w=200&fit=crop", bg: "bg-[#fae6e3]" },
  // Col 10
  { name: "Summer Wear", img: "https://images.unsplash.com/photo-1519046460708-287d930a04c8?q=80&w=200&fit=crop", bg: "bg-[#fcf5cd]" },
  { name: "Sports Shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&fit=crop", bg: "bg-[#fae6e3]" },
  // Col 11
  { name: "Sports Wear", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=200&fit=crop", bg: "bg-[#fcf5cd]" },
  { name: "Nightsuits", img: "https://images.unsplash.com/photo-1532453288672-3a27e9be2d12?q=80&w=200&fit=crop", bg: "bg-[#fae6e3]" }
];

const FashionCategories = () => {
  return (
    <section className="container mx-auto w-full py-4 md:py-8 px-4 md:px-10">
      <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Align exactly to beginning and ending using full min-width and space-between */}
        <div className="grid grid-rows-2 grid-flow-col gap-x-4 gap-y-6 pb-2 min-w-full w-max justify-between">
          {categoriesData.map((cat, i) => (
            <div 
              key={`cat-${i}`} 
              className="group cursor-pointer flex flex-col items-center gap-2 w-[90px] md:w-[100px]"
            >
              <div className={`w-[90px] h-[90px] md:w-[100px] md:h-[100px] ${cat.bg} rounded-xl overflow-hidden flex items-center justify-center relative shadow-sm`}>
                 <img src={cat.img} className="w-full h-full object-cover transition-transform duration-500" alt={cat.name} />
              </div>
              <h3 className="text-[11px] md:text-[13px] font-medium text-gray-800 text-center leading-tight px-1 flex-1 flex items-start justify-center w-full">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FashionCategories;
