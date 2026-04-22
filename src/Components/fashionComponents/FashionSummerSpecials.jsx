import React from "react";

const summerData = [
  {
    img: "https://i.pinimg.com/736x/3b/7d/47/3b7d473724f11adfac303731a738d3eb.jpg",
    title: "Summer Dresses",
    price: "Under ₹999",
    bgColor: "bg-orange-50",
  },
  {
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=500&fit=crop",
    title: "Cotton Shirts",
    price: "Min. 40% Off",
    bgColor: "bg-blue-50",
  },
  {
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&fit=crop",
    title: "Sunglasses",
    price: "Starting ₹499",
    bgColor: "bg-yellow-50",
  },
  {
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&fit=crop",
    title: "Denim Shorts",
    price: "Up to 50% Off",
    bgColor: "bg-blue-100",
  },
];

const FashionSummerSpecials = () => {
  return (
    <section className="container mx-auto px-4 md:px-15 py-12 md:py-16 md:pt-0">
      {/* Decorative Summer Banner */}
      <div className="relative w-full max-w-full mx-auto shadow-sm flex flex-col items-center justify-center border border-[#ece7de] rounded-xl h-[200px] md:h-[280px]">
        {/* Lemon Pattern Background */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
          <img
            src="/image copy 7.png"
            className="w-full h-full object-cover opacity-100 "
            alt="Summer Lemons Background Pattern"
          />
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl bg-black/5"></div>

        {/* Top-left decoration */}
        <div className="absolute -top-20 -left-15 md:-top-10 md:-left-5 w-50 h-50 md:w-70 md:h-70 pointer-events-none z-10 -rotate-12 ">
          <img
            src="/image copy 6.png"
            alt="summer vibes"
            className="w-full h-full object-contain drop-shadow-sm transition-transform duration-700 hover:rotate-12"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        {/* Bottom-right decoration (Leaves) */}
        <div className="absolute -bottom-8  -right-4 md:bottom-0 md:right-25 w-24 h-24 md:w-36 md:h-36 pointer-events-none drop-shadow-md z-10">
          <img
            src="/image copy 8.png"
            alt="Decorative leaves"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        {/* Elegant Typography inside a stylish frosted pill */}
        <div className="relative z-10 flex flex-col items-center bg-white/70 md:px-8 px-2 md:py-4 py-3 rounded-xl shadow-sm backdrop-blur-md border border-white/50">
          <h2 className="text-md md:text-3xl lg:text-4xl font-black text-gray-900 tracking-wide font-serif uppercase text-center">
            Breezy Styles for Every Day
          </h2>
        </div>
      </div>

      {/* Summer Specials Section with Sunflower Background */}
      <div className="relative mt-20 md:mt-20 px-4 md:px-10 pt-20 pb-10 md:py-25 md:pb-5 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-inner md:mx-0">
        <h2 className="absolute top-6 left-0 right-0 md:left-10 md:right-auto text-2xl md:text-4xl font-black text-gray-900 tracking-wide font-serif uppercase z-10 text-center md:text-left whitespace-nowrap">
          Summer Specials
        </h2>
        <div className="absolute hidden md:block inset-0 top-8 md:top-3 left-[83%] z-10 w-15 h-15 md:w-50 md:h-50 opacity-100">
          <img
            src="/image copy 10.png"
            alt="Sunflower Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute  top-10 md:top-5\8 left-[85%] md:left-[37%] z-10 w-10 h-10 md:w-15 md:h-15 opacity-100">
          <img
            src="/image copy 2.png"
            alt="Sunflower Background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Background Decorative Image */}
        <div className="absolute inset-0 z-0 opacity-100">
          <img
            src="/image copy 9.png"
            alt="Sunflower Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 "></div>
        </div>

        {/* Summer Specials Grid */}
        <div className="relative z-10 mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {summerData.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Unified Card Container - Reduced Heights */}
              <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 md:border-4 border-white h-[210px] md:h-[320px]">
                {/* Image wrapper */}
                <div
                  className={`relative w-full h-[60%] md:h-[65%] overflow-hidden ${item.bgColor}`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content (Inside the card) */}
                <div className="grow p-2 md:p-4 flex flex-col items-center justify-center text-center bg-white">
                  <h3 className="text-gray-900 font-serif text-[13px] md:text-lg font-black mb-0.5 md:mb-1 transition-colors group-hover:text-orange-600 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-orange-500 md:text-yellow-600 text-[8px] md:text-[11px] font-black tracking-widest uppercase">
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FashionSummerSpecials;
