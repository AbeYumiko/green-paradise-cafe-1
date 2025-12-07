import React, { useState } from 'react';
import { IMAGES, MENU_ITEMS } from '../constants';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const categories = [
    { id: 'coffee', label: 'Coffee & Espresso' },
    { id: 'tea', label: 'Specialty Teas' },
    { id: 'meals', label: 'Light Meals' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const filteredItems = MENU_ITEMS.filter(item => 
    item.category === activeCategory || (activeCategory === 'desserts' && item.category === 'desserts') // Simplified for demo
  );

  return (
    <div className="bg-secondary min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[60vh] lg:h-[70vh]">
        <img src={IMAGES.menuHero} alt="Menu Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
           <div className="text-center text-white px-4 mt-16">
             <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">Taste the Freshness</h1>
             <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">A culinary journey inspired by nature's finest ingredients.</p>
           </div>
        </div>
      </div>

      {/* Content Container - Overlapping the Hero */}
      <div className="relative z-10 -mt-20 md:-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Featured Item Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl overflow-hidden mb-16 flex flex-col md:flex-row">
           <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
             <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Seasonal Special</span>
             <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Wild Berry & Hibiscus Iced Tea</h2>
             <p className="text-gray-600 mb-8 leading-relaxed">
               A refreshing blend of wild berries and floral hibiscus, perfectly chilled for a sunny day. Limited time only!
             </p>
             <div>
               <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg">
                 Try it now
               </button>
             </div>
           </div>
           <div className="md:w-1/2 relative h-64 md:h-auto">
             <img src={IMAGES.icedTea} alt="Special Drink" className="absolute inset-0 w-full h-full object-cover" />
           </div>
        </div>

        {/* Menu Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-primary text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="max-w-4xl mx-auto mb-24">
           <h3 className="text-3xl font-bold text-center text-primary mb-12 capitalize">{categories.find(c => c.id === activeCategory)?.label}</h3>
           <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {filteredItems.length > 0 ? filteredItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start border-b border-gray-200 pb-4 group hover:border-primary transition-colors">
                  <div className="pr-4">
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">{item.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  </div>
                  <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                </div>
              )) : (
                <div className="col-span-2 text-center text-gray-500 py-12">Items coming soon...</div>
              )}
           </div>
        </div>

        {/* Bottom Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
             <img src={IMAGES.pourOver} alt="Pour over" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
           </div>
           <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
             <img src={IMAGES.latteArt} alt="Latte Art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
           </div>
           <div className="aspect-square rounded-2xl overflow-hidden shadow-md md:hidden lg:block">
             <img src={IMAGES.modernCafe} alt="Cafe Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
           </div>
        </div>

      </div>
    </div>
  );
};