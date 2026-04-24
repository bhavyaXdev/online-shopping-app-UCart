import React from 'react';
import { Book, GraduationCap, Trophy, Baby, ArrowBigRight, ArrowRight } from 'lucide-react';

const LibraryCard = ({ title, img, icon: Icon, color }) => (
  <div className="group relative flex-none w-[280px] sm:w-auto h-[300px] md:h-[350px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 snap-center">
    {/* Image Layer */}
    <img 
      src={img} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

    {/* Content Layer */}
    <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
      <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-4 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg`}>
        <Icon className="text-white w-6 h-6" />
      </div>
      
      <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
        {title}
      </h3>
      
      <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">
        <span>Explore Collection</span>
        <div className="h-px w-8 bg-current transition-all duration-500 group-hover:w-12" />
      </div>
    </div>
    
    {/* Decorative Inner Border on Hover */}
    <div className="absolute inset-4 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </div>
);

const BooksStationeryLibrary = () => {
  const libraryCategories = [
    {
      id: 1,
      title: "Academic Books",
      img: "https://i.pinimg.com/736x/20/0f/1f/200f1f9c763f54048ac8153ca10bb485.jpg",
      icon: GraduationCap,
      color: "bg-blue-600"
    },
    {
      id: 2,
      title: "Competitive Exam Books",
      img: "https://i.pinimg.com/736x/4e/bb/10/4ebb1083018643cc4257d7d016ac294a.jpg",
      icon: Trophy,
      color: "bg-amber-600"
    },
    {
      id: 3,
      title: "Story Books & Novels",
      img: "https://i.pinimg.com/736x/2b/0f/38/2b0f38df6621b8be42e93b249a7409a2.jpg",
      icon: Book,
      color: "bg-emerald-600"
    },
    {
      id: 4,
      title: "Kids Learning Books",
      img: "https://i.pinimg.com/736x/3d/0a/31/3d0a316a90cc199b0cf78d3b0d1b295f.jpg",
      icon: Baby,
      color: "bg-rose-600"
    }
  ];

  return (
    <section className="container mx-auto px-4 md:px-10 py-10 md:py-16">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-4">
        <div className="max-w-2xl">
          <span className="text-blue-600 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block">
            Digital Library
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 leading-[0.9] tracking-tighter">
            Discover Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">Great Adventure</span>
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-3 md:gap-4">
          <p className="text-stone-500 text-sm md:text-base font-medium max-w-xs leading-relaxed text-left md:text-right opacity-80">
            From academic excellence to imaginative escapes, find every book you need in our curated library.
          </p>
          <a href="/category/books-stationery" className="group flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] px-5 py-2.5 bg-stone-50 md:bg-transparent border-2 border-stone-100 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
            View All Collection
            <ArrowRight className="w-1.5 h-1.5 bg-current rounded-full group-hover:scale-150 transition-transform" />
          </a>
        </div>
      </div>

      {/* Responsive Layout: Carousel on Mobile, Grid on Desktop */}
      <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 md:gap-8 pb-6 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {libraryCategories.map((cat) => (
          <LibraryCard key={cat.id} {...cat} />
        ))}
      </div>
    </section>
  );
};

export default BooksStationeryLibrary;
